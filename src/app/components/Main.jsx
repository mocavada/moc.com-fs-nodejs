import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../stores';
import { history } from '../stores/history';
import { ConnectedDashboard } from './Dashboard';
import { Route, Router } from 'react-router-dom';

export const Main = ()=>(
    <Router history={history}>
        <Provider store={store}>
            <div>
                {/* <ConnectedDashboard/> */}
                <Route 
                    exact 
                    path="/dashboard" 
                    render={()=> (<ConnectedDashboard/>)}
                />
            </div>
        </Provider>
    </Router>
)
