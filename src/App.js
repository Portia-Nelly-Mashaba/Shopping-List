import logo from './logo.svg';
import './App.css';

import ShoppingList from './Components/ShoppingList';
import AddItem from './Components/AddItem';
import Update from './Components/Update';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import Store from './Redux/Store';

function App() {
  return (
    <Provider store ={Store}>
    <div className="App">
      <BrowserRouter >
        {/* <div className='header'>
          <Link to={'/shoppingList'}>Shopping List</Link>
          <Link to={'/login'}></Link>
        <Link to={'/register'}></Link>
        <Link to={'/Profile'}></Link>
        </div> */}

<header className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
         <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto my-2 my-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={'/shoppingList'}>Shopping List</Link>
            </li>
            {/* Uncomment and add more links as needed */}
            {/* <li className="nav-item">
              <Link className="nav-link" to={'/login'}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/register'}>Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/profile'}>Profile</Link>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </header>
        <Routes>
         
          <Route path='/shoppingList' element={<ShoppingList />}></Route>
          <Route path='/item/add' element={<AddItem />}></Route>
          <Route path='/item/edit' element={<Update />}></Route>
          {/* <Route path='/login' element={<Home/>}></Route> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
    </Provider>
  );
}

export default App;
