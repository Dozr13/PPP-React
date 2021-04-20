import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;

  margin: 1.5rem 0 0 0;
  padding: .5rem calc((100vw - 1300px) / 2);
  z-index: 100;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`


export const Bars = styled(FaBars)`
  display: none;
  
  @media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 1rem;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 10;
    opacity: 1;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`