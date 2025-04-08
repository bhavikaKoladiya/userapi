import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useFormik } from 'formik';


const Fetchtable = () => {

    const [List, setList] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);


    // fetch users on initial render 
    useEffect(() => {
        getdata()
    }, []);

    function getdata() {
        axios.get(' https://api.escuelajs.co/api/v1/users')
            .then((res) => setList(res.data));
    }


    // Add new user to the list
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            avatar: 'https://www.google.com'
        },
        onSubmit: (values) => {
            axios.post('https://api.escuelajs.co/api/v1/users', {
                "name": values.name,
                "email": values.email,
                "password": values.password,
                "avatar": values.avatar,
            }
            )
                .then((res) => {
                    getdata()
                });
            formik.resetForm(); // Reset the form fields
        }
    });

    return (
        <>
            <div className='container'>
                <h1 className='text-center'>CRUD Operations using Formik and React</h1>


                <form onSubmit={formik.handleSubmit} className='w-25 justify-content-center'>
                    <div className='mt-3 mb-3'>
                        <input className="form-control" type="text" id="name" name="name" placeholder="Enter name" value={formik.values.name}
                            onChange={formik.handleChange} />
                    </div>
                    <div className=' mb-3'>
                        <input className="form-control" type="email" id="email" name="email" placeholder="Enter email" value={formik.values.email}
                            onChange={formik.handleChange} />
                    </div>

                    <div className=' mb-3'>
                        <input className="form-control" type="password" id="password" name="password" placeholder="Enter password" value={formik.values.password}
                            onChange={formik.handleChange} />
                    </div>

                    {/* <div className=' mb-3'>
                        <input  className="form-control" type="file" id="file" name="avatar" onChange={formik.handleChange}/>
                    </div> */}

                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary">Add User</button>
                    </div>
                </form>

                <h3 className='text-center mt-4'>User List</h3>
                <table className='table table-striped' align='center'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {List.map((v, i) => (
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.email}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm mx-2">Edit</button>
                                    <button className="btn btn-danger btn-sm" >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Fetchtable