import "./videoPlayer.css";

function VideoPlayer({videoUrl}) {

  return (
    <div className="player-container">

      <video
        controls
        width="100%"
        src={videoUrl}
      />

    </div>
  );
}

export default VideoPlayer;