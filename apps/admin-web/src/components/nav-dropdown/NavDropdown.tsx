import {Link} from 'wouter';
import React, {useState} from 'react';
import {NavDropdownProps} from './NavDropdown.types';

export function NavDropdown({label, icon, links}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(_ => !_);
  }

  return (
    <li className="nav-item menu-items">
      <a className={`nav-link ${isOpen ? '' : 'collapsed'}`} href="#" onClick={toggleIsOpen}>
        <span className="menu-icon">
          <i className={icon} />
        </span>
        <span className="menu-title">
          {label}
        </span>
        <i className={`fa ${isOpen ? 'fa-caret-down' : 'fa-caret-right'} ml-2`} />
      </a>
      <div className={`collapse ${isOpen ? 'show' : ''}`}>
        <ul className="nav flex-column sub-menu">
          {
            links.map(link => (
              <li className="nav-item" key={`dropdown_link_${link.path}`}>
                <Link className="nav-link" to={link.path}>
                  {link.label}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </li>
  )
}
