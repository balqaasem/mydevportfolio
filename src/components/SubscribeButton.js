import React, { useState } from 'react';

const SubscribeButton = ({ onClick }) => {

  return (
    <div className="subscribe-button flex flex-col items-center">
        <button
          onClick={onClick}
          type="submit"
          className="
            subscribe-button p-2 rounded bg-red-600 dark:bg-red-600 text-light dark:text-light
            hover:bg-primary hover:dark:bg-primaryDark hover:text-primaryDark hover:dark:text-primary
          ">
          Subscribe
        </button>
    </div>
  );
};

export default SubscribeButton;
