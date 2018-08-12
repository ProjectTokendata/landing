import React, { Component } from 'react'
import { Link } from 'gatsby'

import MenuLink from './MenuLink'

import styles from './styles.module.scss'

class Header extends Component {
  // componentWillReceiveProps({ animated }) {
  //   if (!this.header) return null
  //   if (animated) {
  //     this.header.style.transition = 'background ease 0.4s'
  //   } else {
  //     this.header.style.transition = 'none'
  //   }
  //   return null
  // }

  componentDidUpdate() {
    console.log('frkof')
  }

  render() {
    const { color } = this.props

    return (
      <div
        ref={c => (this.header = c)}
        className={color ? styles[color] : styles.header}
        // style={animated ? { transition: 'background ease 0.4s' } : {}}
      >
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <img
              src={
                color === 'black'
                  ? require('../../images/logo-white.svg')
                  : require('../../images/logo.svg')
              }
              alt="logo"
            />
          </Link>
          <div className={styles.links}>
            <MenuLink to="/technology" color={color}>
              Technology
            </MenuLink>
            <MenuLink to="/whitepaper" color={color}>
              Whitepaper
            </MenuLink>
            <MenuLink to="/team" color={color}>
              Team
            </MenuLink>
            <MenuLink to="/blog" color={color}>
              Blog
            </MenuLink>
            <MenuLink to="/social" color={color}>
              Social
            </MenuLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
