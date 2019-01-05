//we generally need two imports
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//creating component
class AlbumList extends Component {
	state = { albums: [] };
	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ albums: response.data }));
	}
	returnAlbums() {
		return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
	}
	render() {
		console.log(this.state);
		return (
			<View>
				<Text>{this.returnAlbums}</Text>
			</View>
			);	
   }
}
//Registering the component
export default AlbumList;
