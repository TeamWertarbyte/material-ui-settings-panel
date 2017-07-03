import React, { Component, PropTypes } from 'react'
import * as colors from 'material-ui/styles/colors'
import Text from '../SettingsPanel/Text'

const styles = {
  root: {
    padding: '36px 42px 36px 0',
    display: 'flex',
    backgroundColor: colors.grey400
  },
  image: {
    height: 124,
    width: 212
  },
  text: {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default class HeaderPanel extends Component {
  render() {
    return (
      <div style={{
        ...styles.root,
        ...this.props.style
      }}>
        <div style={{
          ...styles.image,
          ...this.props.imageStyle
        }}>
          <div style={{
            marginLeft: 50,
            width: 128,
            height: 128
          }}>
            {this.props.image}
          </div>
        </div>
        <div style={{
          ...styles.text,
          ...this.props.textStyle
        }}>
          <Text type="display1" style={{ color: colors.white }}>
            {this.props.title}
          </Text>
          <Text type="body1" style={{ color: colors.white }}>
            {this.props.subtitle}
          </Text>
          <Text type="body1" style={{ color: colors.white }}>
            {this.props.description}
          </Text>
        </div>
      </div>
    )
  }
}

HeaderPanel.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  imageStyle: PropTypes.object,
  textStyle: PropTypes.object,
  style: PropTypes.object
}
