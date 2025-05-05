'use client'

import React, { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import "./Faq.css";
import { ScrollReveal } from "reveal-on-scroll-react"


function Faq() {
  const [activeQ, setActiveQ] = useState(null);

  const toggleQuestion = (id) => {
    if (activeQ === id) {
      setActiveQ(null);
    } else {
      setActiveQ(id);
    }
  };

  return (
    <ScrollReveal.div className="faq-section">
      <div className="container">
        <div className="faq-content">
          <div className="faq-content__title">
            <h5>FAQ</h5>
            <h2>Pertanyaan yang Sering Diajukan</h2>
            <p>
              Temukan jawaban dari pertanyaan umum seputar proses pemesanan dan penyewaan motor
              di The Vroom Vroom Rental Jogja. Kami bantu kamu berkendara tanpa khawatir!
            </p>
          </div>

          <div className="all-questions">
            <div className="faq-box">
              <div
                id="q1"
                onClick={() => toggleQuestion("q1")}
                className={`faq-box__question ${
                  activeQ === "q1" ? "active-question active-background" : ""
                }`}
              >
                <p id="q1__p">1. Kenapa harus sewa motor di The Vroom Vroom Rental?</p>
                <IconChevronDown />
              </div>
              <div
                className={`faq-box__answer ${
                  activeQ === "q1" ? "active-answer" : ""
                }`}
              >
                Kami menyediakan berbagai pilihan motor berkualitas, dari matik hingga motor sport,
                dengan harga terjangkau dan proses pemesanan yang mudah. Lokasi kami strategis di Jogja,
                dan tim kami siap bantu 24/7. Cocok buat kamu yang ingin eksplor Jogja tanpa ribet!
              </div>
            </div>

            <div className="faq-box">
              <div
                id="q2"
                onClick={() => toggleQuestion("q2")}
                className={`faq-box__question ${
                  activeQ === "q2" ? "active-question active-background" : ""
                }`}
              >
                <p id="q2__p">2. Bagaimana cara memesan motor?</p>
                <IconChevronDown />
              </div>
              <div
                className={`faq-box__answer ${
                  activeQ === "q2" ? "active-answer" : ""
                }`}
              >
                Kamu bisa memesan langsung melalui website kami, WhatsApp, atau datang langsung
                ke lokasi. Pilih motor yang kamu inginkan, isi data diri, dan pilih waktu pengambilan.
                Kami juga bisa antar motor ke tempat kamu menginap!
              </div>
            </div>

            <div className="faq-box">
              <div
                id="q3"
                onClick={() => toggleQuestion("q3")}
                className={`faq-box__question ${
                  activeQ === "q3" ? "active-question active-background" : ""
                }`}
              >
                <p id="q3__p">3. Dokumen apa saja yang dibutuhkan untuk sewa motor?</p>
                <IconChevronDown />
              </div>
              <div
                className={`faq-box__answer ${
                  activeQ === "q3" ? "active-answer" : ""
                }`}
              >
                Untuk menyewa motor, kamu cukup menunjukkan KTP dan SIM C yang masih berlaku.
                Jika kamu wisatawan asing, kami menerima paspor dan SIM Internasional.
              </div>
            </div>

            <div className="faq-box">
              <div
                id="q4"
                onClick={() => toggleQuestion("q4")}
                className={`faq-box__question ${
                  activeQ === "q4" ? "active-question active-background" : ""
                }`}
              >
                <p id="q4__p">4. Apakah motor bisa diantar ke hotel atau stasiun?</p>
                <IconChevronDown />
              </div>
              <div
                className={`faq-box__answer ${
                  activeQ === "q4" ? "active-answer" : ""
                }`}
              >
                Tentu saja! Kami menyediakan layanan antar dan jemput motor ke berbagai lokasi di Jogja
                seperti hotel, homestay, stasiun, dan bandara. Cukup beri tahu kami lokasi dan waktunya.
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal.div>
  );
}

export default Faq;