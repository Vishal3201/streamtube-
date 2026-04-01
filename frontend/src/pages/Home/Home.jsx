import "./home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Categories from "../../components/Categories/Categories";
import ShortsRow from "../../components/ShortsRow/ShortsRow";
import MobileNav from "../../components/MobileNav/MobileNav";
import { getVideos } from "../../services/api";

function Home() {
  const navigate = useNavigate();

  // ✅ State
  const [videos, setVideos] = useState([]);

  // ✅ Fetch videos from backend
  useEffect(() => {
    getVideos().then(setVideos);
  }, []);

  /* SAMPLE VIDEO DATA (fallback) */
  const staticVideos = [
    {
      id: "1",
      title: "React Tutorial for Beginners",
      channel: "Code Academy",
      views: "2M views • 1 day ago"
    },
    {
      id: "2",
      title: "Node.js Backend Crash Course",
      channel: "Dev Channel",
      views: "850K views • 3 days ago"
    },
    {
      id: "3",
      title: "AI Tools You Must Know",
      channel: "Tech Today",
      views: "500K views • 1 week ago"
    }
  ];

  // ✅ Use DB videos if available
  const displayVideos = videos.length ? videos : staticVideos;

  return (
    <div className="home">

      {/* ================= DESKTOP ================= */}
      <div className="desktop-home">

        <h2 className="section-title">Recommended</h2>

        <div className="video-grid">
          {displayVideos.map((video) => (
            <div
              key={video._id || video.id}
              className="video-card"
              onClick={() =>
                navigate(`/watch/${video._id || video.id}`)
              }
            >
              {video.title}
            </div>
          ))}
        </div>

        <h2 className="section-title">Shorts</h2>

        <div className="shorts-row">
          <div className="short-card" onClick={() => navigate("/shorts/0")}>Short 1</div>
          <div className="short-card" onClick={() => navigate("/shorts/1")}>Short 2</div>
          <div className="short-card" onClick={() => navigate("/shorts/2")}>Short 3</div>
          <div className="short-card" onClick={() => navigate("/shorts/3")}>Short 4</div>
        </div>

      </div>

      {/* ================= MOBILE ================= */}
      <div className="mobile-home">

        {/* Video Feed */}
        <div className="mobile-feed">
          {displayVideos.map((video) => (
            <div
              key={video._id || video.id}
              className="mobile-video"
              onClick={() =>
                navigate(`/watch/${video._id || video.id}`)
              }
            >
              <div className="thumb"></div>

              <div className="video-info">
                <p className="title">{video.title}</p>
                <p className="meta">
                  {video.channel || "User"} • {video.views || "New"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Shorts */}
        <ShortsRow />

        {/* More Videos */}
        <div className="mobile-feed">
          {displayVideos.map((video) => (
            <div
              key={(video._id || video.id) + "more"}
              className="mobile-video"
              onClick={() =>
                navigate(`/watch/${video._id || video.id}`)
              }
            >
              <div className="thumb"></div>

              <div className="video-info">
                <p className="title">{video.title}</p>
                <p className="meta">
                  {video.channel || "User"} • {video.views || "New"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <MobileNav />

      </div>

    </div>
  );
}

export default Home;
