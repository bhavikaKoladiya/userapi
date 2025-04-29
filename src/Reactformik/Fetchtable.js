import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useFormik } from 'formik';


const Fetchtable = () => {

    const [List, setList] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);
    const [uid, setuid] = useState(null);

    

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
            if (uid == null) {
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
            }
            else {
                axios.put(`https://api.escuelajs.co/api/v1/users/${uid}`, {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    avatar: values.avatar,
                })
                    .then((response) => {
                        getdata();
                    })
                    .catch((error) => {
                        console.error('Error updating user:', error);
                    });
                    setuid(null)
            }
            formik.resetForm(); // Reset the form fields
        }
    });


    // delete user
    const deleteuser = (userId) => {
        axios
            .delete(`https://api.escuelajs.co/api/v1/users/${userId}`)
            .then((response) => {
                getdata();
            })
            .catch((error) => {
                console.error('Error updating user:', error);
            });
    };


    //   update user
    const edituser = (userId) => {
        const user = List.find((u) => u.id === userId);
        if (user) {
            formik.setValues({
                name: user.name,
                email: user.email,
                password: user.password,
                avatar: user.avatar,
            });
            setSelectedUser(user);
        }
        setuid(userId);
    };

    //   const updateUser = (userId, values) => {
    //     axios
    //       .put(`https://api.escuelajs.co/api/v1/users/${userId}`, {
    //         name: values.name,
    //         email: values.email,
    //         password: values.password,
    //         avatar: values.avatar,
    //       })
    //       .then((response) => {
    //         getdata();
    //         setSelectedUser(null); 
    //       })
    //       .catch((error) => {
    //         console.error('Error updating user:', error);
    //       });
    //   };

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
                        <button type="submit" className="btn btn-primary">{uid === null ? 'Add User' : 'Edit User'}</button>
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
                                <td>{i + 1}</td>
                                <td>{v.name}</td>
                                <td>{v.email}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm mx-2" onClick={() => edituser(v.id)}>Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteuser(v.id)} >Delete</button>
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
