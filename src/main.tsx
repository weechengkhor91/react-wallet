
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter } from 'react-router-dom';
import Web3ModalProvider from './pages/Wallet.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Web3ModalProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </Web3ModalProvider>
  </BrowserRouter>
)
