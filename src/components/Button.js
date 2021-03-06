import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
	return (
		<TouchableOpacity onPress={console.log('pressed')} style={styles.buttonStyle}>
		<Text style={styles.textStyle}> Click Me!! </Text>
		</TouchableOpacity>
		);
};
const styles = {
	textStyle: {
	alignSelf: 'center',
	color: '#007aff',
	fontSize: 16,
	fontWeight:	'600',
	paddingTop: 10,
	paddingBottom: 10	
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};

export default Button;
