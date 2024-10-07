import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CloseIcon } from './Icons';

const NotificationPopup = ({ message, onClose }) => {
  const popupRef = useRef(null);

  if (!message) return null;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div ref={popupRef} className="bg-radialSunLight dark:bg-radialSunDark p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <div className="text-center">
            <h2 className="text-xl font-bold">Notification</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <CloseIcon />
          </button>
        </div>
        <div className="text-center">
          <p className="text-m">
            {message}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NotificationPopup;
