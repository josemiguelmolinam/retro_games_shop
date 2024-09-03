import React from 'react';

const FAQs = () => {
  return (
    <div className='container mt-36 mx-auto px-10 py-10 text-gray-300'>
      <h1
        className='text-3xl text-gray-200 font-racing mb-16'
        style={{
          textShadow:
            '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
          WebkitTextStroke: '1px rgba(0,0,0,0.8)',
        }}
      >
        Frequently Asked Questions
      </h1>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          What types of cars do you offer?
        </h2>
        <p>
          We offer a wide variety of Japanese cars, ranging from classic models
          to modern high-performance vehicles. Our selection includes well-known
          brands like Toyota, Nissan, Honda, Subaru, and more. Whether you're
          looking for a reliable daily driver or a rare collectible, we have
          options to suit every need and preference.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          How can I purchase a car?
        </h2>
        <p>
          To purchase a car from JDM Legends, simply browse our online catalog
          to view the available models. Once you find a car you're interested
          in, you can contact us directly through our website or by phone. Our
          team will guide you through the purchasing process, including payment
          options, necessary documentation, and any additional questions you may
          have.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          Do you offer shipping and delivery services?
        </h2>
        <p>
          Yes, we offer comprehensive shipping and delivery services to various
          locations in Europe. Our team handles all aspects of the shipping
          process, ensuring that your car arrives safely and on time. We provide
          detailed tracking information and regular updates throughout the
          shipping process. For more information on shipping rates and delivery
          times, please contact our support team.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          Do you provide vehicle inspections?
        </h2>
        <p>
          We offer optional vehicle inspections after the purchase if the
          customer desires. This service allows you to have peace of mind by
          ensuring the condition of your vehicle. Our team will provide you with
          detailed information about the inspection process and any associated
          costs. Please let us know if you are interested in this service when
          you inquire about a car.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          How can I contact customer support?
        </h2>
        <p>
          Our customer support team is available to assist you with any
          questions or concerns you may have. You can reach us by phone, email,
          or through our website's contact form. We strive to respond to all
          inquiries as quickly as possible. Additionally, you can visit our
          support page for helpful resources and answers to common questions.
        </p>
      </div>
    </div>
  );
};

export default FAQs;
