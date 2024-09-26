import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CloseIcon } from './Icons';

const SearchPopup = ({ onClose }) => {
  const [searchType, setSearchType] = useState('entire');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPages, setSelectedPages] = useState([]);
  const popupRef = useRef(null);

  // Add your website's pages here
  const pages = ['Home', 'About', 'Projects', 'Blog', 'Newsletter'];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching:', searchQuery, 'Type:', searchType, 'Pages:', selectedPages);
  };

  const togglePage = (page) => {
    setSelectedPages(prev => 
      prev.includes(page) 
        ? prev.filter(p => p !== page) 
        : [...prev, page]
    );
  };

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
          <h2 className="text-xl font-bold">Search</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <CloseIcon />
          </button>
        </div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter your search query"
            className="w-full p-2 border rounded mb-4 dark:bg-gray-700 text-dark dark:text-light"
          />
          <div className="mb-4">
            <label className="block mb-2">Search in:</label>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 text-dark dark:text-light"
            >
              <option value="entire">Entire Website</option>
              <option value="active">Active Page</option>
              <option value="specific">Specific Page(s)</option>
            </select>
          </div>
          {searchType === 'specific' && (
            <div className="mb-4">
              <label className="block mb-2 text-dark dark:text-light">Select pages:</label>
              <div className="flex flex-wrap gap-2">
                {pages.map(page => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => togglePage(page)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedPages.includes(page)
                        ? 'bg-primary text-primaryDark hover:bg-primaryDark hover:text-primary dark:bg-primary dark:text-primaryDark hover:dark:bg-primaryDark hover:dark:text-primary'
                        : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-primary text-primaryDark hover:bg-primaryDark hover:text-primary
            dark:bg-primary dark:text-primaryDark hover:dark:bg-primaryDark hover:dark:text-primary p-2 rounded"
          >
            Search
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default SearchPopup;
