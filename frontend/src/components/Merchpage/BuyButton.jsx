// import { PromiseProvider } from 'mongoose';
import './buyButton.css';
function BuyButton(props){
    return <div>
        <div className="buybutton">
                <button className="bbtn btn btn-outline-light me-3 fs-5 wkm-button" onClick={props.click}>
                  Buy
                </button>
        </div>
    </div>
}
export default BuyButton;