import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	// console.log(props); << returns array of 5 items
	const videoItems = props.videos.map((video) => {
		return  (
			<VideoListItem 
			onVideoSelect={props.onVideoSelect}
			key={video.etag} 
			video={video} />
			);
	});
	// Below returns the list of vids
	return (
		<ul className="col-md-8 list-group">
		{videoItems}
		</ul>
		);
};

export default VideoList;


// {props.videos.length}