import React from 'react';
import './App.css';
import Tabs from './Tabs';

function App() {
  return (
    <div>
     <Tabs>
      <div label="Title1">
        Content 1
      </div>
      <div label="Title2">
        <div>

          Content 2
        </div>
      </div>

    </Tabs>
    </div>
  );
}

export default App