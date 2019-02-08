import sc from 'styled-components';

export const Container = sc.div`
  box-sizing      : border-box;
  min-height      : 100vh;
  font-family     : 'Montserrat', sans-serif;
  background-color: #404040;
  background-image: linear-gradient(130deg, #6d6b6b, #404040);
  color           : #fff;
  display         : flex;
`

export const ListContainer = sc.div`
  width: 30%;
`

export const InfoContainer = sc.div`
  width: 80%;
`