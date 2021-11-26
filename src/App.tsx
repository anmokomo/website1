import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Sidebar} from "./components/sidebar/Sidebar";
import {LeftMenu} from "./components/sides/LeftMenu";
import {RightMenu} from "./components/sides/RightMenu";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appWrapper}>
        <Navbar />
        <Sidebar />
        <LeftMenu />
        <RightMenu />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
