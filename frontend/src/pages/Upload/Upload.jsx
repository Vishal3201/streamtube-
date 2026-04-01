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

  useEffect(() => {
    if (location.state?.file) {
      setFile(location.state.file);
    }
  }, [location.state]);

  const handleUpload = async () => {
    if (!file || !title) {
      return alert("Please add a title and select a video");
    }

    const formData = new FormData();
    formData.append("video", file);
    formData.append("title", title);
    formData.append("description", desc);

    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    try {
      setLoading(true);
      await uploadVideo(formData);

      alert("Uploaded Successfully 🚀");

      // reset form
      setFile(null);
      setTitle("");
      setDesc("");
      setThumbnail(null);

      // redirect to home
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Upload Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>Upload Video</h2>

      {/* Video Preview */}
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

      {/* Thumbnail Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setThumbnail(e.target.files[0])}
      />

      <br /><br />

      {/* Upload Button */}
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}

export default Upload;
