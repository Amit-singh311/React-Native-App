//Importing required library for the component
import React from 'react';
import { Text, View } from 'react-native';

//making the component
const Header = () => {
	const { textStyle, viewStyle } = styles;
	return (
        <View style={viewStyle}> 
		<Text style={textStyle}>Albums</Text>
		</View>
		);
	};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8'
	},
	textStyle: {
		fontSize: 20
	}
};
//making the component available for the other files in the project
export default Header;
