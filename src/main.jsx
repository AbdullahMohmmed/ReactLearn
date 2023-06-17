import React from 'react'
import ReactDOM from 'react-dom/client'




import App from './App.jsx'
import Contact from './routes/contact.jsx';
import Home from './component/Pages/Home.jsx';
import Store from './component/Pages/Store.jsx';
import Header from './component/Header.jsx';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
 
const AppLayout= ()=>{
  return(
    <>
    <Header/>
    <Outlet/>
     </>
  )
}
const router = createBrowserRouter([
  {
    element : <AppLayout/>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contacts",
        element: <Contact />,
      },
      {
        path: "store",
        element: <Store />,
      }
    
    ],

  }



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />



  </React.StrictMode>
)
