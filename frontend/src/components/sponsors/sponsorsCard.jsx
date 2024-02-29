
import "./sponsors.css"


export default function SponsorsCard(props){

  const {logo, companyName} = props 

  return (
    <div className = "text-center cardContainer mb-5">
      <img src = {logo} alt = {companyName} className = "box"/>
      <h1 className = "titleName mt-2">{companyName}</h1>
    </div>
  )
}