// Importing the React library for component creation.
import React from 'react';

// Define the 'SearchBar' function component.
// It receives 'onSearch' as a prop. This function will be called whenever the search input changes.
function SearchBar({ onSearch }) {

  // This function is called when the input field changes.
  const handleSearchChange = (e) => {
    // Call the 'onSearch' function passed as a prop with the current input value.
    onSearch(e.target.value);
  };

  // The JSX (JavaScript XML) to be returned and rendered in the DOM.
  return (
    <div>
      {/* Input field for search */}
      {/* The 'type' is set to "text" and a placeholder is given */}
      {/* The 'onChange' event triggers the 'handleSearchChange' function whenever the input changes */}
      <input 
        type="text" 
        placeholder="Search for a country..." 
        onChange={handleSearchChange}
      />
    </div>
  );
}

// Export the 'SearchBar' component to be used in other parts of the application.
export default SearchBar;
