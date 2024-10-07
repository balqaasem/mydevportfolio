import { useState } from 'react';

const useSubscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscription = async (e) => {
    e.preventDefault();
    let updatedEmail = e.target[0].value;
    setEmail(updatedEmail);

    const res = await fetch('/api/convertkitSubscribe', {
      body: JSON.stringify({ email: updatedEmail }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
    });

    const json_res = await res.json();

    setMessage(json_res.message);
    setEmail('');
  };

  return {
    email,
    setEmail,
    handleSubscription,
    message,
  };
};

export default useSubscription;
