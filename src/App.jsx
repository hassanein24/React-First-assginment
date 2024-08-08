
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Port from './Pages/Port'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout'
import Notfound from './Pages/Notfound'


function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout/>,
      children: [
        { index: true, element: <Home /> },
        { path: "port", element: <Port /> },
        { path: "about", element: <About/> },
        { path: "contact", element: <Contact/> },
        {path: "*",element:<Notfound></Notfound>}
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;