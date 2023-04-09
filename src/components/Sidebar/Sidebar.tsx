import style from "./Sidebar.module.css"
import {PencilLine} from "phosphor-react"
import { Avatar } from "../avatar/Avatar"

export const Sidebar = () => {
  return (
    <>
      <aside className={style.sidebar}>
        <img className={style.cover} src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />

        <div className={style.profile}>
          <Avatar 
          src="https://github.com/deviego.png"
          />
          <strong>Diego Domingues</strong>
          <span>Full-stack Developer</span>
        </div>

        <footer className={style.footer}>
          
          <a><PencilLine size={20}/> Editar perfil</a>
        </footer>
      </aside>
       

    </>
  )
}