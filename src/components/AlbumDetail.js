//importing the library
import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';

//creating the component
const AlbumDetail = (props) => {
	return (
		<Card>
		<Text>{props.album.title}</Text>
		</Card>
	);
};

//exporting the Album Details
export default AlbumDetail;
