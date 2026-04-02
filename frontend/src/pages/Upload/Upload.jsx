import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { uploadVideo } from "../../services/api";

function Upload() {
  const location = useLocation();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ✅ Get video from previous page */
  useEffect(() => {
    if (location.state?.file) {
      setFile(location.state.file);
    }
  }, [location.state]);

  /* ✅ Upload handler */
  const handleUpload = async () => {
    if (!file || !title) {
      return alert("Please add a title and select a video");
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("video", file);
      formData.append("title", title);
      formData.append("description", desc);

      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }

      console.log("Uploading...", formData);

      await uploadVideo(formData);

      alert("Uploaded Successfully 🚀");

      // reset
      setFile(null);
      setTitle("");
      setDesc("");
      setThumbnail(null);

      navigate("/");

    } catch (error) {
      console.error("UPLOAD ERROR:", error);
      alert(
        error?.response?.data?.error ||
        "Upload Failed ❌ (Check backend / DB / Cloudinary)"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Upload Video</h2>

      {/* ✅ Select video manually if not passed */}
      {!file && (
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
      )}

      {/* ✅ Video Preview */}
      {file && (
        <video
          src={URL.createObjectURL(file)}
          controls
          width="100%"
        />
      )}

      <br /><br />

      {/* Title */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      {/* Description */}
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      {/* Thumbnail */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setThumbnail(e.target.files[0])}
      />

      <br /><br />

      {/* Button */}
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}

export default Upload;
