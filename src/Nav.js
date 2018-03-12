import React, { Component } from 'react'
import { Icon, Tooltip, Position } from '@blueprintjs/core'
import './NavStyle.css'

const taskPanelWidth = 300
const navItems = ['Home', 'About', 'Contact']

class TaskPanel extends Component {
  state = {
    expanded: true
  }

  toggleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  renderExpandedContent() {
    return (
      <div style={{ minWidth: taskPanelWidth }}>
        <ul className="nav-list">
          {navItems.map((navItem, i) => {
            return (
              <Tooltip key={i} content={navItem} position={Position.RIGHT}>
                <li className="nav-list-item">{navItem}</li>
              </Tooltip>
            )
          })}
        </ul>
      </div>
    )
  }

  renderCollapsedContent() {
    return (
      <div className="nav-list-collapsed">
        {navItems.map((navItem, i) => {
          return (
            <Tooltip key={i} content={navItem} position={Position.RIGHT}>
              <div className="nav-list-item-collapsed">{i + 1}</div>
            </Tooltip>
          )
        })}
      </div>
    )
  }

  render() {
    const { expanded } = this.state
    return (
      <div
        className="nav-panel"
        style={{
          width: expanded ? taskPanelWidth : 35
        }}
      >
        <Icon
          className="close-nav"
          onClick={this.toggleExpanded}
          icon={expanded ? 'cross' : 'chevron-right'}
          iconSize={Icon.SIZE_LARGE}
        />
        {expanded
          ? this.renderExpandedContent()
          : this.renderCollapsedContent()}
      </div>
    )
  }
}

export default TaskPanel
