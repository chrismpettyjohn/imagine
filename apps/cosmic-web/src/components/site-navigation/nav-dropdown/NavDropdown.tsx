import {Link} from 'wouter';
import React, {useState} from 'react';
import {NavDropdownProps} from './NavDropdown.types';

export function NavDropdown({label, links}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(_ => !_);
  }

  const onBlur = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  }

  return (
    <div className="dropdown">
        <a className="router-link-active router-link-exact-active nav-link px-2 link-secondary dropdown-toggle" onClick={onToggle} href="#" onBlur={onBlur}>
          {label}
        </a>
        <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
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
