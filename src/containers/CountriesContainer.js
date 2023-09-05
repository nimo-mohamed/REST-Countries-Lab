// Importing necessary modules from the React library.
// useState and useEffect are React hooks.
import React, { useState, useEffect } from 'react';

// Importing the 'CountryList' and 'SearchBar' components.
import CountryList from '../components/CountryList';
import SearchBar from '../components/SearchBar';

// Define the 'CountriesContainer' functional component.
// It receives 'markVisited' as a prop.
const CountriesContainer = ({ markVisited }) => {

  // Initialize 'countries' state variable as an empty array.
  // 'setCountries' is the function used to update this state.
  const [countries, setCountries] = useState([]);

  // Initialize 'searchTerm' state variable as an empty string.
  // 'setSearchTerm' is the function used to update this state.
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect hook to fetch country data from the API when the component mounts.
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data)) // Update 'countries' state with fetched data.
      .catch(error => console.error('Error fetching data:', error)); // Log errors, if any.
  }, []); // Empty dependency array means this useEffect runs once after the initial render.

  // Function to handle search input.
  // It updates the 'searchTerm' state.
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter 'countries' based on the search term.
  // 'filteredCountries' contains countries that match the search term.
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // JSX to be returned and rendered in the DOM.
  return (
    <div>
      {/* Render 'SearchBar' component. Pass 'handleSearch' function as 'onSearch' prop. */}
      <SearchBar onSearch={handleSearch} />
      
      {/* Render 'CountryList' component. */}
      {/* Pass 'filteredCountries' and 'markVisited' as props. */}
      <CountryList countries={filteredCountries} markVisited={markVisited} />
    </div>
  );
};

// Export the 'CountriesContainer' component to be used in other parts of the application.
export default CountriesContainer;

