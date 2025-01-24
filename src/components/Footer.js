import React from 'react'
import Bk from "../Images/BK.png"

function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderTop: "1px solid #ccc",
          marginTop: "20px",
        }}
      >
        <span>&copy; {currentYear} Elite Athletes</span>
  <div>
    <span>Powered by </span>
    <a href="https://bkemboi.com/" target="_blank" rel="noreferrer"><img 
          src={Bk}
          alt="Elite Athletes Logo"
          style={{ height: "30px" }}
        /></a>
  </div>
      </footer>
    );
  }
 
export default  Footer
