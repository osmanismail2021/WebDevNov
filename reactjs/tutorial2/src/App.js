import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import LoginForm from "./components/LoginForm";

export default function App() {
    const [value, setValue] = useState(0);
    const [data, setData] = useState([{ id: 1 }]);
    const [formData, setFormData] = useState([]);
    const [blogData, setBlogData] = useState([])
    const [singlePost,setSinglePost] = useState([])
    const [postIndex,setPostIndex] = useState(0); 

    useEffect(() => {
        fetch('https://www.googleapis.com/blogger/v3/blogs/9103471259281367282/posts/?key=AIzaSyBhezYgttvNf96EcVhQX28tVvDJ9zNmuU4')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            // retrieved data here
            setBlogData(data.items)
        })
    },[])

    const prevPost = (e) =>{
        e.preventDefault()
        
    }

    const nextPost = (e)=>{
        e.preventDefault()
        setPostIndex(postIndex+1)
        setSinglePost(blogData[postIndex])
    }

    const clickHandler = (event) => {
        event.preventDefault()
        console.log(value)
        // set state data here
        // setValue(value+1)  state changed here 
        // value = 0 +1
        setData({
            ...data,
            name: 'osman'
        })


    }


    // sudo npm install json-server -g
    // npm install json-server -g 
    // json-server --watch yourfile.json -p 5000

    const formHandler = (e) => {
        //  console.log(e.target)
        const { name, value } = e.target
        console.log(name, value)
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        console.log(formData)
        // send data to server here
        // application/json; charset=UTF-8
        fetch('http://localhost:5000/members/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData)
        })
    }

    /*
    GET > Retrieve data
    POST > Create data
    PUT/PATCH > Update data
    DELETE > delete data
    */

    return (
        <>
            <Container>
                <Button onClick={() => setData({ ...data, email: 'osman@osman.com' })}>Dont click</Button>
                <Button onClick={clickHandler}>Dont click1</Button>
                <h1 className="display-3">{value}</h1>
                {console.log(data)}
                <LoginForm submitHandler={formSubmitHandler} formHandler={formHandler} />

                {console.log(blogData)}
                <h1 className="display-2"></h1>
                {blogData.map((blog,index)=>(
                <div className="div">
                  <h1>{blog.title}</h1>
                  <p>{blog.published}</p>
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />

                </div>
                ))}

                <Button onClick={prevPost}>Previous Post</Button>
                <Button onClick={nextPost}>Next Post</Button>
                {console.log(singlePost)}
                {/* <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={formHandler} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={formHandler} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" onClick={formSubmitHandler} type="submit">
                        Submit
                    </Button>
                </Form> */}
            </Container>
        </>
    )
}