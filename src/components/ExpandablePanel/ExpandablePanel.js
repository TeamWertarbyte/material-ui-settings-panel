import React, { Component, PropTypes } from 'react'
import { IconButton, Paper } from 'material-ui'
import * as colors from 'material-ui/styles/colors'
import onClickOutside from 'react-onclickoutside'
import Text from '../SettingsPanel/Text'

const styles = {
  root: {
    padding: '25px 50px'
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

  handleClickOutside(evt) {
    console.log(evt)
    this.setState({ expanded: false })
  }

  render() {
    return (
      <Paper
        style={this.state.expanded ? {
            margin: '40px -20px'
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
          <div>
            <div style={{
              padding: '16px 20px'
            }}>
              <Text type="title">
                {this.props.title}
              </Text>
            </div>
            {this.props.children}
          </div>
          :
          <div style={{
            ...styles.text,
            ...this.props.textStyle
          }}>
            <Text type="body1">
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

export default onClickOutside(ExpandablePanel)
