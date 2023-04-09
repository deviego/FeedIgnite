import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../avatar/Avatar";

import style from "./Comment.module.css";



interface CommentProps {
  content:string;
  onDeleteComment: (comment:string) => void
}

export const Comment = ({ content, onDeleteComment }:CommentProps) => {

  const [likeComment, setLikeComment] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeComment((state) => {
      return state +1
    })
  }

  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://github.com/deviego.png" alt="" />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Deviego</strong>
              <time title="11 de fevereiro as 08:30" dateTime="2023-02-11">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            aplaudir <span>{likeComment}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
