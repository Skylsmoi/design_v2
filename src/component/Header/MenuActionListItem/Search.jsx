import React from 'react'
import PropTypes from 'prop-types'

const Search = props => {
  return (
    <li className='header__menu__rightside__itemsearch'>
      <div className='header__menu__rightside__itemsearch__search input-group'>
        <input
          type='text'
          className='search__input form-control'
          placeholder='Rechercher un dossier ..'
          aria-describedby='headerInputSearch'
          onChange={props.onChangeInput}
        />
        <span
          className='search__addonsearch input-group-addon'
          id='headerInputSearch'
          onClick={props.onClickSubmit}
        >
          <i className='fa fa-search' />
        </span>
      </div>
    </li>
  )
}
export default Search

Search.PropTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onClickSubmit: PropTypes.func.isRequired
}
