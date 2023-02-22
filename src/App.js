import React from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';

export default function App() {
  const timestamp = 1708772400000
  alert (new Date(1708772400000))

  return (
    <div>
      <h1>Enlace Juanfran & Maria Dolores</h1>

      <h2>24 - Febrero - 2024</h2>
      <CountdownTimer targetDate={timestamp}/>

    </div>
  );
}
