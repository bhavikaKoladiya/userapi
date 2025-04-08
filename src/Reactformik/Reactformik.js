import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';
import axios from 'axios';

function Reactformik() {

  function getdata(){
    axios.get('https://api.escuelajs.co/api/v1/users').then((res) =>{ console.log(res.data)})
  }

    
   

    return (
        <>
           

            <form >
                <table align='center' cellSpacing={0} cellPadding={5}>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name='name'placeholder='Enter Name'  />
                               
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="email" name='email' placeholder='Enter Email'  />
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="password" name='password' placeholder='Enter Password'  />
                                
                            </td>
                        </tr>
                        <tr>
                           
                        </tr>
                    </tbody>
                </table>
            </form>

            <button onClick={() => { getdata()} }> Get record</button>


        </>
    )
}

export default Reactformik