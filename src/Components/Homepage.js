import { Header } from "../Reusable/Header"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container, Row, Col } from "react-bootstrap";
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import bg from './bg.png';
export function Homepage(){
  return (
    <>
    <Container fluid >
      <Row>
      <Col style={{
        paddingLeft:'0px',
        paddingRight:'0px'
      }}>
      <Header />
      </Col>
      </Row>
      <Row>
        <Col style={{paddingLeft:'0px', paddingRight:'0px'}}>
          <div
          style={{
            height: '600px',
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            marginTop:'60px'
            // position: 'absolute',
            // width: '100%',
            // height: '100%',
            // backgroundImage: `url(${bg})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'center'
          }}>
            <Stack>
              <Button variant="contained" style={{marginLeft:'92px', marginTop:'170%', backgroundColor:'grey'}}>
                Explore Now
              </Button>
            </Stack>
          </div>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row className="total-readers">
        <Col>
          <img src="ppl.png" alt='pic' height={100} width={200}></img>
        </Col>
      </Row>

    </Container>
    </>
  );
}