import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

export default function App() {
    return (
        <Router>
            <h1>Test Page</h1>
        <Link to={'/secret'}>Secret</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}>Signup</Link>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}
