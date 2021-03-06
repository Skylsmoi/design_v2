import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const InputGroupText = props => {
  return (
    <div className={classnames(`${props.parentClassName}`, props.customClass, 'form-group')}>
      <div className={classnames(`${props.parentClassName}__icon`)}>
        <i className={classnames('fa fa-fw', props.icon)} />
      </div>
      <input
        type={props.type}
        className={classnames(`${props.parentClassName}__input`, 'form-control')}
        placeholder={props.placeHolder}
        value={props.value}
        onChange={props.onChange}
      />
      <div className={classnames(`${props.parentClassName}__msgerror`, 'invalid-feedback')}>
        {props.invalidMsg}
      </div>
    </div>
  )
}

export default InputGroupText

InputGroupText.PropTypes = {
  parentClassName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel']).isRequired,
  customClass: PropTypes.string,
  icon: PropTypes.string,
  placeHolder: PropTypes.string,
  invalidMsg: PropTypes.string,
  onChange: PropTypes.func
}

InputGroupText.defaultProps = {
  customClass: '',
  icon: false,
  placeHolder: '',
  invalidMsg: false,
  onChange: () => {}
}
