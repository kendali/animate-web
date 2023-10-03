import HeadCenter from "../Short/HeadCenter"
import BlogPost from "./BlogPost"


const Blog = () => {
  return (
    <section className="blog"> 
      <div className="container py-5">
        <HeadCenter smallText='OUR BLOG' boldText='Read our lates blogs' />
        <div className="posts d-flex py-5 gap-3 flex-wrap justify-content-center" >
            <BlogPost 
                url='https://img.freepik.com/premium-vector/woman-with-smartphone-talking_24911-72146.jpg'
                firstBtn='Business' lastBtn='New' para='My business is growing faster'
            />
            <BlogPost 
                url='https://img.freepik.com/free-vector/hand-drawn-collage-background_23-2149590537.jpg?w=826&t=st=1696343016~exp=1696343616~hmac=6b00a394cd5bc80fb5bd1dbcb659a2cc244441987c7c18466f80e2205de3da30'
                firstBtn='Business' lastBtn='New' para='My business is growing faster'
            />
            <BlogPost 
                url='https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=826&t=st=1696343019~exp=1696343619~hmac=a92b3e273505e5df395697af6aa57b66ade12e5099ff0c06390123b1ffe58fbe'
                firstBtn='Business' lastBtn='New' para='My business is growing faster'
            />
            <BlogPost 
                url='https://img.freepik.com/free-vector/hand-drawn-summer-pattern_23-2148946376.jpg?t=st=1696327869~exp=1696328469~hmac=4dc03515106ae5ee2a3bf15ffda38e927a9bcaa289e00ce7c8e9b2e64e903964'
                firstBtn='Business' lastBtn='New' para='My business is growing faster'
            />
            <BlogPost 
                url='https://img.freepik.com/premium-vector/woman-walking-with-autumn-suit-park_25030-46532.jpg'
                firstBtn='Business' lastBtn='New' para='My business is growing faster'
            />
        </div>
      </div>
    </section>
  )
}

export default Blog
