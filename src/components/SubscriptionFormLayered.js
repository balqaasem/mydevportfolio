import React, { useState } from 'react';
import SubscribeButton from './SubscribeButton';
import useSubscription from './hooks/useSubscription';
import NotificationPopup from './NotificationPopup';

const SubscriptionFormLayered = () => {
  const { email, setEmail, handleSubscription, message } = useSubscription();
  const [showPopup, setShowPopup] = useState(false);

  // Show the popup when there's a message
  React.useEffect(() => {
    if (message.length > 0) {
      setShowPopup(true);
    }
  }, [message]);

  return (
    <div className="subscription-form-layered-items flex flex-col items-center">
      <form onSubmit={handleSubscription} className="flex items-center">
        <div className="flex flex-col">
          <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="
                p-2 mb-2 bg-light dark:bg-dark text-gray-900 dark:text-gray-300 placeholder-gray-400
                dark:placeholder-gray-500 rounded border border-gray-300 dark:border-gray-600
                hover:border-primary hover:dark:border-primaryDark focus:outline-none focus:ring-2
                focus:ring-primary dark:focus:ring-primaryDark
              "
            />
          <SubscribeButton />
        </div>
      </form>
      {showPopup && <NotificationPopup message={message} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default SubscriptionFormLayered;
