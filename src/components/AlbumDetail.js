//importing the library
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//creating the component
const AlbumDetail = (props) => {
	return (
		<Card>
			<CardSection>
			    <View style={styles.thumbnailContainerStyle}>
			     <Image 
			     style={styles.thumbnailImage}
			     source={{ uri: props.album.thumbnail_image }}
			      />
			    </View>
			    <View style={styles.headerContentStyle}>
			     <Text style={styles.headerTextSize}>{props.album.title}</Text>
			     <Text>{props.album.artist}</Text>
			    </View>				
			</CardSection>
			<CardSection>
			<Image
			style={styles.artworkImage}
			source={{ uri: props.album.image }}
			/>
			</CardSection>
			<CardSection>
			<Button />
			</CardSection>	
		</Card>
	);
};
const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextSize: {
		fontSize: 18
	},
	thumbnailImage: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	artworkImage: {
		height: 300,
		flex: 1,
		width: null
	}

};
//exporting the Album Details
export default AlbumDetail;
