import './App.css';
import MainPageComponent from './main';
import {Routes, Route} from 'react-router-dom';
import UploadPage from './upload';
import ProductPage from './product';

function App() {

  return (
    <div>
      <div>
            <div id="header">
            <div id="header-area">
                <img src="/images/icons/logo.png" />
            </div>
        </div>
        <div id="body">
      <Routes>
        <Route exact={true} path="/" element={<MainPageComponent/>} />
        <Route exact={true} path="/products/:id" element={<ProductPage />} />
        <Route exact={true} path='/upload' element={<UploadPage />} />
      </Routes>
      </div>
      <div id="footer"></div>
    </div>
  </div>  
  )
}

export default App;
