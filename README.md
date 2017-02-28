# YOURTUBE

Yourtube is an app designed to allow a user to search videos through youtube without the ads and faster. The user can search any type of video that exists on youtube and save his favorites to watch another time.



## Technologies Used

* [BOOTSTRAP](https://getbootstrap.com/) - CSS, JavaScript and fonts
* [FIREBASE](https://firebase.google.com/) - Firebase provides a realtime database and backend as a service
* [NODEMON](https://nodemon.io/) - Used to monitor for any changes in your source / restart server automatically
* [HEROKU](https://www.heroku.com/home) - Cloud deployment
* [REACT](https://facebook.github.io/react/) - JavaScript library for building user interfaces


### General Approach Used

The idea was to search videos faster and without the annoying ads that appear every time at the screen.


### Installation Instructions


git clone https://github.com/2high/ReactTube
cd ReactTube
npm install


```
Run `npm run dev` and visit localhost:8080 to make sure everything is working.
```



## Wireframes and Trello:


![] ()



### Code Highlight

The structure of the web app:

```
...
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
...

```

## Deployment

Deployed on [Heroku](https://markit-x.herokuapp.com/)

## Author

* **Shauan Ferreira Leite** - [LinkedIn](https://www.linkedin.com/in/shauanleite)



## License

This project is currently in the process of being licensed.
# ReactTubefinal
