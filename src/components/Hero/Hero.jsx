

const Hero = () => {
    return (
        <div className="container mt-5">
            <div className="row py-5">
                <div className="col-md-6 d-flex flex-column gap-4">
                    <div className="header">
                        <h1 className="f-orange display-1 fw-bold">Change <br /> <span className="f-white">Starts here</span></h1>
                    </div>
                    <div className="body w-75">
                        <p className="lead f-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos veniam beatae eum?</p>
                    </div>
                    <div className="button d-flex flex-column gap-3 align-items-center flex-lg-row">
                        <a href="#" className="myBtn fw-semibold f-main px-4 py-3 rounded-pill b-orange">BECOME A BETA PARTNER</a>
                        <span className="f-white fw-semibold mx-3">OR</span>
                        <a href="#" className="myBtn f-white fw-semibold border px-4 py-3 rounded-pill">FIND OUT MORE</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src='https://ucarecdn.com/ef4dcd98-c67b-4d4e-a8c5-75c051703056/heroimgvg.svg' alt="img-hero" className="img-fluid" />
                </div>
            </div>

        </div>
    )
}

export default Hero
