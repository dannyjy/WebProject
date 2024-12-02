import '../styles/article.css';
import { Star } from '@mui/icons-material'

export default function Article(){
    return(
        <div className='ArticleContainer'>
            <div>
                <h1>What Our Students Say</h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non impedit quae aperiam facere, hic error accusamus! Nostrum hic dolorum autem?</p>
            </div>
            <div className='Card3Holder'>
                <div className='childHolder'>
                    <DescriptiveCard bgImg ="/src/images/pic2.jpg" name="Simon Peter"/>
                    <DescriptiveCard bgImg ="/src/images/pic5.jpg" name="Jane Hakim"/>
                    <DescriptiveCard bgImg ="/src/images/pic5.jpg" name="John Doe"/>
                    <DescriptiveCard bgImg ="/src/images/pic5.jpg" name="James Lala"/>
                </div>
            </div>
        </div>
    )
}

function DescriptiveCard(props){
    return(
        <div className='Card3'>
            <div>
                <Star className='starIcon'/>
                <Star className='starIcon'/>
                <Star className='starIcon'/>
                <Star className='starIcon'/>
                <Star className='starIcon'/>
            </div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus cum necessitatibus adipisci, quis eum unde? Libero corrupti repellendus quod adipisci velit tempora culpa voluptatibus, excepturi, ducimus nesciunt quisquam repudiandae modi?
            </div>
            <div>
                <div style={{backgroundImage: `url(${props.bgImg})`}}></div>
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}