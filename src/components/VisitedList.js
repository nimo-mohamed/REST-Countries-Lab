// Importing the React library for component creation.
import React from 'react';

// Define the 'VisitedList' function component.
// It receives 'visited' as a prop, which is an array of visited countries.
function VisitedList({ visited }) {

  // The JSX (JavaScript XML) to be returned and rendered in the DOM.
  return (
    <div>
      {/* Display the title "Visited Countries" */}
      <h2>Visited Countries</h2>

      {/* Create an unordered list (ul) */}
      <ul>
        {/* Loop over each 'country' in the 'visited' array */}
        {/* For each 'country', a list item (li) is rendered */}
        {/* The 'key' is a unique identifier React uses for performance optimization */}
        {/* Display the common name of each visited country */}
        {visited.map(country => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

// Export the 'VisitedList' component to be used in other parts of the application.
export default VisitedList;

