import {ReactElement, FC} from "react";
import {HashRouter, Route} from "react-router-dom";
import {QueryParamProvider} from "use-query-params";
import {Provider} from "react-redux";
import React from "react";
import ErrorBoundary from "./common/ErrorBoundary";
import {store} from "../store/store";
import {App} from "./App";
import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme";

const AppContainer: FC<{}> = (): ReactElement => {
    return (
        <ErrorBoundary>
            <HashRouter>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                    <QueryParamProvider ReactRouterRoute={Route}>
                        <App/>
                    </QueryParamProvider>
                    </ThemeProvider>
                </Provider>
            </HashRouter>
        </ErrorBoundary>
    )
};
export default AppContainer;