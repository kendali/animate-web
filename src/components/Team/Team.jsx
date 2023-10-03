import HeadCenter from "../Short/HeadCenter"
import PeopleTeam from "./PeopleTeam"



const Team = () => {
    
  return (
    <section className="team">
      <div className="container py-5">
        <HeadCenter smallText='OUR TEAM' boldText='We have the best team' />
        <div className="team-people d-flex flex-wrap justify-content-center gap-4 py-5">
            <PeopleTeam />
            <PeopleTeam />
        </div>
      </div>
    </section>
  )
}

export default Team
