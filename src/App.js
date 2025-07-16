import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
