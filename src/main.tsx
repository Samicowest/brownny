import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import Root from "./Root";
import ErrorPage from "./utils/ErrorPage";
import Home from "./Home";
import { DataProvider } from "./service/context";
import Login from "./Login";
import Register from "./register";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthProvider } from "./context/AuthContext";
import DetailPage from "./Detail";
import CheckOut from "./CheckOut.tsx";

// Define the type for routes
const queryClient = new QueryClient();

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]);

// const Subscribed: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return <>{children}</>;
// };

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <UserAuthProvider>
          <RouterProvider router={router} />
        </UserAuthProvider>
      </DataProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
