import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AboutUs from './assets/components/AboutUs/AboutUs';
import ContactUs from './assets/components/ContactUs/ContactUs';
import Home from './assets/components/Home/Home';
import Users from './assets/components/Users/Users';
import UserDetails from './assets/components/UserDetails/UserDetails';
import Posts from './assets/components/Posts/Posts';
import PostDetails from './assets/components/PostDetails/PostDetails';
import ErrorPage from './assets/components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/users',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/posts/:id',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <PostDetails></PostDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
