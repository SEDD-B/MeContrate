import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import AuthPanel from "./pages/AuthPanel";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/">
          { !isAuthenticated ?
            (<Route index element={<Dashboard />} />)
            :
            (<Route index element={<AuthPanel />} />)
          }
        </Route>
      </Routes>
    </>
  )
}