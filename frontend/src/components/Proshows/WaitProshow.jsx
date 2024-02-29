import { useEffect } from "react";
import axios from "../../axios.js";

const Pleasewaitproshow = () => {
  const addProShow = async () => {
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var id = url.searchParams.get("payment_id");
    var request_id = url.searchParams.get("payment_request_id");
    let paymentDetails = {
      id: id,
      request_id: request_id,
    };
    let data = JSON.parse(localStorage.getItem("proshowDetails"));
    console.log("Posting get details");
    axios
      .post("/getpaymentdetails", paymentDetails)
      .then(async (res) => {
        console.log("recieved from payment details");
        if (res.data.payment_request.status === ("Completed" || "Sent")) {
          data["paymentStatus"] = "SUCCESS";
          data["paymentId"] = id;
          console.log("Posting add proshow");
          await axios
            .post("addticket", data)
            // await axios.post('http://localhost:8000/merchandise/addmerchandise', data)

            .then(async (res) => {
              if (res.status === 200) {
                console.log("succesfully added purschased user to db");

                // toast.success("Thank you from Team Tirutsava");
                setTimeout(() => {
                  window.location.href = "/proshows";
                }, 3000);
              } else {
                //toast.error("An error occured");
                console.log("in wait proshow else");
                setTimeout(() => {
                  window.location.href = "/proshows";
                }, 3000);
              }
            });
        }
      })

      .catch((err) => {
        console.log("Error occurred in db");
        console.log(err);
        // toast.error("An error occured");

        setTimeout(() => {
          window.location.href = "/proshows";
        }, 3000);
      });
  };
  useEffect(() => {
    addProShow();
  }, []);
  return (
    <div>
      <div>
        <div>Please wait we are processing your request.......</div>
      </div>
    </div>
  );
};

export default Pleasewaitproshow;
