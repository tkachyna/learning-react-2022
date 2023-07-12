import location_img from '../images/location.png'

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.imageUrl} className="card--image"/>
            <div className="card--text">
                <div className="location">
                    <img className="location--image" src={location_img} />
                    <h3 className="location--name">{props.location}</h3>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
            
        </div>
    )
}