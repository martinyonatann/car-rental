'use client'

import SelectCar from "./icon1.svg";
import Contact from "./icon2.svg";
import Drive from "./icon3.svg";
import Image from "next/image";
import "./PlanTrip.css";
import { ScrollReveal } from "reveal-on-scroll-react"


function PlanTrip() {
  return (
    <>
      <section className="plan-section" id="about">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <ScrollReveal.h3>Rencanakan Perjalananmu Sekarang</ScrollReveal.h3>
              <ScrollReveal.h2>Sewa Motor Cepat &amp; Mudah</ScrollReveal.h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <Image src={SelectCar} alt="icon_img" loading="lazy" />
                <ScrollReveal.h3>Pilih Motor</ScrollReveal.h3>
                <ScrollReveal.p>
                  Kami menawarkan berbagai pilihan motor untuk semua kebutuhan perjalanan Anda. 
                  Temukan motor yang sempurna untuk menemani petualangan Anda.
                </ScrollReveal.p>
              </div>

              <div className="plan-container__boxes__box">
                <Image src={Contact} alt="icon_img" loading="lazy" />
                <ScrollReveal.h3>Hubungi Operator</ScrollReveal.h3>
                <ScrollReveal.p>
                  Operator kami yang berpengetahuan dan ramah siap membantu dengan segala pertanyaan atau kekhawatiran Anda.
                </ScrollReveal.p>
              </div>

              <div className="plan-container__boxes__box">
                <Image src={Drive} alt="icon_img" loading="lazy" />
                <ScrollReveal.h3>{`Saatnya Berkendara`}</ScrollReveal.h3>
                <ScrollReveal.p>
                  {`
                  Apapun tujuan perjalanan Anda, kami siap menemani dengan berbagai pilihan motor yang kami tawarkan.
                `}
                </ScrollReveal.p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
