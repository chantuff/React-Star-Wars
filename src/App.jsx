// Obtain all of the starships from the API and render in <App>a card 
// for each starship.

import React, { useState, useEffect } from 'react';
import { getAllStarships } from './components/GetAllStarships'; 
import './App.css'

const App = () => {
  // Hold the starship objects in state with the useStatehook, 
  // don't forget to initialize to an empty array!
  const [starships, setStarships] = useState([]);
// Use the useEffecthook to make the AJAX request once the app loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Once the starship data comes from the API, 
        // be sure to update state with the setter function.
        const starshipsData = await getAllStarships();
        setStarships(starshipsData);
      } catch (error) {
        console.error('Error in component:', error);
      }
    };

    fetchData();
  }, []);


  // .map()over each starship object in state to transform 
  // them into a <StarshipCard />component
  return (
    <div className='app-container'>
      <h1 className='nav'>Star Wars Starships</h1>

      <div className='card-container'>
        {starships.map((starship) => (
        <div className = 'card' key={starship.name}>{starship.name}
        </div>
        ))}
      
      </div>
    </div>
  );
};

export default App;
