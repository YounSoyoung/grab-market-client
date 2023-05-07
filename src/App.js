import './App.css';
import MainPageComponent from './main';
import {Routes, Route} from 'react-router-dom';
import UploadPage from './upload';
import ProductPage from './product';

function App() {

  return (
    <div>
      <Routes>
        <Route exact={true} path="/" element={<MainPageComponent/>} />
        <Route exact={true} path="/products/:id" element={<ProductPage />} />
        <Route exact={true} path='/upload' element={<UploadPage />} />
      </Routes>
    </div>
  )
}

export default App;
