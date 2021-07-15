import React from "react";
import { Route, Switch } from "react-router-dom";

import store from "../store";
import { QueryClient, QueryClientProvider } from "react-query";

import { initStickyOffset } from "../utils";

import { HIDE_CART_MODAL, HIDE_QUICKVIEW } from "../constants/action-types";
import { LoginContextController } from "../context/Auth";
import { TransferPointsContextController } from "../context/TransferPoints";
import { LoaderContextController } from "../context/Loading";
import { AuctionContextController } from "../context/Auctions";
import { SurveyContextController } from "../context/Survey";

let ProductsPages = React.lazy(() => import("./products-route"));
let CategoriesPages = React.lazy(() => import("./categories-route"));
let OthersPages = React.lazy(() => import("./others-route"));
let HomePage = React.lazy(() => import("./home-route"));

// Create a client
const queryClient = new QueryClient();
export default function Routes() {
  store.dispatch({ type: HIDE_CART_MODAL });
  store.dispatch({ type: HIDE_QUICKVIEW });
  initStickyOffset();

  return (
    <QueryClientProvider client={queryClient}>
      <LoaderContextController>
        <SurveyContextController>
          <TransferPointsContextController>
            <AuctionContextController>
              <LoginContextController>
                <React.Suspense fallback={<span></span>}>
                  <Switch>
                    <Route
                      path={`${process.env.PUBLIC_URL}/products`}
                      component={ProductsPages}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/categories`}
                      component={CategoriesPages}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/pages`}
                      component={OthersPages}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/`}
                      component={HomePage}
                    />
                  </Switch>
                </React.Suspense>
              </LoginContextController>
            </AuctionContextController>
          </TransferPointsContextController>
        </SurveyContextController>
      </LoaderContextController>
    </QueryClientProvider>
  );
}
