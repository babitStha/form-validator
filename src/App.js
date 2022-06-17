import { useState } from 'react';
import ReactDOM  from 'react-dom';
import './App.css';
import Form from './components/Form';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false)
  const displayModal = () =>{
    setShowModal(true)
  }
  const hideModal = () =>{
    setShowModal(false)
  }
  return (
    <div className="App">
      {
        showModal && ReactDOM.createPortal(<Modal onClick={hideModal}/>, document.getElementById('overlay'))
      }
      <Form displayModal={displayModal}/>
    </div>
  );
}

export default App;
