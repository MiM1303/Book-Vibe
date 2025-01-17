import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetail from './components/BookDetail/BookDetail';
import Categories from './components/Categories/Categories';
import AboutUs from './components/AboutUs/AboutUs';
import FAQ from './components/FAQ/FAQ';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: ()=>fetch('/books.json')
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
        loader: ()=>fetch('/books.json')
      },
      {
        path: "/book-details/:bookId",
        element: <BookDetail></BookDetail>,
        loader: ()=>fetch('/books.json')
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
    ]     
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
