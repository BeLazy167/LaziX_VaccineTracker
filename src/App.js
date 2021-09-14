import logo from './logo.svg';
import './App.css';
import Header from './layout/Header'
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import Home from './layout/Home';
import Footer from './layout/Footer'

function App() {
  return (
    <>
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
    </>
  );
}

export default App;
