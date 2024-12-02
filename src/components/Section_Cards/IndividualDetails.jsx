import { Star } from '@mui/icons-material'
import '/src/styles/IndividualDetails.css'

const IndividualDetails = (props) =>{
    return(
        <div className='Card1'>
            <div>
                <img src={props.image} alt=""/>
            </div>
            <div>
                <h2>{props.describsion}</h2>
                <p>{props.price}</p>
            </div>
            <div>
                <aside>
                    <div style={{backgroundImage: `url(${props.bgImage})`}}></div>
                    <h3>{props.name}</h3>
                </aside>
                <aside>
                    <div><Star className='starIcon'/></div>
                    <p>{props.rate}</p>
                </aside>
            </div>
        </div>
    )
}

export default  IndividualDetails;