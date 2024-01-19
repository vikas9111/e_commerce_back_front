import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
