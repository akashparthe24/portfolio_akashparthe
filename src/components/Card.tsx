import type { ElementType, ReactNode } from "react";

type CardProps = {
  as?: ElementType;
  className?: string;
  hover?: boolean;
  children?: ReactNode;
  [key: string]: any;
};

function Card({ as: Tag = "article", className = "", hover = true, children, ...props }: CardProps) {
  return (
    <Tag className={`ui-card ${hover ? "ui-card-hover" : ""} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

export default Card;
