import './totalButton.css';
function TotalButton(props){
    return <div className="totalbtn">
        <form>
        <label for ="count">Total: </label>
        <input type="number" name="count" min="0" onChange={props.change} value={props.value} />
        </form>
    </div>
}
export default TotalButton;