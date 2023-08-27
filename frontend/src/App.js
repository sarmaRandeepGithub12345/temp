import "./App.css";
import { Fragment, useEffect, useState } from "react";

import { useMediaQuery } from "@mui/material";
import {Setting} from "./pages/Setting"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLeftMenu, turnOffLeftMenu } from "./counter/CounterSlice";
import Esportree from "./pages/Esportree";
function App() {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
 // const [open, setopen] = useState(false);
  const Layout = () => {
    const obj = useSelector(state=>state.CounterSliceReducer)
    const  [loading, setloading] = useState(false)
    useEffect(() => {

        window.onload=()=>{
          setloading(true)
          setTimeout(() => {
            setloading(false)
          }, 1500);
        }

    }, [])
    return (
      <>
        {loading?<Esportree/>:<Outlet />}
        
      </>
    );
  };



  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Setting />,
        },
      ],
    },
  ]);

 
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
