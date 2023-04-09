import { ImgHTMLAttributes } from "react";
import style from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}
export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
  return (
    <div>
      <img
        className={hasBorder ? style.avatarWithBorder : style.avatar}
        {...props}
      />
    </div>
  );
};
