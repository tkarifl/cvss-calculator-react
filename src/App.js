import React from "react"
import Main from "./Components/Main"
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Main />
    </StyledEngineProvider>
  );
}

export default App;
