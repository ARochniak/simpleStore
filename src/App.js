import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

export default () => {
  return (
    <div>
      <Header />
      <main>
      	<Main />
      </main>	
    </div>  
  );
}