import React from "react";
import classes from "./Tag.module.scss";
type TagType = {
  id: number;
  tag: string;
  onClick: () => void;
  active?: number;
};

const Tag = ({ id, tag, onClick, active = 0 }: TagType) => {
  return (
    <span
      id={`${id}__blog__tag`}
      className={[classes.tag, id === active && classes.active].join(" ")}
      onClick={onClick}
    >
      #{tag}
    </span>
  );
};

export default Tag;
