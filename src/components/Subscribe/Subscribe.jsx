
const Subscribe = () => {
  return (
    <section className="subscribe b-main">
      <div className="container py-5 d-flex flex-column justify-content-center gap-3">
        <div className="text text-center">
            <h5 className="f-white fs-2 fw-medium">Subscribe to our <br /> newsletter</h5>
        </div>
        <div className="input px-1 py-3 bg-dark rounded-pill m-auto">
            <input type="text" className="input bg-dark f-white px-3" placeholder="Enter your email"/>
            <a href="" className="myBtn b-orange px-5 py-3 fw-medium rounded-pill f-main">Sign up</a>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
