//Import the required library to help create the component.
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


//create the component
const App = () => (	
		<Header />
		);

//render the component
AppRegistry.registerComponent('Awesome', () => App);
