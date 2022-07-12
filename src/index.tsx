import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mainstore from './stores/MainStore'
import { Provider } from 'mobx-react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
  const theme = extendTheme({ breakpoints })

/*const stores = {
  mainstore,
  tabsstore : mainstore.TabsStore,
  cardsstore: mainstore.CardsStore,

}*/
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<Provider store={stores}>
    <React.StrictMode>
      <ChakraProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ChakraProvider>
    </React.StrictMode>
  //</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
