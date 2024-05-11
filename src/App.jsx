/* eslint-disable no-unused-vars */
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/home";
import GifProvider from "./context/gif-context";
import SearchPage from "./pages/search";
import Category from "./pages/category";
import GifPage from "./pages/single-gif";
import Favorites from "./pages/favorites";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

const App = () => {
  const box=useRef();
  useGSAP(()=>{
    const tl=gsap.timeline();
    tl.from("nav",{
      opacity:0,
      delay:0.2,
      duration:0.8,
      y:-50,
    })
    tl.from(".banner",{
      scale:0,
      opacity:0,
      duration:0.7
    })
    tl.from(".gify",{
      scale:1.2,
      opacity:0,
      duration:0.7
    })
    
  },)

  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
};

export default App;
