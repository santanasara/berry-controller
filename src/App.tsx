import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";

import "./App.css";
import ButtonAppBar from "./components/appBar";
import Main from "./pages/main";
import Talk from "./pages/talk";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/talk",
    element: <Talk />,
  },
]);

function App() {
  return (

    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <ButtonAppBar />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
