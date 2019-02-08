import React from 'react';

export const PlayListContext = React.createContext();

export default class ContextWrap extends React.Component {
  state = {
    song_tracks : [{
      "track_id": "89433", 
      "track_title": "nostalgia of an ex-gangsta-rapper", 
      "track_duration": "00:05:30", 
      "artist_name": "deef", 
      "album_title": "Beat Scene Routine", 
      "album_image_file": "images/albums/deef_-_Beat_Scene_Routine_-_20130821140335983.jpg", 
      "track_url": "https://freemusicarchive.org/music/no_curator/deef/Beat_Scene_Routine/deef_-_04_-_nostalgia_of_an_ex-gangsta-rapper.mp3"
    }]
  }
  render() {
    return (
      <PlayListContext.Provider value={this.state}>
        {this.props.children}
      </PlayListContext.Provider>
    )
  }
}

// {"track_id": "89433", "track_title": "nostalgia of an ex-gangsta-rapper", "track_duration": "00:05:30", "artist_name": "deef", "album_title": "Beat Scene Routine", "album_image_file": "images/albums/deef_-_Beat_Scene_Routine_-_20130821140335983.jpg", "track_url": "https://freemusicarchive.org/music/no_curator/deef/Beat_Scene_Routine/deef_-_04_-_nostalgia_of_an_ex-gangsta-rapper.mp3"}
