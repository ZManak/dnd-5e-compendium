import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Main from "./components/Main";
import { Search } from "./components/Main/Search";
import Random from "./components/Main/Random";
import Abilities from "./components/Main/Abilities";
import Classes from "./components/Main/Classes";
import Loading from "./components/Loading";
import Home from "./components/Main/Home";
import App from "./App";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidetabs from "./components/Main/Sidetabs/Sidetabs";
import E404 from "./components/ErrorPage/E404/E404";

const client = new ApolloClient({
  uri: "https://www.dnd5eapi.co/graphql",

  cache: new InMemoryCache(),
});

function Layout() {
  return (
    <div className="App">
      <Header />
      <div className="App-body" style={{ display: "flex", minHeight: "75vh" }}>
        <Sidetabs />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <E404 />,
    children: [
      {
        exact: true,
        path: "/",
        element: <Main />,
      },
      {
        exact: true,
        path: "search",
        element: <Search />,
      },
      {
        path: "random",
        element: <Random />,
      },
      {
        path: "ability-scores",
        element: <Abilities />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider
        router={router}
        fallbackElement={<Loading />}
      ></RouterProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
