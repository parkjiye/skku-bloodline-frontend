import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";

import "./App.css";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Pretendard-Regular",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
