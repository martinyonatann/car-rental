'use client'

import React from 'react'
import './MobileNavbar.css'
import { useState } from 'react';

function MobileNavbar() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
      setNav(!nav);
    };
  return (
    <div>
      <ul className="mobile-navbar__links">
            <li>
              <a onClick={openNav} href="/">
                Beranda
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#about">
                Tentang Kami
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#pick__section">
                Jenis Motor
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#testimonials">
                Testimoni
              </a>
            </li>
          </ul>
    </div>
  )
}

export default MobileNavbar
