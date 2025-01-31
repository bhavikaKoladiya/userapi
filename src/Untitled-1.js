// import { useFormik } from 'formik';
import './App.css';
import Fake from './Fake';
import Hooks from './Hooks';
import Fetchtable from './Reactformik/Fetchtable';
// import Reactformik from './Reactformik/Reactformik';
// import * as Yup from 'yup';

function App() {

 

  // var init = {
  //   name: '',
  //   email: '',
  //   password: ''
  // }

  // validation 
    // min : (argument, enter valid string)
    // matches : (pattern , enter valis password)

  // const formik = useFormik({
  //   initialValues: init,
  //   validationSchema: Yup.object({
  //     name: Yup.string().required('enter Name').min(2, 'enter minimum 2 character'),
  //     email: Yup.string().required('enter Email').email('enter valid email address'),
  //     password: Yup.string().required('enter Password').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'enter valid password...'),
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values);
  //     formik.resetForm();
  //   }
  // })

  return (
    // <div className="App">
    //   <h1>Collect Form Data Using Formik</h1>

    //   <form onSubmit={formik.handleSubmit}>
    //     <table align='center' cellSpacing={0} cellPadding={5}>
    //       <tbody>
    //         <tr>
    //           <td>Name</td>
    //           <td>
    //             <input type="text" name='name' placeholder='Enter Name' value={formik.values.name} onChange={formik.handleChange} />
    //             {formik.errors.name ? <div>{formik.errors.name}</div> : ''}
    //           </td>
    //         </tr>
    //         <tr>
    //           <td>Email</td>
    //           <td>
    //             <input type="email" name='email' placeholder='Enter Email' value={formik.values.email} onChange={formik.handleChange} />
    //             {formik.errors.email ? <div>{formik.errors.email}</div> : ''}
    //           </td>
    //         </tr>
    //         <tr>
    //           <td>Password</td>
    //           <td>
    //             <input type="password" name='password' placeholder='Enter Password' value={formik.values.password} onChange={formik.handleChange} />
    //             {formik.errors.password ? <div>{formik.errors.password}</div> : ''}
    //           </td>
    //         </tr>
    //         <tr>
    //           <td colSpan={2}><input type="submit" value={'Get Data'} /></td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </form>

    // </div>


    <>
     {/* <Reactformik/> */}
      {/* <Fake/> */}
      {/* <Fetchtable/> */} 
   
 

    </>
  );
}

export default App;
