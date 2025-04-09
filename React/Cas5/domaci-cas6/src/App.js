import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Book from "./Components/Book"
import BOOKS from "./books.json"

const App = () => {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home BOOKS = {BOOKS} />} />
            <Route path={'/book/:id'} element={<Book BOOKS = {BOOKS}/>} />
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
