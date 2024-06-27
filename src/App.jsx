import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./layouts/AppLayout";

import { Auth , Dashboard , Landing , Link , RedirectLink } from "./pages";


const router = createBrowserRouter([
  {element:<AppLayout/>,
    children:[
      {
        path: "/",
        element: <Landing/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/auth",
        element: <Auth/>
      },
      {
        path: "/link/:id",
        element: <Link/>
      },
      {
        path: "/:id",
        element: <RedirectLink/>
      },
    ]
  }
])


function App() {

  return (
   <RouterProvider router={router} />
  )
}

export default App
