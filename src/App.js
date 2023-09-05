// Importing necessary modules from the React library.
// Importing 'useState' hook for state management.
import React, { useState } from 'react';
import './App.css';


// Importing container components for countries and visited countries.
import CountriesContainer from './containers/CountriesContainer';
import VisitedContainer from './containers/VisitedContainer';

// Define the main 'App' function component.
function App() {
  
  // Initialize 'visited' state variable as an empty array.
  // 'setVisited' is the function used to update this state.
  const [visited, setVisited] = useState([]);

  // Function to mark a country as visited.
  // It updates the 'visited' state array by adding the new 'country'.
  const markVisited = (country) => {
    setVisited([...visited, country]);
  };

  // The JSX (JavaScript XML) to be returned and rendered in the DOM.
  return (
    <div>
      {/* Main title for the application */}
      <h1>Country Bucket List</h1>
      
      {/* Render 'CountriesContainer' component */}
      {/* Pass the 'markVisited' function as a prop */}
      <CountriesContainer markVisited={markVisited} />
      
      {/* Render 'VisitedContainer' component */}
      {/* Pass the 'visited' array as a prop */}
      <VisitedContainer visited={visited} />
    </div>
  );
}

// Export the 'App' component as the default export.
// This makes it available for use in other parts of the application.
export default App;
