import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Switch, 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

import { LoginScreen, RegisterScreen } from "../screens";
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
    path: "/login",
    element: <LoginScreen />,
  }
]);

const AppRoutes = () => {
  return (
     <RouterProvider router={router} />
  );
};

export default AppRoutes;