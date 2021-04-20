import React from 'react'
import {ReactComponent as Logo} from '../../../Img/logo-stamp.svg';
import {TopbarContainer, Icon, CloseIcon, TopbarWrapper, TopbarMenu, TopbarLink} from './TopbarEl'

const Topbar = ({isOpen, toggle}) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle }>
      <TopbarLink className='nav-logo' to='/'>
        <Logo alt='Brand Logo' />
      </TopbarLink>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink to='/'>Home</TopbarLink>
          <TopbarLink to='/about'>About</TopbarLink>
          <TopbarLink to='/projects'>Projects</TopbarLink>
          <TopbarLink to='/contact'>Contact</TopbarLink>
        </TopbarMenu>
      </TopbarWrapper>
    </TopbarContainer>
  )
}

export default Topbar
