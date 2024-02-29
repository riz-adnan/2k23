import React, {useState } from "react";
import axios from '../../axios';
import BuyButton from "./BuyButton.jsx";
import SizeButton from "./SizeButton.jsx";
import TotalButton from "./TotalButton.jsx";
import MerchCarousel from "./MerchCarousel.jsx";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useHistory } from "react-router-dom";

import "./merchitem.css";
export default function Merchitem(props) {
    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [paymentid, setPaymentid] = useState('');
    const merchNames = [
      "Tirutsava Black T-shirt",
      "Tirutsava White T-shirt",
      "Tirutsava Hoodie",
    ];
    const merchPrices=[349,349,649]
    const sizes=["XS","S","M","L","XL","XXL"]
    const [selectBtn, setSelectBtn] = useState(-1);
    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const handleSize = (e) => {
        if(e.target.name === "XS"){
            setSelectBtn(0);
        }
        else if(e.target.name=="S"){
            setSelectBtn(1);
        }
        else if(e.target.name=="M"){
            setSelectBtn(2);
        }
        else if(e.target.name=="L"){
            setSelectBtn(3);
        }
        else if(e.target.name=="XL"){
            setSelectBtn(4);
        }
        else if(e.target.name=="XXL"){
            setSelectBtn(5);
        }
        setSize(e.target.name);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(localStorage.getItem("username")){
        if(selectBtn>-1 && quantity>0){
        console.log("Handling submit in merchanidse")
        // Payment
        const user = {email: localStorage.getItem("username")};
        console.log("User",user)
        console.log("Fetched user email")
        const totalPrice = merchPrices[props.id] * quantity; // gotta change - add deducted amount going to Instamojo
       const userDetailsResp = await axios.post('userdetails', user).then((response) => response.data).catch(function (error) {
           console.log(error.response);
         });
        // const userDetailsResp="Adhoc"
        console.log("User Response",userDetailsResp, totalPrice, size);
        const data = {
          name: userDetailsResp[0].name,
          email: localStorage.getItem("username"),
          phoneNumber: userDetailsResp[0].phone_number,
          merchandise: merchNames[props.id],
          size: sizes[selectBtn],
          quantity: quantity,
          amount: totalPrice,
        };
        console.log("Local storage data",data)
        console.log("Size of the product",data.size)
        localStorage.setItem("merchandiseDetails", JSON.stringify(data));
        const instamojodata = {
          name: userDetailsResp[0].name,
          phoneNumber: userDetailsResp[0].phone_number,
          amount: totalPrice,
          email: localStorage.getItem("username"),
          merchandise: merchNames[props.id],
          size: sizes[selectBtn],
          quantity: quantity,
          purpose:
            "Merchandise Purchase " +
            quantity.toString() +
            " " +
            sizes[selectBtn] +
            " " +
            merchNames[props.id],
          redirectUrl: "https://www.tirutsava.org/waitmerch",
        };

         axios.post('merchpayment', instamojodata).then((res)=>{
            const payReq = res;
            const redirectUrl = payReq.data.redirectUrl;
            const requestId = payReq.data.requestId;
            console.log("Payment successful")
            console.log(res, redirectUrl, requestId);
            console.log("Redirecting");
            
            NotificationManager.info(
              "Please do not close the payment page we will redirect you automatically"
            );
            setTimeout(() => {
              const newTab = window.open(redirectUrl,"_blank");
              newTab.focus();
            }, 3000);
            
            console.log("hello")
            
         }
         ).catch(err=>{
            console.log(err);
            //toast.error("An error occured");
            setTimeout(() => {
              window.location.href = "/merchandise";
            }, 6000);
         });
        }
        else{
          NotificationManager.error("Please make sure you select size and quantity properly")
        }
        }
        else{
          window.location.href = "/login";
        }
    }

    return (
      <>
        <div className="container merch-card container text-center">
          <div className="row d-flex">
            <div className="col-sm">
              {/* <img src={props.imgSource} alt="tshirt" className="merch-image" /> */}
              <MerchCarousel images={props.images} />

              {/* <img src={props.imgSource} alt="tshirt" className="merch-image" /> */}
            </div>

            <div className="col-sm merch-details">
              <h1 className="merch-name">{props.name}</h1>
              <h6 className="price">{"₹" + props.price}/-</h6>
              <hr />
              <div className="d-flex justify-content-evenly">
                <h3>Select Size</h3>
                <div>
                  <SizeButton
                    name="XS"
                    click={handleSize}
                    styles={
                      selectBtn == 0
                        ? {
                            border: "1px solid #FFFFFF",
                            boxShadow: "0px 0px 10px #FFFFFF",
                          }
                        : {}
                    }
                  />
                </div>
                <div>
                  <SizeButton
                    name="S"
                    click={handleSize}
                    styles={
                      selectBtn == 1
                        ? {
                            border: "1px solid #FFFFFF",
                            boxShadow: "0px 0px 10px #FFFFFF",
                          }
                        : {}
                    }
                  />
                </div>
                <div>
                  <SizeButton
                    name="M"
                    click={handleSize}
                    styles={
                      selectBtn == 2
                        ? {
                            border: "1px solid #FFFFFF",
                            boxShadow: "0px 0px 10px #FFFFFF",
                          }
                        : {}
                    }
                  />
                </div>
                <div>
                  <SizeButton
                    name="L"
                    click={handleSize}
                    styles={
                      selectBtn == 3
                        ? {
                            border: "1px solid #FFFFFF",
                            boxShadow: "0px 0px 10px #FFFFFF",
                          }
                        : {}
                    }
                  />
                </div>
                <div>
                  <SizeButton
                    name="XL"
                    click={handleSize}
                    styles={
                      selectBtn == 4
                        ? {
                            border: "1px solid #FFFFFF",
                            boxShadow: "0px 0px 10px #FFFFFF",
                          }
                        : {}
                    }
                  />
                </div>
                <div>
                  <SizeButton
                    name="XXL"
                    click={handleSize}
                    styles={
                      selectBtn == 5
                        ? {
                            border: "1px solid #FFFFFF",
                            boxShadow: "0px 0px 10px #FFFFFF",
                          }
                        : {}
                    }
                  />
                </div>
              </div>
              <div class="w-100"></div>
              <div className="d-flex justify-content-evenly buy-quant">
                <div>
                  <TotalButton value={quantity} change={handleQuantity} />
                </div>
                <div>
                  <BuyButton click={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <NotificationContainer />
      </>
    );
}