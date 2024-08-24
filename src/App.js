import HeaderLeft from './components/HeaderLeft';
import './App.css';
import HeaderRight from './components/HeaderRight';
import { Row } from 'react-bootstrap';
import HeaderMiddle from './components/HeaderMiddle';

function App() {
  return (
    <Row className="App d-flex justify-content-between">
      <HeaderLeft/>
      <HeaderMiddle/>
      <HeaderRight/>
    </Row>
  );
}

export default App;
