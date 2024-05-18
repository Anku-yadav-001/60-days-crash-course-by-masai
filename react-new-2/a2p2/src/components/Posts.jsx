import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true)
    try {
      {
        let resp=await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(resp.data)
      }
        setLoading(false)
    } catch (error) {
      {
        setLoading(false)
        setError(true)
      }
    }
  }

  useEffect(function(){
    fetchAndUpdateData()
  },[]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>
      {
        posts?.map((ele,ind)=>(
          <Post {...ele} key={ind} />
        ))
      }
    </div>
  );
}

export default Posts;
