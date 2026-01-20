import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="line-div"  id='contact'> 
      <div className="line"></div>
    </div> 
    <footer>

      <div className="left-footer">
        <div className="div1">
          <h3>follow us</h3> 
          <a href="https://www.instagram.com/eksaathindia/?hl=en" target="_blank" rel="noopener noreferrer">instagram</a>
        </div>
        <div className="div2">
          <h3>contact</h3>
          <span>eksaath@gmail.com</span>
        </div>
          
      </div>
      <div className="right-footer">
      <p>© 2024 EkSath. All rights reserved.</p>
      </div>

    </footer>
    </>
  )
}

export default Footer
