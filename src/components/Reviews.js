import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Reviews({reviews}) {
  return (
    <div>
     <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><b className='text-warning ps-5'>Review</b></Accordion.Header>
        <Accordion.Body>
          {
            reviews?reviews.map(i=>(

              <div className='p-2'>
                <p><b>name : </b> {i.name}</p>
                <p><b>date : </b> {i.date}</p>
                <p><b>rating : </b> {i.rating}</p>
                <p><b>comments : </b> {i.comments}</p>

              </div>
              
            )   
              ):<h1>No Reviews</h1>
          }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
  )
}

export default Reviews