import { Anch, ListIcon, TrackDetails, TrackDuration, TrackInfo } from '../Styled.js';
import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { PlayListContext } from '../Context.js';
import PropTypes from 'prop-types';

const
  Item = ({
    song: { track_id, track_title, artist_name, album_title, track_duration }
    , iconSet, isSelected, handleSelect
  }) => {
    let
      ctx                             = useContext(PlayListContext),
      [statusIcon, setStatusIcon]     = useState(iconSet[0]),
      [showEllipsis, setShowEllipsis] = useState(false);
    let handleMouseOver = function() {
      if (!isSelected) {
        setShowEllipsis(!showEllipsis);
      }
    };
    useEffect(() => {
      if (isSelected) {
        setShowEllipsis(true);
        setStatusIcon(iconSet[1]);
      } else {
        setShowEllipsis(false);
        setStatusIcon(iconSet[0]);
      }
    }, [isSelected]);
    useLayoutEffect(() => {
      if ((ctx.activeTrack === track_id) && ctx.isPlaying && isSelected) {
        setStatusIcon(iconSet[1]);
      } else {
        setStatusIcon(iconSet[0]);
      }
    }, [ctx.activeTrack, ctx.isPlaying]);
    return (
      <React.Fragment>
        <li onClick={ (e) => { handleSelect(track_id); }} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
          <TrackDetails id={track_id} isSelected={isSelected} isPlaying={ctx.activeTrack === track_id}>
            <div onClick={() => { ctx.handlePlayClick(track_id, track_duration); }}>
              <ListIcon className="material-icons" >
                {statusIcon}
              </ListIcon>
            </div>
            <TrackInfo>
              <div>{track_title}</div>
              <div style={{margin: '0 .1rem', color: '#b2b2b2', fontSize: '14px'}}>
                <Anch>{artist_name}</Anch>
                <span>&nbsp; {'  .  '} &nbsp;</span>
                <Anch>{album_title}</Anch>
              </div>
            </TrackInfo>
            <TrackDuration>
              {showEllipsis && <ListIcon className="fas fa-ellipsis-h"></ListIcon>}
              &nbsp;&nbsp;{' '}&nbsp;&nbsp;
              { track_duration.split(':')[1] }{':'}{ track_duration.split(':')[2] }
            </TrackDuration>
          </TrackDetails>
        </li>
      </React.Fragment>
    );
  };

Item.propTypes = {
  song: PropTypes.object.isRequired,
  iconSet: PropTypes.array,
  isSelected: PropTypes.bool,
  handleSelect: PropTypes.func
};


export default Item;