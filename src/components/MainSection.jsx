import "../index.css"
import locationIcon from "../assets/location-icon.png"

export default function MainSection(props){
    return(
        <>
        <section className="section-item">
           <img className="section-img" src={props.item.imageURL} alt="" /> 
           <div className="right-side">
             <div className="location-section">
                <img className="location-icon" src={locationIcon} alt="" />
                <p className="location-text">{props.item.location}</p>
                <a className="location-link" href={props.item.mapURL}>View on google maps</a>
             </div>
             <h2 className="name">{props.item.name}</h2>
             <p className="description-heading">Description:</p>
             <p className="description-text">{props.item.description}</p>
           </div>
        </section>
        <hr />
        </>
    )
}