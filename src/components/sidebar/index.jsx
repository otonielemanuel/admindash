import React from 'react'
import * as styles from './styles'
import Logo from '../../assets/react.svg'
import { AiFillHome } from 'react-icons/ai'
import { MdOutlineComputer } from 'react-icons/md'
import { BiCategoryAlt, BiLogOut } from 'react-icons/bi'
import { RiMoneyEuroBoxFill } from 'react-icons/ri'
import { BsFillBagCheckFill, BsFillCartFill } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { FaUserCog } from 'react-icons/fa'
import { ImUserTie } from 'react-icons/im'
import { IoIosPerson } from 'react-icons/io'

export default function index({ sidebarOpen, closeSidebar }) {
  return (
    <>
      <styles.IdSidebar className={sidebarOpen ? 'sidebar-responsive' : ''} id='sidebar'>
        <styles.TitleSidebar>
            <styles.ImageSidebar>
                <styles.ImgLogo src={Logo} alt="Foto de perfil" />
                <styles.H1>Dashboard React</styles.H1>
            </styles.ImageSidebar>

            <styles.CloseIcon 
            onClick={() => closeSidebar()}
            id='sidebarIcon'
            aria-hidden='true'
            />
            <styles.MenuSidebar>

                <styles.LinkSidebar className="active_menu_link">
                    <AiFillHome />
                    <styles.ALink href="#" className="active_menu_link">Home</styles.ALink>
                </styles.LinkSidebar>

                <styles.LinkSidebar>
                    <MdOutlineComputer />
                    <styles.ALink href="#">
                        Pailnel administrativo
                    </styles.ALink>
                </styles.LinkSidebar>

                <styles.LinkSidebar>
                    <BsFillCartFill />
                    <styles.ALink href="#">
                        Produtos
                    </styles.ALink>
                </styles.LinkSidebar>

                <styles.LinkSidebar>
                    <BiCategoryAlt />
                    <styles.ALink href="#">
                        Categorias
                    </styles.ALink>
                </styles.LinkSidebar>

                <styles.LinkSidebar>
                    <BsFillBagCheckFill />
                    <styles.ALink href="#">
                        Pedidos
                    </styles.ALink>
                </styles.LinkSidebar>

                <styles.LinkSidebar>
                    <RiMoneyEuroBoxFill />
                    <styles.ALink href="#">
                        Finanças
                    </styles.ALink>
                </styles.LinkSidebar>

                <styles.H2>PESSOAS</styles.H2>

                <styles.LinkSidebar>
                    <ImUserTie />
                    <styles.ALink href="#">
                        Administradores
                    </styles.ALink>
                </styles.LinkSidebar>

                <styles.LinkSidebar>
                    <FaUserCog />
                    <styles.ALink href="#">
                        Funcionários
                    </styles.ALink>
                </styles.LinkSidebar>

                <styles.LinkSidebar>
                    <IoIosPerson />
                    <styles.ALink href="#">
                        Clientes
                    </styles.ALink>
                </styles.LinkSidebar>

                <styles.LinkSidebar>
                    <HiUserGroup />
                    <styles.ALink href="#">
                        Terceiros
                    </styles.ALink>
                </styles.LinkSidebar>

                <br />

                <styles.LinkSidebar>
                    <BiLogOut />
                    <styles.ALink href="#">
                        Terminar sessão
                    </styles.ALink>
                </styles.LinkSidebar>

            </styles.MenuSidebar>
        </styles.TitleSidebar>
      </styles.IdSidebar>
    </>
  )
}
