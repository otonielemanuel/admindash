import React from 'react'
import * as styles from './styles'
import { AiOutlineSearch, AiOutlineClockCircle } from 'react-icons/ai'

export default function index({ sidebarOpen, openSidebar}) {
  return (
    <>
      <styles.Nav>
        <styles.NavIcon onClick={() => openSidebar()}>
            <styles.IconMenu aria-hidden="true" />
        </styles.NavIcon>

        <styles.NavLeft>
            <a href="#">Produtos</a>
            <a href="#">Usuários</a>
            <a href="#" className="active_link">Admin</a>
        </styles.NavLeft>

        <styles.NavRight>
          {/* 
            <a href="#">
                <AiOutlineSearch />
            </a>

            <a href="#">
                <AiOutlineClockCircle />
            </a> */}

            <a href="#">
                <styles.Avatar src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Avatar" width='40' />
            </a>
        </styles.NavRight>
      </styles.Nav>
    </>
  )
}
