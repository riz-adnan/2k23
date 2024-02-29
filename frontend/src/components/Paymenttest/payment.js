import axios from "axios";
const PaymentButton = () => {

    const handlePayment = () => {
        const user={
            name:'saket',
            amount:'9',
            purpose:'Tirutsava',
            email: 'cs20b047@iittp.ac.in',
            redirectUrl: 'https://google.com/',
            phoneNumber: '9014427377'
        }
        axios.post('payment',user)
        .then(res => {
            console.log(res.data)
            window.location.href = res.data
        })

        .catch(err =>{
            console.log(err)
        })
    }
    return ( 
        <div className="payment-btn" style={{background:'red',justifyContent:'center',alignItems:'center',display:'flex',position:'absolute',top:'50vh',left:'45vw'}} onClick={handlePayment}>
            Pay
        </div>
     );
}
 
export default PaymentButton;