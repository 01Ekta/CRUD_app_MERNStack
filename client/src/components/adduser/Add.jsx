import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import "./add.css";

const Add = () => {

    const users = {
        fname:"",
        lname:"",
        email:"",
        password:""
    }

    const [user, setUser] = useState(users);

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    }

    const submitForm = async(e) =>{
        e.preventDefault();
        await axios.post("localhost:8000/api/create", user)
        .then((response)=>{
            console.log(response)
        }).catch(error => console.log(error))
    }
    
    const submitForm = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create", user)
        .then((response)=>{
            toast.success(response.data.msg, {position:"top-right"})
            Navigate("/")
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Add new user</h3>
            <form className="addUserForm">
                <div className="inputGroup">
                    <label htmlFor="fname">First name</label>
                    <input type="text" id="fname" name="fname" autoComplete='off' placeholder='First name' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="lname">Last name</label>
                    <input type="text" id="lname" name="lname" autoComplete='off' placeholder='Last name' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="fname">Email</label>
                    <input type="text" id="email" name="email" autoComplete='off' placeholder='Email' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="fname">Password</label>
                    <input type="password" id="password" name="password" autoComplete='off' placeholder='Enter your Password' />
                </div>
                <div className="inputGroup">
                    <button type="submit">ADD USER</button>
                </div>
            </form>
        </div>
    )
}

export default Add
