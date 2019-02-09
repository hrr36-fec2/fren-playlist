import React, { useContext, useState } from 'react'

import Item from './Item.js';

import { ListContainer } from '../Styled.js';
import { PlayListContext } from '../Context.js';

const List = () => {
  let 
    ctx = useContext(PlayListContext)
    , [active, setActive]             = useState(0)
    , [showEllipsis, setShowEllipsis] = useState(false)
    , [statusIcon, setStatusIcon]     = useState('music_note')
    , handleClick = (e) => {
        setActive([e.target][0].id === active ? 0 : [e.target][0].id);
      }
    , handleMouseOver = (e) => {
        setShowEllipsis(!showEllipsis);
        setStatusIcon(statusIcon === 'music_note' ? 'play_arrow' : 'music_note');
      }
  return (
    <ListContainer>
      {
        ctx.song_tracks.map((song) => {
        return (
          <Item 
            isActive={active === song.track_id}
            mouseOverHandler={handleMouseOver}
            showEllipsis={showEllipsis}
            clickHandler={handleClick}
            statusIcon={statusIcon}
            key={song.track_id} 
            song={song} 
          />);
        })
      }
    </ListContainer>
  )
}

export default List;

// 
