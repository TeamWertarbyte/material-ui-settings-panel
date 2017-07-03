import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
  root: {
    maxWidth: 800,
    margin: '0 auto'
  }
}

export default class SettingsPanel extends Component {
  render() {
    return (
      <div style={{
        ...styles.root,
        ...this.props.style
      }}>
        {this.props.children}
      </div>
    )
  }
}

SettingsPanel.propTypes = {
  style: PropTypes.object
}
