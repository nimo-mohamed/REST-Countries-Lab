// Importing the React library for component creation.
import React from 'react';

// Importing the 'VisitedList' component to be used within this component.
import VisitedList from '../components/VisitedList';

// Define the 'VisitedContainer' function component.
// It receives 'visited' as a prop, which is an array of visited countries.
const VisitedContainer = ({ visited }) => {

  // The JSX (JavaScript XML) to be returned and rendered in the DOM.
  return (
    <div>
      {/* Render the 'VisitedList' component */}
      {/* Pass the 'visited' array as a prop to 'VisitedList' */}
      <VisitedList visited={visited} />
    </div>
  );
};

// Export the 'VisitedContainer' component to be used in other parts of the application.
export default VisitedContainer;

