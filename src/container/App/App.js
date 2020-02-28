import React from 'react';
import logo from '../../logo.svg';
import './App.module.scss';
import Header from "../../components/Header"
import BookList from '../../components/BookList/BookList';

function App() {
  return (
    <main>
      <div>
        <Header/>
        <BookList/>
      </div>
    </main>
  );
}

export default App;