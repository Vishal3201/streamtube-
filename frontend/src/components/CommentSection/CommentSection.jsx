import { useState, useEffect } from "react";
import "./comments.css";
import { addComment, getComments } from "../../services/api";

function CommentSection({ videoId }){

const [comments,setComments] = useState([
  {user:"Alex",text:"Great video!"}
]);

const [input,setInput] = useState("");

// ✅ fetch comments from backend
useEffect(() => {
  if(videoId){
    getComments(videoId).then((data)=>{
      if(data.length) setComments(data);
    });
  }
}, [videoId]);

// ✅ renamed function to avoid conflict
async function handleAddComment(){

  if(!input) return;

  const newComment = {
    videoId,
    text: input,
    user: "You"
  };

  try{
    await addComment(newComment);

    setComments([...comments, newComment]);
    setInput("");

  }catch(err){
    console.error(err);
  }

}

return(

<div className="comments">

<h3>Comments</h3>

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Write comment..."
/>

<button onClick={handleAddComment}>Post</button>

{comments.map((c,i)=>(
<div key={i} className="comment">
<strong>{c.user}</strong>
<p>{c.text}</p>
</div>
))}

</div>

);

}

export default CommentSection;