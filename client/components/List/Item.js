import React from 'react';
import PropTypes from 'prop-types';

import { Anch, ListIcon, TrackDetails, TrackDuration, TrackInfo } from '../Styled.js';

const Item = React.memo(({
  song : { track_id, track_title, artist_name, album_title, track_duration }
  , clickHandler, mouseOverHandler, isActive, showEllipsis, statusIcon
}) => {
  return (
    <React.Fragment>
      <li onClick={clickHandler} onMouseEnter={mouseOverHandler} onMouseLeave={mouseOverHandler}>
        <TrackDetails id={track_id} isActive={isActive}>
          <div>
            <ListIcon className="material-icons"> {statusIcon} </ListIcon>
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
})

Item.propTypes = {
  song: PropTypes.object.isRequired
}

export default Item;


