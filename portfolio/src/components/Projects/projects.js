import React from 'react'
import {Card } from "react-bootstrap"

export const Projects = () => {
  return (
<div className='row'>
    <Card className="col-sm-12 col-md-3">
      <a href="https://irmbyznr-microsoft.netlify.app/">
      <Card.Img variant="top" src={require("./img/microsoft.png")} />
      </a>
      <Card.Body>
        <Card.Title>Microsoft Clone</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card  className="col-sm-12 col-md-3">
    <a href="https://irmbyznr-microsoft.netlify.app/">
    <Card.Img variant="top" src={require("./img/microsoft.png")} />
    </a>
    <Card.Body>
      <Card.Title>Lev'is Clone</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card  className="col-sm-12 col-md-3">
    <a href="https://irmbyznr-microsoft.netlify.app/">
    <Card.Img variant="top" src={require("./img/microsoft.png")} />
    </a>
    <Card.Body>
      <Card.Title>Lev'is Clone</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    
  </Card>
  </div>
    
  )
}
