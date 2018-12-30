//Import the required library to help create the component.
import React from 'react';
import { Text, AppRegistry } from 'react-native';


//create the component
const App = () => (
		<Text>Some text</Text>
		);

//render the component
AppRegistry.registerComponent('Awesome', () => App);
