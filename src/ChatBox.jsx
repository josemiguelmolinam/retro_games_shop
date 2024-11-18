import { useState, useRef, useEffect } from 'react';
import robotIcon from '../public/robot.png';
import userIcon from '../public/user.png';
import faq from './hooks/faq';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [greetingSent, setGreetingSent] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messageContainerRef = useRef(null);

  const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const socialLinks = {
    instagram: 'https://www.instagram.com/jdmlegendsimports/',
    youtube: 'https://www.youtube.com/@JDMLegendsImports',
    twitter: 'https://x.com/JDMLegendsCars',
  };

  const carModels = `
    Here are some iconic Japanese models we can help you source:
    - **Toyota**: Supra MK4, Celica GT-Four, AE86, MR2.
    - **Nissan**: Skyline GT-R (R32/R33/R34), Silvia S13/S14/S15, 300ZX, Fairlady Z.
    - **Mazda**: RX-7 FD, RX-8, MX-5 Miata.
    - **Honda**: NSX, Civic Type R (EK9/FK8), Integra Type R, S2000.
    - **Subaru**: Impreza WRX STI, BRZ.
    - **Mitsubishi**: Lancer Evolution (I-X), 3000GT.
  `;

  const [hasOpenedAutomatically, setHasOpenedAutomatically] = useState(false);

  useEffect(() => {
    if (!hasOpenedAutomatically) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        if (!greetingSent) {
          const greetingMessage = {
            sender: 'ai',
            text: 'Hola! soy tu asistente personal en JDM Legends ¿Cómo puedo ayudarte hoy?',
          };
          setMessages((prev) => [...prev, greetingMessage]);
          setGreetingSent(true);
        }
        setHasOpenedAutomatically(true);
      }, 30000);

      return () => clearTimeout(timer); 
    }
  }, [hasOpenedAutomatically, greetingSent]);


  const getFAQResponse = (input) => {
    const lowerInput = input.toLowerCase();

    const isSpanish =
      /[áéíóúñü¿¡]/i.test(lowerInput) ||
      /^[a-zñáéíóúü\s.,!?¿¡]+$/i.test(lowerInput);
    const language = isSpanish ? 'es' : 'en';

    for (const question of faq.questions) {
      if (question.keywords.some((keyword) => lowerInput.includes(keyword))) {
        return question.responses[language];
      }
    }

    return null;
  };

  const getSocialLinksResponse = (input) => {
    const lowerInput = input.toLowerCase();
    if (
      lowerInput.includes('instagram') ||
      lowerInput.includes('youtube') ||
      lowerInput.includes('twitter')
    ) {
      return `
        Aquí tienes nuestras redes sociales:
        - [Instagram](${socialLinks.instagram})
        - [YouTube](${socialLinks.youtube})
        - [Twitter](${socialLinks.twitter})
      `;
    }
    return null;
  };

  const getCarModelsResponse = (input) => {
    const lowerInput = input.toLowerCase();
    if (
      lowerInput.includes('modelos') ||
      lowerInput.includes('cars') ||
      lowerInput.includes('coches')
    ) {
      return carModels;
    }
    return null;
  };

  const getAIResponse = async (userInput) => {
    const isSpanish =
      /[áéíóúñü¿¡]/i.test(userInput) || /^[a-zñáéíóúü\s?]+$/i.test(userInput);

    const prompt = `
      Contexto de la empresa:
      ${faq.context}
      
      Pregunta del usuario:
      ${userInput}
      
      Responde de manera clara y profesional en ${
        isSpanish ? 'español' : 'inglés'
      }.
    `;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: prompt }],
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.choices[0].message.content.trim();
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;

    const newMessage = { sender: 'user', text: userInput };
    setMessages((prev) => [...prev, newMessage]);
    setUserInput('');
    setIsBotTyping(true);
    setLoading(true);

    try {
      const faqResponse = getFAQResponse(userInput);
      if (faqResponse) {
        setMessages((prev) => [...prev, { sender: 'ai', text: faqResponse }]);
      } else {
        const socialResponse = getSocialLinksResponse(userInput);
        if (socialResponse) {
          setMessages((prev) => [
            ...prev,
            { sender: 'ai', text: socialResponse },
          ]);
        } else {
          const carModelsResponse = getCarModelsResponse(userInput);
          if (carModelsResponse) {
            setMessages((prev) => [
              ...prev,
              { sender: 'ai', text: carModelsResponse },
            ]);
          } else {
            const aiResponse = await getAIResponse(userInput);
            setMessages((prev) => [
              ...prev,
              { sender: 'ai', text: aiResponse },
            ]);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching AI response:', error.message);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: '¡Ups! Parece que algo no está funcionando bien ¿Podrías intentarlo de nuevo más tarde? Gracias.',
        },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setIsBotTyping(false);
      }, 30000);
    }
  };

  const handleToggleChat = () => {
    setIsOpen((prevIsOpen) => {
      if (!prevIsOpen && !greetingSent) {
        const greetingMessage = {
          sender: 'ai',
          text: 'Hola! soy tu asistente personal en JDM Legends. ¿Cómo puedo ayudarte hoy?',
        };
        setMessages((prev) => [...prev, greetingMessage]);
        setGreetingSent(true);
      }
      return !prevIsOpen;
    });
  };

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className='relative'>
      <button
        onClick={handleToggleChat}
        className={`fixed bottom-4 right-24 bg-slate-800 text-white rounded-full p-2 md:p-2 md:mb-2 md:ml-5 car-info shadow-lg transition-transform transform ${
          isOpen ? 'scale-105' : ''
        } chat-icon animate-pulse`}
        aria-label='Open chat'
      >
        <img src={robotIcon} alt='Chat Robot' className='w-8 h-8' />
      </button>

      {isOpen && (
        <div
          className='w-100 md:h-[420px] md:mr-16 p-4 bg-slate-800 shadow-lg rounded-lg chatbox fixed top-[450px] right-24 z-50 animate-fade-in'
          style={{ border: '1px solid #03e9f4' }}
        >
          <div className='flex justify-between items-center mb-4 border-b border-gray-600 pb-2'>
            <div className='flex items-center'>
              <img src={robotIcon} alt='Robot' className='w-8 h-8 mr-2' />
              <button
                className={`text-white font-bold rounded-full px-2 py-1 text-xs ${
                  isBotTyping ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {isBotTyping ? 'Online' : 'Offline'}
              </button>
              <span className='ml-12 text-[#03e9f4] font-racing text-lg'>
              Virtual Assistant
              </span>
            </div>
            <button
              onClick={handleToggleChat}
              className='text-[#03e9f4] font-extrabold'
            >
              X
            </button>
          </div>

          <div
            ref={messageContainerRef}
            className='h-64 overflow-y-auto mb-4 chatbox-messages'
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-6 flex ${
                  msg.sender === 'user' ? 'justify-start' : 'justify-end'
                }`}
              >
                {msg.sender === 'user' && (
                  <img src={userIcon} alt='Usuario' className='w-12 h-12 mr-2' />
                )}
                <span
                  className={`max-w-xs break-words inline-block rounded text-sm px-4 py-2 ${
                    msg.sender === 'user'
                      ? 'bg-teal-500 text-white'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {msg.text}
                </span>
                {msg.sender === 'ai' && (
                  <img src={robotIcon} alt='Robot' className='w-8 h-8 ml-2' />
                )}
              </div>
            ))}
            {loading && (
              <div className='text-center text-gray-500 text-xs'>
                Cargando...
              </div>
            )}
          </div>

          <div className='flex rounded-lg chatbox-input-container mt-9'>
            <input
              type='text'
              value={userInput}
              onChange={handleUserInputChange}
              className='flex-grow border text-white bg-slate-700 rounded p-2 mr-2 chatbox-input'
              placeholder='Type a message...'
            />
            <button
              onClick={handleSendMessage}
              className=' chat-send-btn text-sm'
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
