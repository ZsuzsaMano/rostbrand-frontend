
import './styles/style.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/404.jsx"
import About from "./pages/about.jsx"
import Home from "./pages/home.jsx"
import Contact from "./pages/contact.jsx"
import Paintings from "./pages/paintings"
import Prints from "./pages/prints"
import Sculptures from "./pages/sculptures"


function App() {


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
errorElement: <ErrorPage/>,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "prints",
    element: <Prints />,
  },
  {
    path: "paintings",
    element: <Paintings/>,
  },
  {
    path: "sculptures",
    element: <Sculptures/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
]);
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
