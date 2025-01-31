import axios from 'axios'
import React, { useEffect } from 'react'

const Fake = () => {

    function getData() {
        axios.get('https://api.escuelajs.co/api/v1/users').then((res) => { console.log(res.data) })
    }

    function addData() {
        axios({
            method: 'post',
            url: 'https://api.escuelajs.co/api/v1/users/',
            data: {
                "name": "Bhavesh",
                "email": "bhavesh@gmail.com",
                "password": "54526",
                "avatar": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
            }
        });
        getData()
    }

    return (
        <>
            <h1>Fake User APi</h1>
            <button onClick={() => { addData() }}>Add Record</button>
            <button onClick={() => { getData() }}>Get Record</button>
        </>
    )
}

export default Fake