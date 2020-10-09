import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import BlogLayout from '../layouts/BlogLayout';
import LandingLayout from '../layouts/LandingLayout';
import { Routing } from '../config/Routing';

const ApplicationRouter = function() {  
    const routes = Object.values(Routing);
    const layouts = {
        BlogLayout: BlogLayout,
        LandingLayout: LandingLayout
    };
    
    const renderRoute = function() {
      return(
        routes.map(function(route) {
            const layout = layouts[route.layout] ?? layouts[0];
            return ( 
                <RouteWrapper key={ route.path } path={ route.path } exact={ route.exact } 
                  component={ route.component } layout={ layout } />
            );
          }
        )
      );
    };

    return (
        <Switch>
            <Redirect exact={true} from='/' to='/about' />
            { renderRoute() }
            <RouteWrapper component={NotFound} layout={layouts.BlogLayout}/>
        </Switch>
    );
};

const RouteWrapper = function({
    component: Component,
    layout: Layout,
    ...rest
}) {
    return(
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        }/>
    );
}

export default ApplicationRouter;