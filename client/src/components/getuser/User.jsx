import React, { useEffect } from 'react'
import axios from "axios";
import "./user.css";
import { Link } from 'react-router-dom'

const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{

        const fetchData = async()=>{
            const response = await axios.get("http://localhost:8000/api/getall")
        }

        fetchData();
    },[])

    return (
        <div className="userTable">
            <Link to={"/add"}>Add User</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>User name</th>
                        <th>User Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user._id)=>{
                            return(
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.fname} {user.lname)</td>
                                <td>{user.email}</td>
                                <td className='actionButtons'>
                                    <button><i className="fa-solid fa-trash"></i></button>
                                    <Link to={`/edit/`+user._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                </td>
                            </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default User
