import logo from './logo.svg';
import './App.css';
import { BookList } from './components/ListBook';
import { BrowserRouter as Router,Routes, Route, Link, NavLink } from "react-router-dom";
import { EditBook } from './components/EditBook';
import { CreateBook } from './components/CreateBook';
function App() {
  return (
    <>
      <Routes>
        <Route path='/create' element={<CreateBook />}></Route>
        <Route path='/edit/:id' element={<EditBook />}></Route>
        <Route path='/' element={<BookList />}></Route>
      </Routes>
    </>
  );
}

export default App;



