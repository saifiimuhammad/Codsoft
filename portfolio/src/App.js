import './App.css';
import Navbar from './components/Navbar';
import Main from './components/MainComps/Main'
import Form from './components/MainComps/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  const handleTitleChange = () => {
    document.title = "Developer. - Work With Me";
  }

  return (
    <Router>
      <div className='main'>
        <Navbar handleTitleChange={handleTitleChange} />
        <Routes>
          <Route exact path="/" element={<Main handleTitleChange={handleTitleChange} />} />
          <Route path="/workwithme" element={<Form/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
