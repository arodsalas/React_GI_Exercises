import React from 'react';
import BasicInfo from './Components/Medium/BasicInfo';
//--- VERY EASY SOLUTION ---
class App extends React.Component {
  // --- EASY SOLUTION ---
    constructor(props) {
        super(props);
        this.state = {
            people: [
            {
              name: 'Alvaro',
              number: '000-000-0000',
              dateOfBirth: 'December 14th'
            },

            {
              name: 'Barack Obama',
              number: '000-000-0000',
              dateOfBirth: 'August 4th'
            },

            {
              name: 'Drake',
              number: '000-000-0000',
              dateOfBirth: 'October 24th'
            },

            {
              name: 'Kanye West',
              number: '000-000-0000',
              dateOfBirth: 'June 8th'
            }
          ]
        };
    }
    
   // --- HARD SOLUTION --- 
    render() {
      return(
        this.state.people.map((person) => {
          return (
            <BasicInfo
            p={person} />
          );
        })
      )
    }
  }
  
  export default App;
