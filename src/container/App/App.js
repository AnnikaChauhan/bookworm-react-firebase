import React from 'react';
import styles from './App.module.scss';
import Header from "../../components/Header"
import BookList from '../../components/BookList/BookList';
import NavBar from "../../components/NavBar"

function App() {
  return (
    <main className={styles.app}>
      <NavBar/>
      <div>
        <Header/>
        <BookList/>
      </div>
    </main>
  );
}

export default App;