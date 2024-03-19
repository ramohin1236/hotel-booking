
import ReactDOM from 'react-dom/client'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';
import  { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <AuthProvider>
      <HelmetProvider>
          <RouterProvider router={router} />
      </HelmetProvider>
      <Toaster   position="top-right"/>
      </AuthProvider> 
    </>

)
