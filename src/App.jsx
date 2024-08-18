import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import HomePage from "./pages/HomePage.jsx";
import ReactPage from "./pages/ReactPage.jsx";
import SCSSPage from "./pages/SCSSPage.jsx";
import CSSPage from "./pages/CSSPage.jsx";

import Container from "./components/UI/Container.jsx";
import Header from "./components/UI/Header.jsx";
import Footer from "./components/UI/Footer.jsx";

function App() {
    return (
        <div className="app">
            <Router>
                <Header/>
                <div className="content">
                    <Container>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/react" element={<ReactPage/>}/>
                            <Route path="/scss" element={<SCSSPage/>}/>
                            <Route path="/css" element={<CSSPage/>}/>
                        </Routes>
                    </Container>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
