import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AppContextProvider from './component/AppContext/AppContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AppContextProvider>              
                                   {/* every thing btwn this is children to context proviode
                            app is children to the context provioder, so we extract this information take it from children*/}
      <App />                         
      </AppContextProvider>
   
  </React.StrictMode>
);
