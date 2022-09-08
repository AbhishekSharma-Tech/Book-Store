import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='foot-bg'>
      <Container>
        <Row>
          <Col className='whiteness text-center py-3'>Copyright &copy; BookChor</Col> 
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
