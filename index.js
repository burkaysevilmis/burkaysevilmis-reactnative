/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {store} from 'src/store/store';
import {Provider} from 'react-redux';

export default function Project() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
AppRegistry.registerComponent(appName, () => Project);
