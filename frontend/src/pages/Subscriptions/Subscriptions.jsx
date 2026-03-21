import "./subscriptions.css";

function Subscriptions(){

return(

<div className="subs-page">

<h2 className="subs-title">Subscriptions</h2>


{/* CHANNEL AVATAR ROW */}

<div className="channel-row">

<div className="channel">
<img src="https://i.pravatar.cc/100?img=1" alt="channel"/>
<p>Tech</p>
</div>

<div className="channel">
<img src="https://i.pravatar.cc/100?img=2" alt="channel"/>
<p>Coding</p>
</div>

<div className="channel">
<img src="https://i.pravatar.cc/100?img=3" alt="channel"/>
<p>Gaming</p>
</div>

<div className="channel">
<img src="https://i.pravatar.cc/100?img=4" alt="channel"/>
<p>Music</p>
</div>

<div className="channel">
<img src="https://i.pravatar.cc/100?img=5" alt="channel"/>
<p>AI</p>
</div>

</div>


{/* VIDEO FEED */}

<div className="subs-videos">

{/* VIDEO 1 */}

<div className="video-card">

<div className="video-thumb"></div>

<div className="video-details">

<img
className="video-avatar"
src="https://i.pravatar.cc/40?img=1"
alt="avatar"
/>

<div className="video-text">

<h4>React Tutorial for Beginners</h4>
<p>Code Academy • 2M views • 1 day ago</p>

</div>

<div className="video-menu">⋮</div>

</div>

</div>


{/* VIDEO 2 */}

<div className="video-card">

<div className="video-thumb"></div>

<div className="video-details">

<img
className="video-avatar"
src="https://i.pravatar.cc/40?img=2"
alt="avatar"
/>

<div className="video-text">

<h4>Node.js Backend Crash Course</h4>
<p>Dev Channel • 850K views • 3 days ago</p>

</div>

<div className="video-menu">⋮</div>

</div>

</div>


{/* VIDEO 3 */}

<div className="video-card">

<div className="video-thumb"></div>

<div className="video-details">

<img
className="video-avatar"
src="https://i.pravatar.cc/40?img=3"
alt="avatar"
/>

<div className="video-text">

<h4>Build a YouTube Clone</h4>
<p>StreamTube Dev • 120K views • 1 week ago</p>

</div>

<div className="video-menu">⋮</div>

</div>

</div>

</div>

</div>

);

}

export default Subscriptions;