'use client'

import React from "react";
import { IconQuote } from "@tabler/icons-react";
import './Testimonials.css'
import Img2 from "./pfp1.jpg"; 
import Img3 from "./pfp2.jpg";
import Image from "next/image";
import { ScrollReveal } from "reveal-on-scroll-react"

function Testimonials() {
  return (
    <>
      <ScrollReveal.div className="testimonials-section">
        <div id="testimonials" className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Ulasan dari Pelanggan</h4>
              <h2>{`Testimoni Pelanggan`}</h2>
              <p>
                  {
                    `Temukan dampak positif yang telah kami berikan kepada para Pelanggan kami melalui testimoni mereka. 
                     Pelanggan kami telah merasakan layanan dan hasil kerja kami, 
                     dan mereka antusias membagikan pengalaman positif mereka kepada Anda
                    `
                  }
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                {
                    `
                    "We rented a motorcycle from this website and had an amazing
                    experience! The booking was easy and the rental rates were
                    very affordable. "
                    `
                }
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <Image src={Img2} alt="user_img" />
                    <span>
                      <h4>Parry Hotter</h4>
                      <p>Depok</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                {
                    `
                    "The bike was in great condition and made our trip even better.
                    Highly recommend for this motorcycle rental website!"
                    `
                }
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <Image src={Img3} alt="user_img" />
                    <span>
                      <h4>Ron Rizzly</h4>
                      <p>Medan</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal.div>
    </>
  );
}

export default Testimonials;