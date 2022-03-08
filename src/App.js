import { useState } from 'react';
import './App.css';
import Main from './components/Main'

const PROD = [
  {
    id: 'prod1',
    name: 'notebook',
    price: 1900
  },
  {
    id: 'prod2',
    name: 'zapas',
    price: 5000
  },
  {
    id: 'prod3',
    name: 'ps4',
    price: 1900
  }

]
 
const App= () => {
  const  [ userName, setUserName ] = useState('Diego');

  return (
    <div className='App-container'>
    <Main userName={userName} products={PROD} /> 
    </div>
  );
}

export default App;
