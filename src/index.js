import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCaCiBv4yG2OC5PdaX1s5Mit9WC3psn7I4';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null,
			key: []
		};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});

			// console.log(videos[1]);
});

	}

	render() {
		return (
			<div>
			  <SearchBar />
			  <VideoDetail video={this.state.selectedVideo} />
			  <VideoList 
			  onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
			  key={this.state.videos.etag}
			  videos={this.state.videos} />
			</div>
			);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));


//1. Create a component that produces HTML
//Functional components can take a class based component

//2. Take the code and put it on page/ DOM
//Need to pass an instance and not a class to ReactDOM


//Example of functional component
// const App = () => {
// 	return <div>
// 		<SearchBar />
// 	</div>;
// }

//Syntactic sugar makes what's below into what's above
// this.setState({videos: videos});

//props is available everywhere for a class based component and needs 'this.props'
//unlike functional components

// var arr = [1,2,3];
// undefined
// arr.map
// map() { [native code] }
// arr.map(function(number) {return number * 3});
// [3, 6, 9]


// function onVideoSelect(selectedVideo) { return _this2.setState({ selectedVideo: selectedVideo });