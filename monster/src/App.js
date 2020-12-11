import React from 'react';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state = 
    {
          monsters: [],
          searchField: '',
          
    }
  }

  render()
  {
    return(
      <div>
        <h1>
          Monster's Rollodex
        </h1>
        <SearchBox />
        <div className = 'card-list'>
          <div className = 'card-container'>
            <img alt = 'monster' src = 'https://robohash.org/1?set=set2&size=180x180' />
            <h2>
              Monster Name
            </h2>
            <p>
              Email
            </p>
          </div>
        </div>

      </div>
    )
  }
}
export default App;
