import React from 'react';

const Support = () => {
  return (
    <div className='container mx-auto mt-36 px-10 py-10 text-gray-300'>
      <h1
        className='text-3xl text-gray-200 font-racing mb-16'
        style={{
          textShadow:
            '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
          WebkitTextStroke: '1px rgba(0,0,0,0.8)',
        }}
      >
        Customer Support
      </h1>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          How can I get in touch with customer support?
        </h2>
        <p>
          You can reach our customer support team through multiple channels. For
          immediate assistance, you can call us at our dedicated support
          hotline. Alternatively, you can send us an email or use the contact
          form on our website. Our support team is available Monday through
          Friday, from 9 AM to 6 PM time in Japan, to address your inquiries.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          How can I track the status of my car shipment?
        </h2>
        <p>
          Once your car has been shipped, we will provide you with the shipping documentation and the estimated arrival date. You can track the status of your car through various applications and the shipping company's website. Please note that while we provide an estimated arrival date, there may be delays due to weather conditions or other unforeseen incidents. If you have any questions or concerns about your shipment, please contact our support team for further assistance.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          Do you offer vehicle inspections?
        </h2>
        <p>
          Yes, we offer optional vehicle inspections after purchase. This service allows you to have peace of mind by ensuring the condition of your vehicle. Our team will provide you with detailed information about the inspection process and any associated costs. Please let us know if you are interested in this service when you inquire about a car.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          What are the payment options available?
        </h2>
        <p>
          We offer a variety of payment options to make the purchasing process convenient for you. You can pay via bank transfer, credit card, or other secure methods. Our sales team will provide you with all the necessary details to complete your payment. If you have any questions regarding payment methods, please do not hesitate to contact us.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          How can I contact customer support for additional information?
        </h2>
        <p>
          Our customer support team is available to assist you with any questions or concerns you may have. You can reach us by phone, email, or through our website's contact form. We strive to respond to all inquiries as quickly as possible. Additionally, you can visit our support page for helpful resources and answers to common questions.
        </p>
      </div>
    </div>
  );
};

export default Support;


