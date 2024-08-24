import React from 'react'
import { Image, Row } from 'react-bootstrap';
import './header.scss';

const HeaderLeft = () => {
  return (
    <Row className='d-flex justify-content-between align-items-center header left p-2 mx-2 ml-4 '>
        <span class="material-symbols-outlined">menu</span>
        <Image src={process.env.PUBLIC_URL + '/Youtube_logo.png'} width="90vw" height="20vh" alt='logo' />
    </Row>
  )
};

export default HeaderLeft;