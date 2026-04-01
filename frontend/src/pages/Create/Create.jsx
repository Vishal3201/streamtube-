import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose, MdCollections, MdEdit } from "react-icons/md";
import "./create.css";

function Create() {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const navigate = useNavigate();

  const [recording, setRecording] = useState(false);

  useEffect(() => {
    let stream;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        mediaRecorderRef.current = new MediaRecorder(stream);
      } catch (err) {
        alert("Camera not working: " + err.message);
        console.error(err);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const startRecording = () => {
    const chunks = [];

    mediaRecorderRef.current.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks, { type: "video/mp4" });
      navigate("/upload", { state: { file: blob } });
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    navigate("/upload", { state: { file } });
  };

  return (
    <div className="create">

      {/* TOP BAR */}
      <div className="top-bar">
        <button onClick={() => navigate("/")}>
          <MdClose size={28} />
        </button>
        <span>Create</span>
        <div />
      </div>

      {/* CAMERA */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="camera"
      />

      {/* CONTROLS */}
      <div className="controls">

        {/* MEDIA */}
        <label className="side-btn">
          <MdCollections size={30} />
          <input
            type="file"
            accept="video/*"
            hidden
            onChange={handleFileUpload}
          />
        </label>

        {/* RECORD */}
        <button
          className={`record ${recording ? "active" : ""}`}
          onClick={recording ? stopRecording : startRecording}
        />

        {/* EDIT */}
        <button className="side-btn">
          <MdEdit size={30} />
        </button>

      </div>

    </div>
  );
}

export default Create;
