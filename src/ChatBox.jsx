import React, { useState, useRef, useEffect } from 'react';
import robotIcon from '../public/robot.png';
import userIcon from '../public/user.png';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [greetingSent, setGreetingSent] = useState(false);
  const messageContainerRef = useRef(null);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;

    const newMessage = { sender: 'user', text: userInput };
    setMessages((prev) => [...prev, newMessage]);
    setUserInput('');

    setIsBotTyping(true);  
    setLoading(true);
    try {
      const aiResponse = await getAIResponse(userInput);
      setMessages((prev) => [...prev, { sender: 'ai', text: aiResponse }]);
    } catch (error) {
      console.error('Error fetching AI response:', error.message);
      setMessages((prev) => [...prev, { sender: 'ai', text: "I apologize for the inconvenience, but I'm currently experiencing technical difficulties." }]);
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
        const greetingMessage = { sender: 'ai', text: "Hello, how can I assist you?" };
        setMessages((prev) => [...prev, greetingMessage]);
        setGreetingSent(true);
      }
      return !prevIsOpen;
    });
  };

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggleChat}
        className={`fixed bottom-4 right-24 bg-slate-800 text-white rounded-full p-2 md:p-2 md:mb-2 md:ml-5 car-info shadow-lg transition-transform transform ${isOpen ? 'scale-105' : ''} chat-icon animate-pulse`}
        aria-label="Open chat"
      >
        <img src={robotIcon} alt="Chat Robot" className="w-8 h-8" />
      </button>

      {isOpen && (
        <div className="w-100 md:h-[420px] md:mr-16 p-4 bg-slate-800 shadow-lg rounded-lg chatbox fixed top-[450px]  right-24 z-50 animate-fade-in"
          style={{ border: '1px solid #03e9f4' }}>
          <div className="flex justify-between items-center mb-4 border-b border-gray-600 pb-2">
            <div className="flex items-center">
              <img src={robotIcon} alt="Robot" className="w-8 h-8 mr-2" />
              <button className={`text-white font-bold rounded-full px-2 py-1 text-xs ${isBotTyping ? 'bg-green-500' : 'bg-red-500'}`}>
                {isBotTyping ? 'Online' : 'Offline'}
              </button>
              <span className="ml-12 text-[#03e9f4] font-racing text-lg">Virtual Chat</span>
            </div>
            <button onClick={handleToggleChat} className="text-[#03e9f4] font-extrabold">X</button>
          </div>

          <div ref={messageContainerRef} className="h-64 overflow-y-auto mb-4 chatbox-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-6 flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}>
                {msg.sender === 'user' && <img src={userIcon} alt="Usuario" className="w-8 h-8 mr-2" />}
                <span className={`max-w-xs break-words inline-block rounded text-sm px-4 py-2 ${msg.sender === 'user' ? 'bg-teal-500 text-white' : 'bg-blue-600 text-white'}`}>
                  {msg.text}
                </span>
                {msg.sender === 'ai' && <img src={robotIcon} alt="Robot" className="w-8 h-8 ml-2" />}
              </div>
            ))}
            {loading && <div className="text-center text-gray-500 text-xs">Cargando...</div>}
          </div>

          <div className="flex chatbox-input-container mt-9">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInputChange}
              className="flex-grow border text-white bg-slate-700 rounded p-2 mr-2 chatbox-input"
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage} className=" chat-send-btn text-sm">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;

