//importing the library
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//creating the component
const AlbumDetail = (props) => {
	return (
		<Card>
			<CardSection>
				<Text>{props.album.title}</Text>
			</CardSection>	
		</Card>
	);
};

//exporting the Album Details
export default AlbumDetail;
