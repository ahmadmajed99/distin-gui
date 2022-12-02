import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import Category from "./pages/category/Category";
import Menu from "./pages/menu/Menu";
import Items from "./pages/items/Items";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <ProtectedRoute>
          <Sidebar />
          <Dashboard />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "categories",
    element: (
      <>
        <ProtectedRoute>
          <Sidebar />
          <Category />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "items",
    element: (
      <>
        <ProtectedRoute>
          <Sidebar />
          <Items />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "menu",
    element: (
      <>
        <ProtectedRoute>
          <Sidebar />
          <Menu />
        </ProtectedRoute>
      </>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
