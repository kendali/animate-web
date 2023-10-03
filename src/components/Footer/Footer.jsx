
const Footer = () => {
  return (
    <footer className="b-main">
      <div className="container py-4 d-flex justify-content-between">
        <div className="copyright">
            <i className="fa-solid fa-copyright f-orange"></i>
            <span className="f-white px-2">2023 Origin Kendali</span>
        </div>
        <div className="social d-flex gap-2">
            <a href="https://www.linkedin.com/in/bouchaib-kendali-4b2027218/">
                <i className="fa-brands fa-linkedin f-orange fs-4"></i>
            </a>
            <a href="https://www.instagram.com/moroccandevelper/">
                <i className="fa-brands fa-instagram f-orange fs-4"></i>
            </a>
            <a href="https://www.behance.net/kendali">
                <i className="fa-brands fa-behance f-orange fs-4"></i>
            </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
