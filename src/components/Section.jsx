import { ArrowBackIos,ArrowForwardIos, MoreVert, Close, MoreHoriz} from '@mui/icons-material'
import IndividualDetails from '/src/components/Section_Cards/IndividualDetails';
import PlatformDetails from '../components/Section_Cards/PlatformDetails';
import '../styles/section.css';
import { useRef, useState } from 'react';

export default function Section(){
    const [isListMenu,setIsListMenu] = useState(false);

    const toggleList = () =>{
        setIsListMenu(!isListMenu);
    }

    const ListScrollRef = useRef(null);
    const LeftScroll = () => {
        ListScrollRef.current.scrollBy({
            left: -400,
            behavior: 'smooth'
        });
    };
    const RightScroll = () => {
        ListScrollRef.current.scrollBy({
            left: 400,
            behavior: 'smooth'
        })
    }
    return(
        <div className='MainContainer'>
            <aside> 
                <div className="handing">
                    <h1>Our Top Courses</h1>
                    { isListMenu ? <Close className='moreIcon' onClick={toggleList}/> : <MoreVert className='moreIcon' onClick={toggleList}/> }
                    {
                        isListMenu &&
                        <ul className='linksDrop'>
                            <li>Graphic Design</li>
                            <li>Web Design</li>
                            <li>Digital Market</li>
                            <li>Life Style</li>
                        </ul>
                    }
                </div>
                <ul className='links'>
                    <li>Graphic Design</li>
                    <li>Web Design</li>
                    <li>Digital Market</li>
                    <li>Life Style</li>
                </ul>
                <div className='cardsContainer'>
                    <button className='scrollArrow left' onClick={LeftScroll}>
                        <ArrowBackIos  />
                    </button>
                    <div className='CardsList' ref={ListScrollRef}>
                        <IndividualDetails image="/src/images/pic1.jpg" describsion="Advance typography design and illustration" price="$99.9" name="John Doe" rate="4.3" bgImage="/src/images/pic5.jpg"/>
                        <IndividualDetails image="/src/images/pic2.jpg" describsion="Advance typography design and illustration" price="$99.9" name="Jane Doe" rate="4.3" bgImage="/src/images/pic6.jpg"/>
                        <IndividualDetails image="/src/images/pic3.jpg" describsion="Advance typography design and illustration" price="$99.9" name="Chris Doe" rate="4.3" bgImage="/src/images/pic7.jpg"/>
                        <IndividualDetails image="/src/images/pic8.jpg" describsion="Advance typography design and illustration" price="$99.9" name="Peter Hakim" rate="4.3" bgImage="/src/images/pic8.jpg"/>
                    </div>
                    <button className='scrollArrow right' onClick={RightScroll}>
                        <ArrowForwardIos />
                    </button>
                </div>
            </aside>
            <PlatformDetails profile="/src/images/pic8.jpg"/>
        </div>
    )
}