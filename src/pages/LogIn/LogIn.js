import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
import useFirebase from "../../hooks/useFirebase"

const LogIn = () => {
    const { googleSignIn } = useFirebase();
    return (
        <div className='login-form'>
            <div >
                <Form>
                    <h2>LogIn</h2>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label> <br />
                        <input type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label> <br />
                        <input type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Link to='/registration'>Create Account</Link>
                <br /><br />
                <Button variant="primary" onClick={googleSignIn} >Google SignIn</Button>

            </div>
        </div>
    );
};

export default LogIn;