//we generally need two imports
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


//creating component
class AlbumList extends Component {

	state = { albums: [] };	 
	componentWillMount() {
		const self = this; 		
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => self.setState({ albums: response.data },()=>{console.log("16",self.state)}));
	}
	returnAlbums() {
		return this.state.albums.map((album) => <AlbumDetail key={album.title} album={album} />);
	}
	render() {
		console.log(this.state);
		return (
			<ScrollView>
			{this.returnAlbums()}
			</ScrollView>
			);	
   }
}
//Registering the component
export default AlbumList;
