import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Filme1 from "./pages/Filme1";
import Header from "./pages/Header";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Filme1 />
  },
  {
    path:"/",
    element: <Header />
  },


])

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}




