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

function App() {
  return (
    <>
    <Router>
      <Header />
      <Home />
    </Router>
    </>
  );
}

export default App;
