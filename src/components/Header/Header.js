import React from "react";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar";

function Header(props) {
    return (
      <AppBar>
          <Toolbar>
              ArcDevelopment
          </Toolbar>
      </AppBar>
    );
}

export {Header}