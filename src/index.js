import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Login';
import Cadastro from "./Cadastro";
import Filmes from './Filmes';
import EditaFilme from './EditaFilme';
import "./App.css"
import Sobre from './Sobre';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e862a9',
    },
    secondary: {
      main: '#ce277b',
    },
    warning: {
      main: '#9e218e',
    },
    info: {
      main: '#ececec',
    },
    success: {
      main: '#d23c88',
    },
    error: {
      main: '#c951a0',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/filmes",
    element: <Filmes />
  },
  {
    path: "/edicao/:id",
    element: <EditaFilme />
  }
  ,
  {
    path: "/sobre",
    element: <Sobre />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
