import React, { Component, PropTypes } from 'react'
import Text from './Text'

const styles = {
  root: {
    display: 'flex'
  }
}

export default class SettingsItem extends Component {
  render() {
    return (
      <div style={{
        ...styles.root,
        ...this.props.style
      }}>
        <div style={{
          width: 175,
          padding: '20px 10px 30px 20px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Text type="body1">
            {this.props.title}
          </Text>
          <Text type="caption">
            {this.props.description}
          </Text>
        </div>
        <div style={{
          padding: '20px 130px 13px 0'
        }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

SettingsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  style: PropTypes.object
}
