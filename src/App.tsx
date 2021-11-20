import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/Sidebar";
import Leftmenu from "./components/menus/Leftmenu";
import Rightmenu from "./components/menus/Rightmenu";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appWrapper}>
        <Navbar />
        <Sidebar />
        <Leftmenu />
        <Rightmenu />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
