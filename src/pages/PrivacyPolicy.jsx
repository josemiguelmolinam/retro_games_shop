import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='container mx-auto mt-24 px-10 py-10 text-gray-300'>
      <h1
        className='text-3xl text-gray-200 font-racing mb-16'
        style={{
          textShadow:
            '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
          WebkitTextStroke: '1px rgba(0,0,0,0.8)',
        }}
      >
        Privacy Policy
      </h1>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          Introduction
        </h2>
        <p>
          At JDM Legends, we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and safeguard your
          personal information when you visit our website or make a purchase
          from us. By using our website, you agree to the terms of this policy.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          Information We Collect
        </h2>
        <p>
          We collect information that you provide to us directly, such as when
          you create an account, make a purchase, or contact our support team.
          This information may include your name, email address, phone number,
          shipping address, and payment details. We also collect information
          about your use of our website, including your IP address, browser
          type, and browsing behavior.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          How We Use Your Information
        </h2>
        <p>
          We use your information to process your orders, provide customer
          support, and improve our services. This includes using your
          information to communicate with you about your orders, respond to your
          inquiries, and send you updates and promotional offers. We may also
          use your information to analyze website usage and improve our
          website's functionality and user experience.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          How We Share Your Information
        </h2>
        <p>
          We do not sell or rent your personal information to third parties. We
          may share your information with trusted service providers who assist
          us in operating our business and providing services to you. These
          service providers are contractually obligated to protect your
          information and use it only for the purposes for which it was
          disclosed. We may also disclose your information if required by law or
          to protect our rights and property.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          Your Choices
        </h2>
        <p>
          You have the right to access, update, and delete your personal
          information. You can do this by logging into your account on our
          website or by contacting our support team. You can also choose to
          opt-out of receiving promotional emails from us by following the
          unsubscribe instructions in the emails. Please note that even if you
          opt-out of receiving promotional emails, we may still send you
          transactional emails related to your orders and account.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>Security</h2>
        <p>
          We take the security of your personal information seriously and
          implement appropriate measures to protect it from unauthorized access,
          disclosure, alteration, and destruction. However, please be aware that
          no security measures are perfect or impenetrable, and we cannot
          guarantee the absolute security of your information.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>
          Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. We will notify you of any
          significant changes by posting the updated policy on our website and
          indicating the date of the latest revision. Your continued use of our
          website after the posting of changes constitutes your acceptance of
          the updated policy.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl text-cyan-400 mb-6 font-semibold'>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at{' '}
          <span className='text-cyan-400'>jdmlegendsimports@gmail.com</span> We
          will respond to your inquiries promptly and work with you to address
          any concerns you may have.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
