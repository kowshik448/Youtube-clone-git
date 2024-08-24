import React from 'react'
import { Row } from 'react-bootstrap';

const HeaderRight = () => {
  return (
        
    <Row className="d-flex justify-content-between mx-1 p-2 header right">
        <span class="material-symbols-outlined">video_call</span>
        <span class="material-symbols-outlined">notifications</span>
        <span class="material-symbols-outlined">account_circle</span>
    </Row>
  )
};

export default HeaderRight;