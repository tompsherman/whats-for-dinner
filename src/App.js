import React from 'react'
import FridgeList from './components/FridgeList'
import NewRecipeList from './components/NewRecipeList'
import PastDinnerList from './components/PastDinnerList'
import WhatsForDinnerList from './components/WhatsForDinnerList'

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Whats for Dinner!</h1>
      <h2>Hope you brought your appetite</h2>
      <FridgeList />
      <PastDinnerList />
      <NewRecipeList />
      <WhatsForDinnerList />
    </div>
  );
};

export default App;