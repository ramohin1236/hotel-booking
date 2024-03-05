
import ReactDOM from 'react-dom/client'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <HelmetProvider>
          <RouterProvider router={router} />
      </HelmetProvider>
    </>

)
