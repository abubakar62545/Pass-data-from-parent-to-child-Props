import React from 'react';
import Parent from './components/Parent';
function App() {
  const arrowFunction = (name) => function (name){
    return name
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
           Hello From React
           {arrowFunction('abubakar')}
        </p>
        <Parent />

      </header>
    </div>
  );
}

export default App;
