//we generally need two imports
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Fetch from 'react-native-fetch';

//creating component
class AlbumList extends Component {
	componentWillMount() {
		Fetch('https://mywebsite.com/mydata.json');
	}
	render() {
		return (
			<View>
				<Text>Album List!!!</Text>
			</View>
			);	
   }
}
//Registering the component
export default AlbumList;
