import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from './shared/components/ui/provider';
import { AuthProvider } from './shared/context/AuthContext';
import App from './app/App';


const root = document.getElementById("root");

createRoot(root!).render(
  <Provider>
    <AuthProvider>
      <BrowserRouter>
        <Routes> {/* CRIAÇÃO DE ROTAS */}
          <Route index element={<App />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </Provider>
);
