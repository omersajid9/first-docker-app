// import {useCallback, useEffect, useState} from 'react';
// import axios from 'axios';


// const App1 = () =>
// {
//     const [values, setValues] = useState([]);
//     const [value, setValue] = useState('');

//     useEffect(() => 
//     {
//         getAllNumbers();
//     }, [])

//     const getAllNumbers = useCallback(async () =>
//     {
//         const data = await axios.get('/api_postgres/values/all');
//         setValues(data.data.rows.map((row) => row.number));
//     }, [])

//     const saveNumber = useCallback(async (event) =>
//     {
//         event.preventDefault();
//         await axios.post('/api_postgres/values', {
//             value
//         })
//         setValue('');
//         getAllNumbers();
//     }, [value, getAllNumbers])


//     return (
//         <div>
//             <button onClick={getAllNumbers}> Get all buttons </button>
//             {/* <span>This is another container</span> */}
//             <div>
//                 {values.map(value =>
//                     {
//                         <div> {value} </div>
//                     })}
//             </div>
//             <form>
//                 <label>Enter your value: </label>
//                 <input value={value} onChange={(event)=> setValues(event.target.value)}/>
//                 <button onSubmit={saveNumber}>submit</button>
//             </form>
//         </div>
//     )
// }

// export default App1;
















import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import { Button, Container, Card, Row } from 'react-bootstrap'


// import "./MainComponent.css";

const App1 = () => {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState("");

  const getAllNumbers = useCallback(async () => {
    // we will use nginx to redirect it to the proper URL
    const data = await axios.get("/api_postgres/values/all");
    console.log("data")
    console.log( data)
    setValues(data.data.rows.map(row =>  ({id:row.id, task:row.task})));
  }, []);

  const saveNumber = useCallback(
    async event => {
      event.preventDefault();

      await axios.post("/api_postgres/values", {
        value
      });
      document.location.reload();

      // setValue("");
      // getAllNumbers();
    },
    [value, getAllNumbers]
  );

  const deleteNumber = useCallback(
    async id =>
    {
      console.log(id)

      if (window.confirm("Do you want to delete this task?"))
      {
        await axios.delete(`/api_postgres/delete/${id}`)
          .then(() => document.location.reload())
          .catch((error) => console.error(error));  

      }
      document.location.reload();
      

    }
  )






  useEffect(() => {
    getAllNumbers();
    console.log("USE EFFECT")
    console.log(values)
  }, []);

  const card = values.map((val, key) => (
    <React.Fragment key={key}>
      <div style={{ width: '18rem' }} className="m-2 bg-purple-200 rounded-lg shadow-md max-w-sm">
        <div className='p-6'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>{val.task}</h2>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={()=>deleteNumber(val.id)}>Delete</button>
        </div>
      </div>
    </React.Fragment>
  ));


  return (
    <div className="text-center">

      <h1 className='text-3xl font-bold text-gray-800 text-center mt-10 mb-6 tracking-widest leading-snug'>Task List using postgres</h1>
      <form className="form" onSubmit={saveNumber}>
        {/* <label>Enter your value: </label> */}
        <input
          value={value}
          placeholder="Enter task"
          onChange={event => {
            setValue(event.target.value);
          }} className='tracking-widest leading-snug bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5'
        />
        <button className="my-2 tracking-widest leading-snug">Submit</button>
      </form>

      <Container>
        <Row>{card}</Row>
      </Container>


      {/* <div className="mb-4">
        {values.map(value => (
          <div className="value">{value}</div>
        ))}
      </div> */}
    </div>
  );
};

export default App1;

