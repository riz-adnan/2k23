import "./input.css";
function Input(props) {
  return (
    <div className="formElement"> 
    <div className="input-data">
      <input
        className="textInput"
        id={props.id}
        name={props.name}
        type={props.type === undefined ? "text" : props.type}
        value ={props.value}
        onChange={props.func}
        placeholder={""}
        required
      />
      <label className="icon">
        <i className={props.icon}></i>
      </label>
      <label htmlFor={props.id}>{props.placeholder}
        
      </label>
      </div>
    </div>
  );
} 
export default Input;