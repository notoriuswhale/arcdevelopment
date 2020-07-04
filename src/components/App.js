import React from 'react';
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import {BrowserRouter, Switch, Route} from "react-router-dom"
import theme from "./ui/Theme"
import {Header} from "./ui/Header";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/" exact component={()=><div>home</div>}/>
              <Route path="/services" exact component={()=><div>services</div>}/>
              <Route path="/customsoftware" exact component={()=><div>custom software</div>}/>
              <Route path="/mobileapps" exact component={()=><div>mobile apps</div>}/>
              <Route path="/website" exact component={()=><div>website</div>}/>
              <Route path="/revolution" exact component={()=><div>revolution</div>}/>
              <Route path="/about" exact component={()=><div>about</div>}/>
              <Route path="/contact" exact component={()=><div>contact</div>}/>
              <Route path="/estimate" exact component={()=><div>estimate</div>}/>
            </Switch>
          </BrowserRouter>
          
      </ThemeProvider>
  );
}

export default App;
