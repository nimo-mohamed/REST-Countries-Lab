// Importing the React library for component creation.
import React from 'react';

// Importing the 'Country' component to be used within this component.
import Country from './Country';



// Define the 'CountryList' function component.
// It receives 'countries' and 'markVisited' as props.
function CountryList({ countries, markVisited }) {

  // The JSX (JavaScript XML) returned will be rendered in the DOM.
  return (
    <div>
      {/* Display the title "All Countries" */}
      <h2>All Countries</h2>

      {/* Loop over each 'country' in the 'countries' array */}
      {/* For each 'country', the 'Country' component is rendered */}
      {/* The 'key' is a unique identifier React uses for performance optimization */}
      {/* The 'country' and 'markVisited' props are passed to each 'Country' component */}
      {countries.map(country => (
        <Country key={country.cca3} country={country} markVisited={markVisited} />
      ))}
    </div>
  );
}

// Export the 'CountryList' component to be used in other parts of the application.
export default CountryList;

