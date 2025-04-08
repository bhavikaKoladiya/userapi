import React, { useEffect, useState } from 'react'


const Exam = () => {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [marks1, setmarks1] = useState('')
    const [marks2, setmarks2] = useState('')
    const [marks3, setmarks3] = useState('')

    const [list, setlist ] = useState(null)
    const [editingIndex, setEditingIndex] = useState(null);

    function add() {
        var obj = { name: name, email: email, password: password, marks1: marks1, marks2: marks2, marks3: marks3 };
        var getdata = JSON.parse(localStorage.getItem('localdata')); 
        var record = [...getdata, obj];
        localStorage.setItem('localdata', JSON.stringify(record)); 
    
        getrecord();
        
    }

    function editRecord(){

    }
    function deleteRecord(){

    }
    

    function getrecord(){
        var getdata = JSON.parse(localStorage.getItem('localdata'));
        setlist(getdata);
    }

    useEffect(()=>{
        var d = localStorage.getItem('localdata')
        if (d == null) {
            localStorage.setItem('localdata', '[]'); 
        }
        getrecord();
    },[])
    return (
        <>
            <h1 className='text-center'>Student data</h1>
            <div className='justify-content-center'>
                <input type='text' placeholder='Enter name' value={name} onChange={(e) => { setname(e.target.value) }} />
                <br /><br />

                <input type='text' placeholder='Enter email' value={email} onChange={(e) => { setemail(e.target.value) }} />
                <br /><br />

                <input type='text' placeholder='Enter password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                <br /><br />

                <input type='text' placeholder='Enter marks1' value={marks1} onChange={(e) => { setmarks1(e.target.value) }} />
                <br /><br />

                <input type='text' placeholder='Enter marks2' value={marks2} onChange={(e) => { setmarks2(e.target.value) }} />
                <br /><br />

                <input type='text' placeholder='Enter  marks2' value={marks3} onChange={(e) => { setmarks3(e.target.value) }} />
                <br />

                <input type='button' value={'Add'} onClick={add}/>
            </div>

            <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>S1 Marks</th>
              <th>S2 Marks</th>
              <th>S3 Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{v.name}</td>
                    <td>{v.email}</td>
                    <td>{v.password}</td>
                    <td>{v.marks1}</td>
                    <td>{v.marks2}</td>
                    <td>{v.marks3}</td>
                    <td>
                      <button onClick={() => editRecord(i)}>Edit</button>
                      <button onClick={() => deleteRecord(i)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

        </>
    )
}

export default Exam