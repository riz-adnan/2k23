import React, { useState, useEffect } from "react";
import Card from "./card";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import "./proshows.css";
import nikhita from "./nikhita_gandhi.png";
import nina from "./nina_suerte.png";
import kannan from "./kannan.png";

export default function Proshows() {
  const [count, setCount] = useState(0);
  const [showSmallBookNow, setShowSmallBookNow] = useState(false);
  const ticketPrice = 399
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (localStorage.getItem("username")) {
      if (count > 0) {
        console.log("Handling submit in proshow");
        // Payment
        const user = { email: localStorage.getItem("username") };
        console.log("User", user);
        console.log("Fetched user email");
        const totalPrice = ticketPrice * count; // gotta change - add deducted amount going to Instamojo
        const userDetailsResp = await axios
          .post("userdetails", user)
          .then((response) => response.data)
          .catch(function (error) {
            console.log(error.response);
          });
        // const userDetailsResp="Adhoc"
        console.log("User Response", userDetailsResp, totalPrice);
        const data = {
          name: userDetailsResp[0].name,
          email: localStorage.getItem("username"),
          phoneNumber: userDetailsResp[0].phone_number,
          quantity: count,
          amount: totalPrice,
        };
        console.log("Local storage data", data);
        console.log("Size of the product", data.size);
        localStorage.setItem("proshowDetails", JSON.stringify(data));
        const instamojodata = {
          name: userDetailsResp[0].name,
          phoneNumber: userDetailsResp[0].phone_number,
          amount: totalPrice,
          email: localStorage.getItem("username"),
          quantity: count,
          purpose:
            "Proshow Ticket Purchase " +
            count.toString() +
            " tickets",
          redirectUrl: "https://tirutsava.org/waitproshow",
        };

        axios
          .post("proshowpayment", instamojodata)
          .then((res) => {
            const payReq = res;
            const redirectUrl = payReq.data.redirectUrl;
            const requestId = payReq.data.requestId;
            console.log("Payment successful");
            console.log(res, redirectUrl, requestId);
            console.log("Redirecting");

            NotificationManager.info(
              "Please do not close the payment page we will redirect you automatically"
            );
            setTimeout(() => {
              const newTab = window.open(redirectUrl, "_blank");
              newTab.focus();
            }, 3000);

            console.log("hello");
          })
          .catch((err) => {
            console.log(err);
            //toast.error("An error occured");
            setTimeout(() => {
              window.location.href = "/proshows";
            }, 6000);
          });
      } else {
        NotificationManager.error(
          "Please make sure you select size and quantity properly"
        );
      }
    } else {
      window.location.href = "/login";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const bigButton = document.querySelector(".pr-book");
      const bigButtonRect = bigButton.getBoundingClientRect();
      const topOfBigButton = bigButtonRect.top + window.pageYOffset;
      if (window.pageYOffset > topOfBigButton) {
        setShowSmallBookNow(true);
      } else {
        setShowSmallBookNow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pr-app">
      <div className="pr-main">
        <h1 className="pr-title">PRO SHOWS</h1>
      </div>


      <div className="pr-booking">
        <div className="pr-counter">
          <p className="counter-title">Tickets: </p>
          <div className="counter-show">{count}</div>
          <div className="inc-dec-buttons">
            <FontAwesomeIcon icon={faCaretUp} onClick={increment} />
            <FontAwesomeIcon icon={faCaretDown} onClick={decrement} />
          </div>
        </div>
        <button className="pr-book" onClick={handleSubmit}>BOOK NOW</button>
        <div className="pr-price">Price - ₹399</div>
      </div>
      <div className="pr-cards">
        {showSmallBookNow && (
          <div className="pr-small-booking small" >
            <div className="pr-counter">
              <p className="counter-title">Tickets: </p>
              <div className="counter-show">{count}</div>
              <div className="inc-dec-buttons">
                <FontAwesomeIcon icon={faCaretUp} onClick={increment} />
                <FontAwesomeIcon icon={faCaretDown} onClick={decrement} />
              </div>
            </div>
            <button className="pr-book small" onClick={handleSubmit}>BOOK NOW</button>
          </div>
        )}
        <Card imgSrc={nikhita}
          desc="Get ready to be mesmerized by the soulful voice of Nikita Gandhi! 🎤🎶 This talented singer and songwriter is all set to perform at Tirutsava 2k23, and we couldn't be more excited. Nikita gained nationwide fame after winning MasterChef India in 2015, and has since become a sought-after playback singer in Bollywood, lending her voice to popular songs like 'Ladio' and 'Qaafirana.' Her passion for music is evident in every note she sings, and her performances are truly unforgettable. Don't miss this chance to experience the magic of Nikita's voice live!"
          date="1 APRIL 2023"
          time="6 PM" />
        <Card imgSrc={nina}
          desc="Meet Nina Suerte, the Polish DJ who's taking the electronic music scene by storm with her infectious beats and groovy tunes. With her signature blend of house, techno, and disco, Nina knows how to get the party started and keep the dance floor moving. From music festivals to radio shows, she's been sharing her love of music with audiences around the world. Let her beats transport you to another dimension at Tirutsava 2k23!"
          date="2 APRIL 2023"
          time="6 PM" />
        <Card imgSrc={kannan}
          desc="Meet Dr Kannan, a mentalist with a remarkable aptitude for unlocking the secrets of magic and the mind. A doctor by profession, and a veteran of several mentalist shows at educational and corporate institutions, and even a TED Talk, he combines his medical knowledge with his mentalist techniques to create performances that leave audiences spellbound. Experience Dr Kannan's mind-bending illusions and discover the mysteries of the mind first hand at Tirutsava 2k23!"
          date="2 APRIL 2023"
          time="6 - 7 PM" />
      </div>
    </div>
  );
}
