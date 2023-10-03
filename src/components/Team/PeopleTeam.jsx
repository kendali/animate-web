const PeopleTeam = () => {
    const peopleList = [
        {id:0,url:'https://ucarecdn.com/c82c156c-005d-4cba-b455-6a4fb5220caf/NewProject.svg'},
        {id:1,url:'https://ucarecdn.com/552575ed-1b59-4eff-9076-8cfed051060c/NewProject1.svg'},
        {id:2,url:'https://ucarecdn.com/250d7464-644d-4768-9025-2a51f2206625/NewProject2.svg'},
        {id:3,url:'https://ucarecdn.com/e5ad35ae-3c0a-4d25-b767-ceed0e68935a/NewProject3.svg'},
        {id:4,url:'https://ucarecdn.com/13bd690d-1347-417b-8d46-dab67468735f/NewProject4.svg'}
    ]
    const peopleTeam = peopleList.map((item)=>
        <div key={item.id} className={`people-card b-main p-4 d-flex justify-content-center align-items-center rounded-3 shadow mb-3`}>
            <img width={200} src={item.url} alt={`image ${item.id}`}  />
        </div>
    )
  return (
    <>
        {peopleTeam}
    </>
  )
}

export default PeopleTeam
