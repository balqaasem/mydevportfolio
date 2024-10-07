import React, { useState } from 'react';
import SubscribeButton from './SubscribeButton';
import useSubscription from './hooks/useSubscription';
import NotificationPopup from './NotificationPopup';

const SubscriptionForm = () => {
  const { email, setEmail, handleSubscription, message } = useSubscription();
  const [showPopup, setShowPopup] = useState(false);

  // Show the popup when there's a message
  React.useEffect(() => {
    if (message.length > 0) {
      setShowPopup(true);
    }
  }, [message]);

  return (
    <div className="subscription-form-items flex flex-col items-center">
      <form onSubmit={handleSubscription} className="flex items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="
            p-2 mr-2 bg-light dark:bg-dark text-dark dark:text-light placeholder-gray-400
            dark:placeholder-gray-500 rounded border border-gray-300 dark:border-gray-600
            hover:border-primary hover:dark:border-primaryDark focus:outline-none focus:ring-2
            focus:ring-primary dark:focus:ring-primaryDark
          "
        />
        <SubscribeButton />
      </form>
      {showPopup && <NotificationPopup message={message} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default SubscriptionForm;
