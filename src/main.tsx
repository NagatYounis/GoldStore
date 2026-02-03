import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/auth.tsx';
import { CartProvider } from './context/cartcontext.tsx';
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
      <CartProvider>
   
      <BrowserRouter>

    <App />
    <ToastContainer
       position= "bottom-left"
  autoClose= {3000}
  hideProgressBar
  closeOnClick
  pauseOnHover
  draggable

          />
    </BrowserRouter>
      </CartProvider>

  </AuthProvider>

  
  </QueryClientProvider>


)
