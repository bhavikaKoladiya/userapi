import { Formik, useFormik } from 'formik'
import React from 'react'
import { Container } from 'react-bootstrap'
import * as Yup from 'yup';


const Exam = () => {


    var init = {
        name: '',
        email: '',
        password: '',
        marks1: '',
        marks2: '',
        marks3: '',
    }


    const formik = useFormik({
        initialValues: init,
        validationSchema: Yup.object({
            name: Yup.string().required('enter Name').min(2, 'enter minimum 2 character'),
            email: Yup.string().required('enter Email').email('enter valid email address'),
            password: Yup.string().required('enter Password').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'enter valid password...'),
            marks1: Yup.number()
                .required('Enter marks for Subject 1')
                .min(0, 'Marks cannot be less than 0')
                .max(100, 'Marks cannot exceed 100'),
            marks2: Yup.number()
                .required('Enter marks for Subject 2')
                .min(0, 'Marks cannot be less than 0')
                .max(100, 'Marks cannot exceed 100'),
            marks3: Yup.number()
                .required('Enter marks for Subject 3')
                .min(0, 'Marks cannot be less than 0')
                .max(100, 'Marks cannot exceed 100')
        }),
        onSubmit: (values , {resetform}) => {
            console.log(values);
            formik.resetForm();
        }
    })
    return (
        <>
            <h1 className='text-center'>Student result</h1>
            <Container>
                <form onSubmit={formik.handleSubmit}>
                    <table align='center' cellSpacing={0} cellPadding={5}>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input type="text" name='name' placeholder='Enter Name' value={formik.values.name} onChange={formik.handleChange} />
                                    {formik.errors.name ? <div>{formik.errors.name}</div> : ''}
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input type="email" name='email' placeholder='Enter Email' value={formik.values.email} onChange={formik.handleChange} />
                                    {formik.errors.email ? <div>{formik.errors.email}</div> : ''}
                                </td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td>
                                    <input type="password" name='password' placeholder='Enter Password' value={formik.values.password} onChange={formik.handleChange} />
                                    {formik.errors.password ? <div>{formik.errors.password}</div> : ''}
                                </td>
                            </tr>
                            <tr>
                                <td>Sub1</td>
                                <td>
                                    <input type="text" name='marks1' placeholder='Enter marks1' value={formik.values.marks1} onChange={formik.handleChange} />
                                    {formik.errors.marks1 ? <div>{formik.errors.marks1}</div> : ''}
                                </td>
                            </tr>
                            <tr>
                                <td>Sub2</td>
                                <td>
                                    <input type="text" name='marks2' placeholder='Enter marks2' value={formik.values.marks2} onChange={formik.handleChange} />
                                    {formik.errors.marks2 ? <div>{formik.errors.marks2}</div> : ''}
                                </td>
                            </tr>
                            <tr>
                                <td>Sub3</td>
                                <td>
                                    <input type="text" name='marks3' placeholder='Enter marks3' value={formik.values.marks3} onChange={formik.handleChange} />
                                    {formik.errors.marks3 ? <div>{formik.errors.marks3}</div> : ''}
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center'><input type="submit" value={'Add'} /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Container>

        </>
    )
}

export default Exam