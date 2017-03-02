import React, { Component, PropTypes } from 'react'
import { IconButton, Paper } from 'material-ui'
import * as colors from 'material-ui/styles/colors'
import enhanceWithClickOutside from 'react-click-outside'
import Text from './Text'

const styles = {
  root: {
    padding: '25px 50px',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%'
  }
}

class ExpandablePanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      hovered: false
    }
  }

  handleClickOutside() {
    this.setState({ expanded: false })
  }

  render() {
    return (
      <Paper
        style={this.state.expanded ? {
            ...styles.root,
            margin: '40px -20px',
            ...this.props.style
          } : {
            ...styles.root,
            cursor: 'pointer',
            backgroundColor: this.state.hovered ? colors.grey200 : colors.white,
            ...this.props.style
          }}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onTouchTap={() => this.setState({ expanded: true })}
      >
        {this.state.expanded ?
          <div style={{
            padding: '25px 20px 25px 14px'
          }}>
            <Text type="title">
              {this.props.title}
            </Text>
            {this.props.children}
          </div>
          :
          <div style={{
            ...styles.text,
            ...this.props.textStyle
          }}>
            <Text type="body1" style={{ paddingBottom: 14 }}>
              {this.props.title}
            </Text>
            <Text type="caption">
              {this.props.description}
            </Text>
          </div>
        }
      </Paper>
    )
  }
}


ExpandablePanel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  textStyle: PropTypes.object,
  style: PropTypes.object
}

export default enhanceWithClickOutside(ExpandablePanel)
