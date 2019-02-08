import sc from 'styled-components';

export const Anch = sc.a`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`

export const Container = sc.div`
  box-sizing      : border-box;
  min-height      : 100vh;
  font-family     : 'Montserrat', sans-serif;
  color           : #fff;
  display         : flex;
  padding         : 1rem 2rem;
`

// --- Info

export const InfoContainer = sc.div`
  width: 30%;
`

// --- List
export const ListContainer = sc.ul`
  width: 80%;
  list-style: none;
`
export const ListIcon = sc.i`
  font-size: 18px;
`

export const TrackDetails = sc.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding: .7rem;
  background-color: ${props => props.isActive && '#343434'};
  :hover {
    background-color: #414141;
  }
`

export const TrackInfo = sc.div`
  right-margin: auto;
  padding: 0 1rem;
`

export const TrackDuration = sc.span`
  margin-left: auto;
`

/**
 *  background-image: linear-gradient(130deg, #595858, #3a3a3a);
 *  list color
 *  darker : #343434
 */
