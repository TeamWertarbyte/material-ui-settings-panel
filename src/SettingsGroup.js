import React, { Component, PropTypes } from 'react'
import * as colors from 'material-ui/styles/colors'

const styles = {
  root: {}
}

export default class SettingsGroup extends Component {
  render() {
    return (
      <div style={{
        ...styles.root,
        ...this.props.style
      }}>
        <div style={{
          padding: '10px 20px',
          backgroundColor: colors.grey200
        }}>
          {this.props.title}
        </div>
        {this.props.children}
      </div>
    )
  }
}

SettingsGroup.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object
}
