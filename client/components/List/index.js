import React, { useContext, useState } from 'react';

import Item from './Item.js';

import { ListContainer } from '../Styled.js';
import { PlayListContext } from '../Context.js';

const List = () => {
  let 
    ctx                     = useContext(PlayListContext),
    [selected, setSelected] = useState('0');
  let handleSelect = function(track) {
    if (!(track === selected)) {
      setSelected(track);
    }
  };  
  return (
    <ListContainer>
      {
        ctx.song_tracks.map((song) => {
          return (
            <Item
              iconSet={
                (ctx.activeTrack === song.track_id) && ctx.isPlaying 
                  ? ['volume_up', 'pause'] 
                  : ['music_note', 'play_arrow']
              }
              isSelected={selected === song.track_id}
              handleSelect={handleSelect}
              key={song.track_id} 
              song={song}
            />);
        })
      }
    </ListContainer>
  );
};

export default List;
