import React, { useContext } from 'react'

import { PlayListContext } from '../Context.js';
import { Anch, InfoContainer, ArtCover, InfoName, InfoPlayButton, ListIcon } from '../Styled.js';

const Info = () => {
  return (
    <InfoContainer>
      <ArtCover>
        <img height="230px" width="230px" src="https://mosaic.scdn.co/640/3065d88f92c1879bfd67fb575867efae32ef96de68fd7136a825e28eb72fccfef55d4d1ff2b0b942b771ca4987112e670593e4f79dfe0acb7645458db988e4675b9ebb128c892dab2f9b3f97c2301216"/>
      </ArtCover>
      <InfoName>
        Info
      </InfoName>
      <Anch style={{color: '#b2b2b2', fontSize: '14px'}}>
        obdb
      </Anch>
      <InfoPlayButton>
        Play
      </InfoPlayButton>
      <div style={{color: '#b2b2b2', fontSize: '14px'}}>
        9 songs
      </div>
      <div style={{margin: '1rem 0'}}>
        <ListIcon className="fas fa-ellipsis-h"></ListIcon>
      </div>
      
    </InfoContainer>
  )
}

export default Info;