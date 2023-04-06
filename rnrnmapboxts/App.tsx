/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import Mapbox from '@rnmapbox/maps';
import BugReportExample from './bugreportexample';
import accesstoken from './accesstoken.json';

Mapbox.setAccessToken(accesstoken);

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BugReportExample />
    </SafeAreaView>
  );
}

export default App;
