import React from 'react';
import './SignUp.css';

function SignUp(){
    return (
        <div className='Layout'>
            <img src="cart.jpg" alt="cart image" className="cartImg"/>
            <div className="SignUp">
                <h1>WETTO SHOP</h1>
                <h1>Create an account</h1>
                <h3>Connect with your friends today!</h3>
                <div>
                    <input
                     type= "text"
                     name= "username"
                     placeholder= "Enter Your Username"
                     /><br/>
                     <input
                     type= "email"
                     name= "useremail"
                     placeholder= "Enter Your Email"
                     /><br/>
                     <input
                     type= "tel"
                     name= "usercontact"
                     placeholder= "Enter Your Phone Number"
                     /><br/>
                     <input
                     type= "password"
                     name= "password"
                     placeholder= "Enter Your Password"
                     /><br/>
                     <button>
                        Sign Up
                     </button>
                </div>
                <p>Already have an account? <>Login</></p>
            </div>
        </div>
    );
}

export default SignUp;