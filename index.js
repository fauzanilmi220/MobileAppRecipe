/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import storages from './src/Storage/store';
import React,{Component} from 'react';

const {store, persistor} = storages()
class MobileApp extends Component{
    render(){
        return(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => MobileApp);
