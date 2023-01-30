import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages//home_page/Home'
import "./assets/styles/index.scss"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Context_provider from './contexts/country_api'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense>
      <Context_provider>
        <App />
      </Context_provider>
    </Suspense>
  </React.StrictMode>,
)
