import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import  './Style/app.css';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router

root.render(
  <div className='indexx'>
      <Router>
        <App />
      </Router>
  </div>

);
