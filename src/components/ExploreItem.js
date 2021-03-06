import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'

const ExploreItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85px;
  border: 1px solid #d1d1d7;
  border-radius: 3px;
  box-shadow: 0 1px 5px rgba(10,10,22,.25);
  background: url(${`${process.env.PUBLIC_URL}/static/images/channels/popular.png`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    text-decoration: none;
    opacity: .9;
  }
  h4 {
    color: white;
    font-weight: 600;
    padding-left: 6px;
    padding-right: 6px;
    text-align: center;
  }
`

export default props => (
  <ExploreItem to={`/explore/${ props.title }`}>
    <h4>{ props.title }</h4>
  </ExploreItem>
)
