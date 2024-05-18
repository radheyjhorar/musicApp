import React from 'react'
import './App.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, MusicList } from './pages'

function App() {
  const Layout = () => {
    return (
      <div className='main'>
        {/* <Header /> */}
        <div className='container'>
          <div className='menuContainer'>
            {/* <Sidebar /> */}
          </div>
          <div className='contentContainer'>
            <Outlet />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/musiclist",
          element: <MusicList />
        },
      ]
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ])

  return <RouterProvider router={router} />
}

export default App
