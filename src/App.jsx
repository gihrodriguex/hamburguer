import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Filme1 from "./pages/Filme1";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Filme1 />
  },

])

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}




