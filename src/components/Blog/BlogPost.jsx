
const BlogPost = ({url,firstBtn,lastBtn,para}) => {
  return (
    <div className="blog-post d-flex flex-column gap-2">
      <img className="rounded-4" width={230} height={200} src={url} alt="" />
      <div className="button d-flex justify-content-between">
        <div className="business bg-secondary rounded-pill p-2">
            <i className="fa-solid fa-circle f-second"></i>
            <a href="" className="myBtn f-white px-2">{firstBtn}</a>
        </div>
        <div className="news bg-secondary rounded-pill p-2">
            <i className="fa-solid fa-circle f-third"></i>
            <a href="" className="myBtn f-white px-2">{lastBtn}</a>
        </div>
      </div>
      <div className="footer w-75">
        <p>{para}.</p>
      </div>
    </div>
  )
}

export default BlogPost
