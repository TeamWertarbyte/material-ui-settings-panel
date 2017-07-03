import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as colors from 'material-ui/styles/colors'
import Text from '../SettingsPanel/Text'

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
          <Text type="body1">
            {this.props.title}
          </Text>
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
