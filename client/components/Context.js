import React from 'react';

export const PlayListContext = React.createContext();

export default class ContextWrap extends React.Component {
  state = {
    isPlaying : false,
    activeTrack: '',
    activeTrackDuration: '',
    song_tracks : [
      {
        "track_id": "89433", 
        "track_title": "nostalgia of an ex-gangsta-rapper", 
        "track_duration": "00:05:30", 
        "artist_name": "deef", 
        "album_title": "Beat Scene Routine", 
        "album_image_file": "images/albums/deef_-_Beat_Scene_Routine_-_20130821140335983.jpg", 
        "track_url": "https://freemusicarchive.org/music/no_curator/deef/Beat_Scene_Routine/deef_-_04_-_nostalgia_of_an_ex-gangsta-rapper.mp3"
      },
      {
        "track_id": "89434", 
        "track_title": "nostalgia of an ex-gangsta-rocker", 
        "track_duration": "00:05:30", 
        "artist_name": "deef", 
        "album_title": "Beat Scene Routine", 
        "album_image_file": "images/albums/deef_-_Beat_Scene_Routine_-_20130821140335983.jpg", 
        "track_url": "https://freemusicarchive.org/music/no_curator/deef/Beat_Scene_Routine/deef_-_04_-_nostalgia_of_an_ex-gangsta-rapper.mp3"
      },
      {
        "track_id": "89435", 
        "track_title": "nostalgia of an ex-gangsta-dancer", 
        "track_duration": "00:05:30", 
        "artist_name": "deef", 
        "album_title": "Beat Scene Routine", 
        "album_image_file": "images/albums/deef_-_Beat_Scene_Routine_-_20130821140335983.jpg", 
        "track_url": "https://freemusicarchive.org/music/no_curator/deef/Beat_Scene_Routine/deef_-_04_-_nostalgia_of_an_ex-gangsta-rapper.mp3"
      }
    ]
  }
  changeActiveTrack = (track_id, track_duration) => {
    this.setState({
      activeTrack: track_id,
      activeTrackDuration: track_duration
    });
  }
  handlePlayClick = (track_id, track_duration) => {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
    this.changeActiveTrack(track_id, track_duration);
  }
  handleRemoveTrack = (index, track_id) => {
    let newList = [...this.state.song_tracks];
    newList.splice(index, 1);
    this.setState({
      song_tracks: newList
    });
    // TODO : api call to remove base on track_id
    console.log(track_id);
  }
  render() {
    let ctx = {
      ...this.state,
      handlePlayClick: this.handlePlayClick,
      changeActiveTrack: this.changeActiveTrack,
      handleRemoveTrack: this.handleRemoveTrack
    }
    return (
      <PlayListContext.Provider value={ctx}>
        {this.props.children}
      </PlayListContext.Provider>
    )
  }
}

// {"track_id": "89433", "track_title": "nostalgia of an ex-gangsta-rapper", "track_duration": "00:05:30", "artist_name": "deef", "album_title": "Beat Scene Routine", "album_image_file": "images/albums/deef_-_Beat_Scene_Routine_-_20130821140335983.jpg", "track_url": "https://freemusicarchive.org/music/no_curator/deef/Beat_Scene_Routine/deef_-_04_-_nostalgia_of_an_ex-gangsta-rapper.mp3"}
