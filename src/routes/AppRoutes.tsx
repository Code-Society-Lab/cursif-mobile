import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Switch, 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

import { LoginScreen, RegisterScreen, HomeScreen } from "../screens";
import { ProtectedRoute } from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <div>Welcome!</div>
      </ProtectedRoute>
    )
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  }
]);

const AppRoutes = () => {
  return (
     <RouterProvider router={router} />
  );
};

export default AppRoutes;