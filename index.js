//Import the required library to help create the component.
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


//create the component
const App = () => (	
	<View>
		<Header headerText={'Albums!'} />
		<AlbumList />
	</View>	
		);

//render the component
AppRegistry.registerComponent('Awesome', () => App);
