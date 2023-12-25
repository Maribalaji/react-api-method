import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavbarHeader from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from './Banner';
import axios from 'axios'


function App() {
    const [photo,setPhoto]=useState([])

    // useEffect(()=>{
    //   fetch('https://api.tvmaze.com/shows/1/episodes')
    //   .then((res)=>{
    //     return res.json()

    //   })
    //   .then((data)=>setPhoto(data))

    // },[])
    useEffect(()=>{
      axios.get('https://api.tvmaze.com/shows/1/episodes')
      .then((res)=>{
        setPhoto(res.data)
      })
    })
    

  return (
    <div className="App">
      <NavbarHeader />
      <Banner/>

      
      <Container>
        <h1 className='text-center mb-4'>Movies List</h1>
      <Row>
        

        {
        photo.map((photo)=>(
          
            <Col className='mb-2'>
            <div>
          

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={photo.image.medium} />
              <Card.Body className='bg-light'>
                <Card.Title className='text-center text-danger'>{photo.name}</Card.Title>
                <Card.Text>
                  <p> <i class="bi bi-star-fill text-warning"></i> {photo.rating.average}</p>
                  <p>Season:{photo.season}</p>
                 <p>Date:{photo.airdate}</p> 
                 <p>runtime:{photo.runtime}</p>
                 
                </Card.Text>
            
              </Card.Body>
            </Card>

          
          
          </div>
          </Col>
        ))
      }

        
      </Row>
    </Container>
      
      
      

      
      

    </div>
  );
}

export default App;
