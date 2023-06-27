import './App.css'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'

import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCarProvider } from '../../Context'

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/',  element: <Home /> },
    { path: '/my-account',  element: <MyAccount /> },
    { path: '/my-order',  element: <MyOrder /> },
    { path: '/my-orders',  element: <MyOrders /> },
    { path: '/sign-in',  element: <SignIn /> },
    { path: '/*',  element: <NotFound /> },
  ])

  return routes;
}

const App= () =>  {

  return (
    <ShoppingCarProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>  
    </ShoppingCarProvider>

  )
}

export default App
