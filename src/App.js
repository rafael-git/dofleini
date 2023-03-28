
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import LayoutContainer from './components/LayoutContainer';

function App() {
  return (
    <BrowserRouter>
       <LayoutContainer />
    </BrowserRouter>
  );
}

export default App;
