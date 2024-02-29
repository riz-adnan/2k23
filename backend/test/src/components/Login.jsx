import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login">
            <h1>Login</h1>
            <form action="http://localhost:5050/login" method="POST">
                <input type="email" name="username" placeholder="Email ID" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <Link to="/signup">Don't have an account? Sign up</Link>
        </div>
    );
}
