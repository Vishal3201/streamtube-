import "./you.css";

function You(){

return(

<div className="you-page">

{/* PROFILE SECTION */}

<div className="profile-section">

<img
src="https://i.pravatar.cc/120"
alt="profile"
className="profile-img"
/>

<div className="profile-info">

<h2>StreamTube Creator</h2>
<p>@streamtubecreator</p>
<p className="subs">0 subscribers • 0 videos</p>

</div>

</div>


{/* ACTION BUTTONS */}

<div className="channel-actions">

<button>Manage Channel</button>
<button>Switch Account</button>

</div>


{/* MENU OPTIONS */}

<div className="menu-list">

<div className="menu-item">Your Videos</div>

<div className="menu-item">History</div>

<div className="menu-item">Playlists</div>

<div className="menu-item">Watch Later</div>

<div className="menu-item">Liked Videos</div>

<div className="menu-item">Downloads</div>

</div>

</div>

);

}

export default You;