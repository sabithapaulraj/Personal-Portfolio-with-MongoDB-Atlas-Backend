import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Education from './components/Education';
import './styles/Global.css';

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Profile />
                <Projects />
                <Education />
            </div>
        </>
    );
}

export default App;
