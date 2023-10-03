import PeopleTeam from "./PeopleTeam"



const Team = () => {
    
  return (
    <section className="team">
      <div className="container py-5">
        <div className="team-text text-center">
            <span className="text-secondary">Our Team</span>
            <h2 className="display-5 fw-semibold f-main">We have the best team</h2>
        </div>
        <div className="team-people d-flex flex-wrap justify-content-center gap-4 py-5">
            <PeopleTeam />
            <PeopleTeam />
        </div>
      </div>
    </section>
  )
}

export default Team
