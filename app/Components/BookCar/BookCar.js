"use client";

import { useEffect, useState, memo } from "react";
import CarAudi from "../images/audia1.jpg";
import CarGolf from "../images/golf6.jpg";
import CarToyota from "../images/toyotacamry.jpg";
import CarBmw from "../images/bmw320.jpg";
import CarMercedes from "../images/benz.jpg";
import CarPassat from "../images/passatcc.jpg";
import { IconCar, IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import "./BookCar.css";
import Image from "next/image";

function BookCar() {
  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [pickHour, setPickHour] = useState("");
  const [dropHour, setDropHour] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  const [ageError, setAgeError] = useState(""); 
  const handleAge = (e) => {
    const newAge = e.target.value;
    setAge(newAge);

 
    if (newAge && newAge < 18) {
      setAgeError("The age is too low");
    } else {
      setAgeError("");
    }
  };

  const confirmBooking = (e) => {
    e.preventDefault();
  
    // Validation: Ensure all required fields are filled
    if (!pickUp || !dropOff || !pickTime || !dropTime || !pickHour || !dropHour) {
      alert("Please fill in all the required fields.");
      return;
    }
  
    // Format waktu ke 24 jam tanpa AM/PM
    const formatTime = (timeString) => {
      const [hours, minutes] = timeString.split(':');
      return `${hours}:${minutes}`;
    };
  
    // Membuat pesan untuk WhatsApp
    const message = `Halo The Vroom Vroom Rental Motor Jogja, saya ingin memesan motor:
      - Tipe Motor: ${carType}
      - Lokasi Antar: ${pickUp}
      - Lokasi Jemput: ${dropOff}
      - Tanggal Antar: ${pickTime} (${formatTime(pickHour)})
      - Tanggal Jemput: ${dropTime} (${formatTime(dropHour)})
  
      Mohon konfirmasi ketersediaan. Terima kasih.`;
  
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    
    // Nomor WhatsApp admin (ganti dengan nomor yang sebenarnya)
    const phoneNumber = "6281368380270"; // Format: kode negara tanpa '+' diikuti nomor
    
    // URL WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
    
    // Set timeout to give user a chance to see the confirmation message before opening WhatsApp
    setTimeout(() => {
      // Buka WhatsApp di tab baru
      window.open(whatsappURL, "_blank");
      
      // Setelah sedikit delay, reload halaman
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, 2000); // 2 seconds delay before opening WhatsApp
  };

  // Handle time inputs
  const handlePickHour = (e) => {
    setPickHour(e.target.value);
  };

  const handleDropHour = (e) => {
    setDropHour(e.target.value);
  };

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
/*
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  */

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // CSS style untuk disabled message dapat juga ditambahkan ke file CSS
  useEffect(() => {
    // Menambahkan style untuk disabled message jika belum ada
    if (!document.getElementById('disabled-button-styles')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'disabled-button-styles';
      styleSheet.textContent = `
        .disabled-message {
          display: none;
        }
        
        .reserve-button-container:hover .disabled-message {
          display: block;
          animation: fadeIn 0.3s;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "Yamaha Fino":
      imgUrl = CarAudi;
      break;
    case "Yamaha Fazzio":
      imgUrl = CarGolf;
      break;
    case "Yamaha Nmax":
      imgUrl = CarToyota;
      break;
    case "Honda Scoopy":
      imgUrl = CarBmw;
      break;
    case "Honda Beat":
      imgUrl = CarMercedes;
      break;
    case "Honda Vario":
      imgUrl = CarPassat;
      break;
    default:
      imgUrl = "";
  }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Pesan Motor</h2>

              <p className="error-message">
                All fields required! <IconX width={20} height={20} />
              </p>

              <p className="booking-done">
                Silahkan lanjutkan pemesanan melalui whatsapp.{" "}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <IconCar className="input-icon" /> &nbsp; Pilih Tipe Motor <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>pilih jenis motor </option>
                    <option value="Yamaha Fino">Yamaha Fino</option>
                    <option value="Yamaha Fazzio">Yamaha Fazzio</option>
                    <option value="Yamaha Nmax">Yamaha Nmax</option>
                    <option value="Honda Scoopy">Honda Scoopy</option>
                    <option value="Honda Beat">Honda Beat</option>
                    <option value="Honda Vario">Honda Vario</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Lokasi Antar{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>pilih lokasi antar</option>
                    <option>Stasiun Lempuyangan</option>
                    <option>Stasiun Tugu</option>
                    <option>Jl. Prawirotaman</option>
                    <option>Malioboro</option>
                    <option>Tugu Yogyakarta</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Lokasi Jemput{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>pilih lokasi jemput</option>
                    <option>Stasiun Lempuyangan</option>
                    <option>Stasiun Tugu</option>
                    <option>Jl. Prawirotaman</option>
                    <option>Malioboro</option>
                    <option>Tugu Yogyakarta</option>
                  </select>
                </div>
                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Dari Tanggal{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Sampai Tanggal{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={openModal} type="submit">
                  Cari
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Pemesanan</h2>
          <IconX onClick={openModal} />
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <IconInfoCircleFilled /> Setelah klik tombol pesan,
            Anda akan dialihkan ke WhatsApp Admin.
          </h4>
          <p>Silakan lanjutkan percakapan untuk menyelesaikan pemesanan kendaraan Anda.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
              <div className="booking-modal__car-info__dates">
                <h5>Location & Date</h5>
                <span>
                  <IconMapPinFilled />
                  <div>
                    <h6>Pick-Up Date & Time</h6>
                    <p>
                      {pickTime} /{" "}
                      <input 
                        type="time" 
                        className="input-time" 
                        required 
                        value={pickHour}
                        onChange={handlePickHour}
                      />
                    </p>
                  </div>
                </span>
              </div>
              <div className="booking-modal__car-info__dates">
                <span>
                  <IconMapPinFilled />
                  <div>
                    <h6>Drop-Off Date & Time</h6>
                    <p>
                      {dropTime} /{" "}
                      <input 
                        type="time" 
                        className="input-time" 
                        required 
                        value={dropHour}
                        onChange={handleDropHour}
                      />
                    </p>
                  </div>
                </span>
              </div>
            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>
            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Motor -</span> {carType}
            </h5>
            {imgUrl && <Image src={imgUrl} alt="car_img" />}
          </div>
          <br></br>
          <br></br>
          <div className="reserve-button-container" style={{ position: 'relative' }}>
            <button 
              className="reserve-button" 
              onClick={confirmBooking} 
              disabled={pickTime === "" || dropTime === "" || pickHour === "" || dropHour === ""}
              title={pickTime === "" || dropTime === "" || pickHour === "" || dropHour === "" ? 
                "Harap lengkapi tanggal dan waktu pemesanan terlebih dahulu" : ""}
            >
              Reserve Now
            </button>
            {(pickTime === "" || dropTime === "" || pickHour === "" || dropHour === "") && (
              <div 
                className="disabled-message"
                style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  fontSize: '14px',
                  whiteSpace: 'nowrap'
                }}
              >
                Harap lengkapi tanggal dan waktu pemesanan
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(BookCar);