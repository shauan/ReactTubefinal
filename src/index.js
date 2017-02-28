import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Favorites from './components/favorites';
import axios from 'axios';
const API_KEY = 'AIzaSyAbCwpiKgJsOSncc0-rXBArTdKOrPmqH1M';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      favoritesList: []
    };

    this.videoSearch('Best beaches');
    this.favoritesList = this.favoritesList.bind(this);
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  componentDidMount() {
    axios.get('https://hm-msg-forum-f02c3.firebaseio.com/messages/.json')
    .then((res) => {
        var temp = [];
        Object.values(res.data).map(elm => {
          // temp.push(Object.values(elm)[0]);
          temp.push(elm);
        })
        this.setState({
          favoritesList: temp
        })
    });
  }

  favoritesList() {
    return (
        this.state.favoritesList.reverse().map(el =>
            <div className="infoz">
              <div className="titz">{el.title}</div>
              <a href={el.favorites}  target="_blank">{el.favorites}</a>
            </div>
        )
    )
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 100);

    return (
      <div className="container">
        <div >
          <div className="row">
            <div className="col-md-3">
              <Favorites />
            </div>
            <div className="col-md-9">
              <SearchBar
              onSearchTermChange={videoSearch}
              videos={this.state.videos} />
            </div>
          </div>
        </div>


        <VideoDetail
          video={this.state.selectedVideo}
          />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
          />

          <div className="container">
            <div className="col-md-12">
              <h1 className="soc">Favorites</h1>
              <div>
                {this.favoritesList()}
              </div>

            </div>



          </div>

      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('.container') );
