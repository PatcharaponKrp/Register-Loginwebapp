import HeaderBar from "./component/HeaderBar";
import { Box } from "@mui/material";
import react, { useState } from "react";
import { useUserAuth } from "./context/UserAuthContext";
function App() {
  return (
    <>
      <div className="app">
        <main className="content">
          <HeaderBar />
          <div className="content_body">{/* <Box m="30px"></Box> */}</div>
        </main>
      </div>
    </>
  );
}

export default App;
