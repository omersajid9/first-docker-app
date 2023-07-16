// import './App.css';
// import axios from 'axios';
// import React, {useState, useEffect} from 'react';
// import { Button, Container, Card, Row } from 'react-bootstrap'




// function App() {
//   const [bookName, setBookName] = useState('');
//   const [review, setReview] = useState('');
//   const [fetchData, setFetchData] = useState([]);
//   const [reviewUpdate, setReviewUpdate] = useState('');


//   const handleChange = (event) =>
//   {
//     let nam = event.target.name;
//     let val = event.target.value;
//     if (nam === 'bookName')
//     {
//       setBookName(val);
//     }
//     if (nam === 'review')
//     {
//       setReview(val);
//     }
//   };

//   const handleChange2 = (event) =>
//   {
//     setReviewUpdate(event.target.value);
//   }


//   useEffect(()=>
//   {
//     axios.get("/api/get")
//     .then((response) => 
//     {
//       console.log(response);
//       console.log("AAAAAAA");
//       setFetchData(response.data);
//       // setFetchData([...fetchData, response.data]);
//     });
//   }, [])

  

//   const submit = () => 
//   {
//     axios.post('/api/insert', {book_Name: bookName, _review: review}, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//   })
//         .then(() => 
//         {
//           alert('success post')
//         }).catch((err)=>
//         {
//           if (err) console.log("SUBMIT ERROR"+err)
//         })
//     console.log({bookName, review});
//     document.location.reload();
//   }

//   const delet = (id) =>
//   {
//     if (window.confirm("Do you want to delete? "))
//     {
      
//       axios.delete('/api/delete/${id}');
//       document.location.reload();
//     }
//   }

//   const edit = (id) =>
//   {
//     axios.put('/api/update/${id}', {reviewUpdate: reviewUpdate})
//     document.location.reload();
//   }

//   console.log("AAASDSasdddddddddddFDSF");
//   console.log(fetchData)

//   let card = fetchData.map((val, key) => {
//     return (
//         <React.Fragment>
//             <Card style={{ width: '18rem' }} className='m-2'>
//                 <Card.Body>
//                     <Card.Title>{val.book_name}</Card.Title>
//                     <Card.Text>
//                         {val.book_review}
//                     </Card.Text>
//                     <input name='reviewUpdate' onChange={handleChange2} placeholder='Update Review' ></input>
//                     <Button className='m-2' onClick={() => { edit(val.id) }}>Update</Button>
//                     <Button onClick={() => { delet(val.id) }}>Delete</Button>
//                 </Card.Body>
//             </Card>
//         </React.Fragment>
//     )
//   })


  
//   return (
//     <div className='App'>
//           <h1>Dockerized Fullstack React Application</h1>
//           <div className='form'>
//               <input name='bookName' placeholder='Enter Book Name' onChange={handleChange} />
//               <input name='review' placeholder='Enter Review' onChange={handleChange} />
//           </div>
//           <Button className='my-2' variant="primary" onClick={submit}>Submit</Button> <br /><br />
//           <Container>
//               <Row>
//                   {card}
//               </Row>
//           </Container>
//       </div>
//   );
// }

// export default App;


/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
// import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import { Button, Container, Card, Row } from 'react-bootstrap'

// class App extends Component {
//   constructor(props) {
//     super(props)
//       this.state = {
//         setBookName: '',
//         setReview: '',
//         fetchData: [],
//         reviewUpdate: ''
//       }
//   }

//   handleChange = (event) => {
//     let nam = event.target.name;
//     let val = event.target.value
//     this.setState({
//       [nam]: val
//     })
//   }

//   handleChange2 = (event) => {
//     this.setState({
//       reviewUpdate: event.target.value
//     })
//   }

//   componentDidMount() {
//     axios.get("/api/get")
//       .then((response) => {
//         this.setState({
//           fetchData: response.data
//         })
//       })
//   }

//   submit = () => {
//     axios.post('/api/insert', this.state)
//       .then(() => { alert('success post') })
//     console.log(this.state)
//     document.location.reload();
//   }

//   delete = (id) => {
//     if (confirm("Do you want to delete? ")) {
//       axios.delete(`/api/delete/${id}`)
//       document.location.reload()
//     }
//   }

//   edit = (id) => {
//     axios.put(`/api/update/${id}`, this.state)
//     document.location.reload();
//   }
//   render() {

//     let card = this.state.fetchData.map((val, key) => {
//       return (
//         <React.Fragment>
//           <Card style={{ width: '18rem' }} className='m-2'>
//             <Card.Body>
//               <Card.Title>{val.book_name}</Card.Title>
//               <Card.Text>
//                 {val.book_review}
//               </Card.Text>
//               <input name='reviewUpdate' onChange={this.handleChange2} placeholder='Update Review' ></input>
//               <Button className='m-2' onClick={() => { this.edit(val.id) }}>Update</Button>
//               <Button onClick={() => { this.delete(val.id) }}>Delete</Button>
//             </Card.Body>
//           </Card>
//         </React.Fragment>
//       )
//     })

//     return (
//       <div className='App'>
//         <h1>Dockerized Fullstack React Application</h1>
//         <div className='form'>
//           <input name='setBookName' placeholder='Enter Book Name' onChange={this.handleChange} />
//           <input name='setReview' placeholder='Enter Review' onChange={this.handleChange} />
//         </div>

//         <Button className='my-2' variant="primary" onClick={this.submit}>Submit</Button> <br /><br/>

//         <Container>
//           <Row>
//             {card}
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }
// export default App;

//=================================================


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [bookName, setBookName] = useState('');
  const [review, setReview] = useState('');
  const [fetchData, setFetchData] = useState([]);
  const [reviewUpdate, setReviewUpdate] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'setBookName') {
      setBookName(value);
    } else if (name === 'setReview') {
      setReview(value);
    }
  };

  const handleChange2 = (event) => {
    setReviewUpdate(event.target.value);
  };

  const submit = () => {
    axios.post('/api/insert', { setBookName: bookName, setReview: review })
      .then(() => { alert('success post'); })
      .catch((error) => { console.error(error); });
    console.log({ bookName, review });
    document.location.reload();
  };

  const deleteItem = (id) => {
    if (confirm('Do you want to delete? ')) {
      axios.delete(`/api/delete/${id}`)
        .then(() => document.location.reload())
        .catch((error) => console.error(error));
    }
    document.location.reload();
  };

  const edit = (id) => {
    axios.put(`/api/update/${id}`, { reviewUpdate: reviewUpdate })
      .then(() => document.location.reload())
      .catch((error) => console.error(error));
      document.location.reload();
  };

  useEffect(() => {
    axios.get('/api/get')
      .then((response) => {
        setFetchData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const card = fetchData.map((val, key) => (
    <React.Fragment key={key}>
      <div style={{ width: '18rem' }} className="m-2 bg-purple-200 rounded-lg shadow-md max-w-sm">
        <div className='p-6'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>{val.book_name}</h2>
          <p className='text-gray-700 mb-6'>{val.book_review}</p>
          <input className='w-full border border-gray-300 mb-4 tracking-widest leading-snug bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5' name="reviewUpdate" onChange={handleChange2} placeholder="Update Review" />
          <button className=" bg-blue-500 text-white px-4 py-2 rounded mr-4" onClick={() => edit(val.id)}>Update</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => deleteItem(val.id)}>Delete</button>
        </div>
      </div>
    </React.Fragment>
  ));

  return (
    <div className=" text-center">
      <h1 className='text-3xl font-bold text-gray-800 text-center mt-10 mb-6 tracking-widest leading-snug'>Book Review using MySQL</h1>
      <div className="form">
        <input className='tracking-widest leading-snug bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5' name="setBookName" placeholder="Enter Book Name" onChange={handleChange} />
        <input className='tracking-widest leading-snug bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5' name="setReview" placeholder="Enter Review" onChange={handleChange} />
      </div>

      <Button className="my-2 tracking-widest leading-snug" variant="primary" onClick={submit}>Submit</Button>
      <br /><br />

      <Container>
        <Row>{card}</Row>
      </Container>
    </div>
  );
};

export default App;