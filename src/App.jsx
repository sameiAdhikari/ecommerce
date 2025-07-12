import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import store from "../store";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const HomePage = lazy(() => import("./pages/Home"));
const ProductHomePage = lazy(() => import("./components/ProductHome"));
const AboutPage = lazy(() => import("./pages/About"));
const ProductsPage = lazy(() => import("./pages/Products"));
const LoginFormPage = lazy(() => import("./pages/Account"));
const CartPage = lazy(() => import("./pages/Cart"));
const ContactPage = lazy(() => import("./pages/Contact"));
const CheckOutpage = lazy(() => import("./pages/Checkout"));
const ProductDetailsPage = lazy(() => import("./components/ProductDetails"));
const BlogPostPage = lazy(() => import("./pages/BlogPost"));
const JoinAffiliatePage = lazy(() => import("./pages/JoinAffiliate"));
const ReturnPolicyPage = lazy(() => import("./pages/ReturnPolicy"));
const ForgotPasswordPage = lazy(() => import("./components/ForgotPassword"));
const UpdatePasswordPage = lazy(() => import("./components/UpdatePassword"));
const routerObj = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      {
        path: "/products",
        element: <Products />,
        children: [
          { index: true, element: <ProductHomePage /> },
          { path: "/products/:productId", element: <ProductDetailsPage /> },
        ],
      },
      { path: "/account", element: <LoginFormPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/checkout", element: <CheckOutpage /> },
      { path: "/blogpost", element: <BlogPostPage /> },
      { path: "/joinaffiliate", element: <JoinAffiliatePage /> },
      { path: "/returnpolicy", element: <ReturnPolicyPage /> },
      { path: "/forgotPassword", element: <ForgotPasswordPage /> },
      { path: "/updatePassword", element: <UpdatePasswordPage /> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

const RouterConfig = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={routerObj} />
        <ToastContainer style={{ width: "50px", height: "20px" }} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default RouterConfig;
