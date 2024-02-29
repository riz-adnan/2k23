import "./sizeButton.css";

function SizeButton(props){
    let styles ={};
    styles['backgroundColor'] ='black';
    return <div>
        <button className ="butn" name={props.name} onClick={props.click} style = {props.styles} >{props.name}</button>
    </div> 
}
export default SizeButton;