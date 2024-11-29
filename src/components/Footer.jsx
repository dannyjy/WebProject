import '../styles/footer.css'

export default function Footer(){
    return(
        <div>
             <footer className="footer">
      <div className="footer-container">  
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li>Contactless Payments</li>
            <li>Easy Card Network</li>
            <li>Multi-Currency</li>
            <li>Discounts & Taxes</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Industry</h4>
          <ul>
            <li>Retail</li>
            <li>Food and Restaurants</li>
            <li>Professional Services</li>
            <li>Healthcare</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Scale</h4>
          <ul>
            <li>Growing Business</li>
            <li>Startups</li>
            <li>Enterprise</li>
            <li>High-Growth</li>
          </ul>
        </div>

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
            
        </div>
    )
}