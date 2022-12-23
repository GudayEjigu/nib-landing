import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { HomeProvider } from "./context/HomeContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./context/auth";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <HomeProvider>
        <BrowserRouter>
          <AuthProvider>
            <ScrollToTop />
            <App />
          </AuthProvider>
        </BrowserRouter>
      </HomeProvider>
    </ChakraProvider>
  </QueryClientProvider>
);
