// Importing the React library for component creation.
import React from 'react';

// Define the 'Country' function component.
// It receives 'country' and 'markVisited' as props.
function Country({ country, markVisited }) {

  // The JSX (JavaScript XML) returned will be rendered in the DOM.
  return (
    <div>
      {/* Display the common name of the country */}
      <h3>{country.name.common}</h3>
      
      {/* Display the flag of the country */}
      {/* Note: 'country.flag' should contain the URL or emoji code for the flag for this to work properly */}
      <h4>{country.flag}</h4>

      {/* Button to mark the country as visited */}
      {/* When clicked, it will call the 'markVisited' function passed as a prop */}
      {/* The current 'country' object is passed as an argument to 'markVisited' */}
      <button onClick={() => markVisited(country)}>Mark as Visited</button>
    </div>

    
  );
}

// Export the 'Country' component to be used in other parts of the application.
export default Country;

