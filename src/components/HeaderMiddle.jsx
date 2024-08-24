import React from 'react';
import { Row } from 'react-bootstrap';

const HeaderMiddle = () => {
  return (
    <Row className="header-middle d-flex justify-content-center align-items-center">
        <input className="px-4" type='search' placeholder='search..' />
        <span class="material-symbols-outlined search px-3">search</span>
        <span class="material-symbols-outlined mic">mic</span>
    </Row>
  )
}

export default HeaderMiddle