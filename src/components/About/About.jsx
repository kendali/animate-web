

const About = () => {
  return (
    <section className="about b-main">
      <div className="container">
        <div className="row align-items-center justify-content-center py-2">
            <div className="col-md-6 text-center">
                <img className="img-fluid rounded-2" src="https://img.freepik.com/free-photo/owl-bird-colorful-flowers-generative-ai_206725-745.jpg?w=360&t=st=1696335548~exp=1696336148~hmac=4cb7d72213250d41d86647d15e5ff69f0bbe0e0b7ceb821290ab14f622f29d85" alt="" />
                <h4 className="f-orange py-4 display-5 fw-medium">Anime Fly</h4>
            </div>
            <div className="col-md-6 p-5 d-flex flex-column m-auto align-items-start gap-3">
                <div className="about-image text-center">
                    <img width={300} src="https://img.freepik.com/free-photo/background-gradient-lights_23-2149304969.jpg?w=360&t=st=1696334043~exp=1696334643~hmac=81e70a8ed8243e6e2f65ca8910f749a71b206cb26c7713ec39e596c0d5f299d1" alt="About Image" />
                </div>
                <div className="about-text">
                    <h4 className="f-white display-4">ABOUT <br /> US</h4>
                </div>
                <hr  className="f-orange w-100"/>
                <div className="about-description">
                    <p className="lead f-white">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas architecto, beatae voluptatem reprehenderit aliquid itaque!
                    </p>
                </div>
                <div className="about-button">
                    <div className="learn-more">
                        <a href="#" className="myBtn f-white">
                            LEARN MORE
                        </a>
                        <i className="fa-solid fa-chevron-right f-orange px-3"></i>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
