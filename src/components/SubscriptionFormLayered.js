import React, { useState } from 'react';
import SubscribeButton from './SubscribeButton';

const SubscriptionFormLayered = () => {
  const [email, setEmail] = useState('');

  const handleSubscription = async (e) => {
    e.preventDefault();
    // Add logic to handle email subscription with ConvertKit
    console.log(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <div className="blog-subscription flex flex-col items-center">
      <form onSubmit={handleSubscription} className="flex items-center">
        <div className="flex flex-col">
          <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="
                p-2 mb-2 bg-light text-gray-400 dark:bg-dark dark:text-gray-300 rounded border 
                border-gray-300 dark:border-gray-600 hover:border-primary hover:dark:border-primaryDark
                focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark
              "
            />
          <SubscribeButton/>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionFormLayered;
