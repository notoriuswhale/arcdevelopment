import React, { useState } from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import theme from "./ui/Theme";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";
import { LandingPage } from "./LandingPage";
import { ServicesPage } from "./ServicesPage";
import { CustomSoftware } from "./CustomSoftware";
import { MobileAppsPage } from "./MobileAppsPage";
import { WebsitePage } from "./WebsitePage";
import { TheRevolutionPage } from "./TheRevolutionPage";
import { AboutUsPage } from "./AboutUsPage";
import { ContactUsPage } from "./ContactUsPage";
import { EstimatePage } from "./EstimatePage";

function App() {
    const [value, setValue] = useState(0);
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header
                    value={value}
                    setValue={setValue}
                    selectedMenuItem={selectedMenuItem}
                    setSelectedMenuItem={setSelectedMenuItem}
                />
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/services" exact component={ServicesPage} />
                    <Route
                        path="/customsoftware"
                        exact
                        component={CustomSoftware}
                    />
                    <Route
                        path="/mobileapps"
                        exact
                        component={MobileAppsPage}
                    />
                    <Route path="/website" exact component={WebsitePage} />
                    <Route
                        path="/revolution"
                        exact
                        component={TheRevolutionPage}
                    />
                    <Route path="/about" exact component={AboutUsPage} />
                    <Route path="/contact" exact component={ContactUsPage} />
                    <Route path="/estimate" exact component={EstimatePage} />
                </Switch>
                <Footer
                    value={value}
                    setValue={setValue}
                    selectedMenuItem={selectedMenuItem}
                    setSelectedMenuItem={setSelectedMenuItem}
                />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
