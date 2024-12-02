import { useState } from 'react'
import '../styles/footer.css'
import { KeyboardArrowDown, KeyboardArrowUp} from '@mui/icons-material'

export default function Footer(){
    return(
      <footer className="footer">
        <div className="footer-container"> 
          <FooterSection hander="Features" detail1="Multi-Currency" detail2="Discounts & Taxes" detail3="Easy Card Network" detail4="Contactless Payments"/>
          <FooterSection hander="Industry" detail1="Retail" detail2="Healthcare" detail3="Food and Restaurants" detail4="Professional Services"/>
          <FooterSection hander="Scale" detail1="Startups" detail2="Enterprise" detail3="High-Growth" detail4="Growing Business"/>
          <div className="footer-section">
            <h4>Subscribe to our Newsletter</h4>
            <p>We built for Business of all Shapes and Sizes, SMBs to 1000s</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
              </div>
            </div>
        </div>
      </footer>
    )
}

function FooterSection(props){
  const [dropDown ,setDropDown] = useState(false);

  function ListDrop(){
    setDropDown(!dropDown);
  }
  return(
    <div className="footer-section">
        <div className='listFlex'>
          <h4>{props.hander}</h4>
          {dropDown ? <KeyboardArrowUp className='DropIcons' onClick={ListDrop}/> : <KeyboardArrowDown className='DropIcons' onClick={ListDrop}/>}
        </div>
        {
          dropDown && 
          <ul className='Droplist'>
            <li>{props.detail1}</li>
            <li>{props.detail2}</li>
            <li>{props.detail3}</li>
            <li>{props.detail4}</li>
          </ul>
        }
      <ul className='MainDroplist'>
        <li>{props.detail1}</li>
        <li>{props.detail2}</li>
        <li>{props.detail3}</li>
        <li>{props.detail4}</li>
      </ul>
    </div>
  )
}