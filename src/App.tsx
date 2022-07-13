import React from 'react';
import { Route, Routes} from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import mainStore from './stores/MainStore';
import { LoadingIcon } from './components/LoadingIcon';
import { observer } from 'mobx-react';

const App = observer(() => {
  if(mainStore.loading === true)
    return <LoadingIcon/>
  return (
  <div>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}>
        <Route path="/:slug" element={<ProductPage/>}/>
      </Route>
    </Routes>
    <Footer/>
  </div>
  );
})

export default App;
