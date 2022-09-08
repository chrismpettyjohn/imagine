import {Link} from 'wouter';
import React, {useState} from 'react';
import {NavDropdownProps} from './NavDropdown.types';

export function NavDropdown({label, links}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(_ => !_);
  }

  return (
    <div className="dropdown">
        <span className="router-link-active router-link-exact-active nav-link px-2 link-secondary dropdown-toggle" onClick={onToggle}>
          {label}
        </span>
        <ul className="dropdown-menu">
          {
            links.map(link => (
              <Link className="dropdown-item" key={`nav_dropdown_${link.href}`} to={link.href}>
                {link.label}
              </Link>
            ))
          }
        </ul>
    </div>
  )
}
