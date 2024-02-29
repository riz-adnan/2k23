import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup(){
    return (
        <div className="signup">
            <h1>Signup</h1>
            <form action="http://localhost:5050/signup" method="POST">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="phone_number" placeholder="Phone Number" />
                <input type="email" name="username" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />

                <input type="text" name="college_state" placeholder="College State" />
                <input type="text" name="college_city" placeholder="College City" />
                <input type="text" name="college_name" placeholder="College Name" />

                <input type="text" name="facebook_id" placeholder="Facebook ID" />
                <input type="text" name="instagram_id" placeholder="Instagram ID" />
                <input type="text" name="referral_code" placeholder="Referral Code" />

                <button type="submit">Signup</button>
            </form>
            <Link to="/login">Already have an account? Login</Link>
        </div>
    );
}
