import React from "react";
import './Footer.css'

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>The Vroom Vroom</span> Rental
              </li>
              <li>
              Kami menawarkan berbagai jenis kendaraan untuk memenuhi semua kebutuhan berkendara Anda. Kami memiliki motor yang sempurna sesuai kebutuhan Anda.
              </li>
              <li>
                <a href="https://wa.link/ldm4va">
                   &nbsp; Whatsapp : +6281368380270
                </a>
              </li>

              <li>
                <a
                  href="/ 
                "
                >
                  &nbsp; Email : vroomvroom@gmail.com
                </a>
              </li>
            </ul>
            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Beranda</a>
              </li>
              <li>
                <a href="#about">Tentang Kami</a>
              </li>
              <li>
                <a href="#pick__section">Jenis Motor</a>
              </li>
              <li>
                <a href="#testimonials">Testimoni</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Senin - Jumat : 06:00 - 22:00 WIB</li>
              <li>Sabtu - Minggu: 06:00 - 24:00 WIB</li>
            </ul>

            <ul className="footer-content__2">
              <li>Lokasi Kami</li>
              <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7191395886803!2d110.35485567500531!3d-7.819524192201192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5795b88702eb%3A0x3fd9000f17f60323!2sBring%20In%20House%20Yogyakarta!5e0!3m2!1sen!2sid!4v1746468322843!5m2!1sen!2sid"
                    width="100%"
                    height="95%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;