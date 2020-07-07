import React, {useState} from 'react';
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import {BrowserRouter, Switch, Route} from "react-router-dom"
import theme from "./ui/Theme"
import {Header} from "./ui/Header";
import {Footer} from "./ui/Footer";
import {LandingPage} from "./LandingPage";
import {ServicesPage} from "./ServicesPage"
import {CustomSoftware} from "./CustomSoftware"

function App() {
    const [value, setValue] = useState(0);
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header value={value} setValue={setValue} selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem}/>
                <Switch>
                    <Route path="/" exact component={LandingPage}/>
                    <Route path="/services" exact component={ServicesPage}/>
                    <Route path="/customsoftware" exact component={CustomSoftware}/>
                    <Route path="/mobileapps" exact component={() => <div>mobile apps</div>}/>
                    <Route path="/website" exact component={() => <div>website</div>}/>
                    <Route path="/revolution" exact component={() => <div>revolution</div>}/>
                    <Route path="/about" exact component={() => <div>about</div>}/>
                    <Route path="/contact" exact component={() => <div>contact</div>}/>
                    <Route path="/estimate" exact component={() => <div>estimate</div>}/>
                </Switch>
                <Footer value={value} setValue={setValue} selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem}/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
