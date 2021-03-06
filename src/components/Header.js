import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { Input } from 'semantic-ui-react'
import _ from 'lodash'

import { keys } from '../constants'

const Wrapper = styled('div')`
  box-shadow: 0 0 10px gray;
  display: flex !important;
  position: fixed;
  top: 0;
  left: 220px;
  right: 0;
  background: white;
  z-index: 999;
  align-items: center;
  height: 58px;
`

class Header extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  handleSearch = (e) => {
    if(e.key === keys.ENTER) {
      this.search()
    }
  }

  search = () => {
    const searchElement = document.getElementById('search-input')
    const query = _.trim(searchElement.value)
    if(query.length === 0) return
    this.props.history.push('/search/' + query)
  }

  render() {
   	return (
      <Wrapper>
        <Input
          className={css`
            padding: 0 15px;
            width: 100%;
            max-width: 400px;
          `}
          id='search-input'
          size='small'
          action={{
            icon: 'search',
            primary: true,
            onClick: this.search
          }}
          onKeyPress={ this.handleSearch }
          placeholder='Search...'/>
      </Wrapper>
    )
  }
}

export default Header
