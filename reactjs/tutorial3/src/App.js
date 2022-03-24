import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

export default function App(){
  //useEffect useState useRef useContext >> react hooks
const [posts,setPosts] = useState([]);//saved posts json data in here
const [IndexNumber, setIndexNumber] = useState(1);



  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
    .then(res=>res.json())
    .then(data=>{
      //console.log(data)
      setPosts(data)
    })
    .catch(err=>console.log(err))
  },[IndexNumber])
  
  const nextPost = (e)=>{
    e.preventDefault()
   
    setIndexNumber(IndexNumber+1) //0,1,2,3,4,5,6
    // // fetch("https://jsonplaceholder.typicode.com/posts/"+IndexNumber)
    // fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
    // .then(res=>res.json())
    // .then(data=>{
    //   console.log(data)
    //   setSinglePost(data)
    // })
  }

  const previousPost = (e)=>{
    e.preventDefault()
  if(IndexNumber == 1) {
    alert("bla")
  }else {
    setIndexNumber(IndexNumber - 1)
  }
}
  return(
    <Container className="text-center mt-5">
      <p>{posts.title}</p>
      <p>{posts.id}</p>


      <Button variant={'warning'} className="mx-1" onClick={previousPost}>Previous Post</Button>
      <Button variant={'warning'} onClick={nextPost}>Next post</Button>
      {/* {
        posts.map((post,index)=>(
          <div key={index}>
            <p>{console.log(post)}</p>
            <p>{post.title}</p>
          </div>
        ))
      } */}
    
    </Container>
  )
}
