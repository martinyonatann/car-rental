'use client'

import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import './ChooseUs.css'
import MainImg from "./main.png";
import Box1 from "./icon1-1.svg";
import Box2 from "./icon2-1.svg";
import Box3 from "./icon3-1.svg";
import Image from "next/image";


function ChooseUs() {
  return (
    <>
      <div className="choose-section">
        <div className="container">
          <div className="choose-container">
            <Image
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Mengapa Harus Kami?</h4>
                <h2>Harga terbaik, layanan terpercaya, pilihan kendaraan lengkap.</h2>
                <p>
                    {
                      `
                      Dapatkan promo terbaik untuk pengalaman sewa yang nyaman dan terjangkau.
                      Layanan top, harga ramah di kantong — yuk, pesan sekarang!
                      `
                    }
                </p>
                <a href="#home">
                  Find Details &nbsp;
                  <IconChevronRight />
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <Image src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Jelajah Tanpa Batas</h4>
                    <p>
                    Dengan kendaraan kami yang prima dan nyaman, kamu bisa berkendara ke luar Jogja dengan tenang dan aman—ke Magelang, Solo, Semarang, bahkan ke luar pulau!
                    Bebas atur rute, bebas petualang!
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <Image src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Harga Sudah Termasuk Semua</h4>
                    <p>
                    Nikmati kemudahan dan transparansi dalam satu harga tanpa biaya tersembunyi.
                    Semua yang Anda butuhkan sudah termasuk dalam kebijakan harga all-in kami—praktis dan tanpa kejutan!
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <Image src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Tanpa Biaya Tersembunyi</h4>
                    <p>
                    Nikmati ketenangan saat menyewa dengan kebijakan harga yang jujur dan transparan.
                    Kami percaya, kejujuran adalah kunci—tak ada biaya tambahan yang mengejutkan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;