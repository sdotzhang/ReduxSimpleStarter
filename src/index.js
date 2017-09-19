import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAj_T96XTEfPc3jJwuRNWkaCwY2FBfC4a0';


// create a new component, this component procedues some html
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };
        this.videoSearch('german sheperd');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            console.log(`searched ${term}`);
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList
                    onVideoSelected={selectedVideo => this.setState({selectedVideo})}
                    videos={ this.state.videos } />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (DOM)
ReactDom.render(<App />, document.querySelector('.container'));
