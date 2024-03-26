import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PageRead from './components/PageRead/PageRead';
import ReadBooks from './components/ReadBooks/ReadBooks';
import WishlistBooks from './components/WishlisBooks/WishlistBooks';
import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: 'wishlist',
            element: <WishlistBooks></WishlistBooks>
          }
        ]
      },
      {
        path: '/page-read',
        element: <PageRead></PageRead>
      },
      {
        path: '/book/:id',
        loader: () => fetch('/book.json'),
        element: <BookDetails></BookDetails>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
