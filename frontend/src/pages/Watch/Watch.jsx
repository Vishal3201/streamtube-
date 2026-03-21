import { useParams, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import {
FaThumbsUp,
FaThumbsDown,
FaShare,
FaStepForward,
FaStepBackward
} from "react-icons/fa";

import "./watch.css";

function Watch(){

const { id } = useParams();
const navigate = useNavigate();
const videoRef = useRef(null);

const [liked,setLiked] = useState(false);
const [disliked,setDisliked] = useState(false);
const [comment,setComment] = useState("");
const [comments,setComments] = useState([]);

/* VIDEO DATA */
const videos = [
{
id:"1",
title:"React Tutorial for Beginners",
channel:"Code Academy",
views:"2M views",
src:"https://www.w3schools.com/html/mov_bbb.mp4"
},
{
id:"2",
title:"Node.js Backend Crash Course",
channel:"Dev Channel",
views:"850K views",
src:"https://www.w3schools.com/html/movie.mp4"
}
];

const currentVideo = videos.find(v=>v.id===id);

if(!currentVideo){
return <h2 style={{padding:"20px"}}>Video not found</h2>;
}

/* CONTROLS */

const forward = ()=>{
videoRef.current.currentTime += 10;
};

const backward = ()=>{
videoRef.current.currentTime -= 10;
};

/* LIKE / DISLIKE */

const handleLike = ()=>{
setLiked(!liked);
if(disliked) setDisliked(false);
};

const handleDislike = ()=>{
setDisliked(!disliked);
if(liked) setLiked(false);
};

/* COMMENTS */

const addComment = ()=>{

if(comment.trim() === "") return;

setComments([
{ text:comment, id:Date.now() },
...comments
]);

setComment("");

};

return(

<div className="watch-page">

{/* VIDEO */}

<div className="video-container">

<video
ref={videoRef}
src={currentVideo.src}
controls
autoPlay
className="main-video"
/>

{/* OVERLAY CONTROLS */}

<div className="video-controls">

<button onClick={backward}>
<FaStepBackward/>
</button>

<button onClick={forward}>
<FaStepForward/>
</button>

</div>

</div>


{/* TITLE */}

<h2 className="video-title">{currentVideo.title}</h2>
<p className="video-meta">{currentVideo.views}</p>


{/* CHANNEL */}

<div className="channel-row">

<div className="channel-left">

<img src="https://i.pravatar.cc/40" className="channel-img"/>

<div>
<p className="channel-name">{currentVideo.channel}</p>
<p className="sub-count">1M subscribers</p>
</div>

</div>

<button className="subscribe-btn">Subscribe</button>

</div>


{/* ACTIONS */}

<div className="actions">

<button
className={liked ? "active":""}
onClick={handleLike}
>
<FaThumbsUp/> Like
</button>

<button
className={disliked ? "active":""}
onClick={handleDislike}
>
<FaThumbsDown/> Dislike
</button>

<button>
<FaShare/> Share
</button>

</div>


{/* COMMENTS */}

<div className="comments">

<h3>Comments</h3>

<div className="comment-input">

<input
type="text"
placeholder="Add a comment..."
value={comment}
onChange={(e)=>setComment(e.target.value)}
/>

<button onClick={addComment}>Post</button>

</div>


{/* COMMENT LIST */}

<div className="comment-list">

{comments.map(c=>(
<div key={c.id} className="comment">

<img src="https://i.pravatar.cc/30"/>

<p>{c.text}</p>

</div>
))}

</div>

</div>


{/* RECOMMENDED */}

<div className="recommended">

{videos
.filter(v=>v.id !== id)
.map(v=>(
<div
key={v.id}
className="rec-video"
onClick={()=>navigate(`/watch/${v.id}`)}
>

<div className="rec-thumb"></div>

<div>
<p className="rec-title">{v.title}</p>
<p className="rec-meta">{v.channel}</p>
</div>

</div>
))}

</div>

</div>

);

}

export default Watch;