import type { MouseEventHandler } from "react";

type NavItemProps = {
  href: string;
  label: string;
  active: boolean;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};

function NavItem({ href, label, active, onClick }: NavItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`nav-link-item ${active ? "is-active" : ""}`}
    >
      {label}
    </a>
  );
}

export default NavItem;
