// VideoUpload.jsx
import React, { useState } from "react";
import "./UploadVideo.css"; // Import the CSS file

function VideoUpload({ onVideoData }) {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    function handleFileChange(event) {
        const selectedFile = event.target.files[0];
        const filePreview = URL.createObjectURL(selectedFile);
        const allowedTypes = [
            "video/mp4",
            "video/avi",
            "video/quicktime",
            "video/x-ms-wmv",
            "video/x-flv",
            "video/x-matroska",
            "video/webm",
            "image/jpeg",
            "image/png",
        ];

        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
            setPreview(filePreview);
            setErrorMsg(null);
        } else {
            setFile(null);
            setPreview(null);
            setErrorMsg(
                "Please select a valid video file (mp4, avi, mov, wmv, flv, mkv, or webm)",
            );
        }
        onVideoData(selectedFile, filePreview, errorMsg);
    }

    return (
        <div className="upload">
            <h1>Upload Video</h1>
            <p>Upload a video file to transform it into a stunning Ghibli-style animation</p>
            <div className="upload-container">
                <label htmlFor="fileInput" className="upload-label">
                    <div className="upload-icon-container">
                        <svg
                            className="upload-icon"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p className="upload-text">
                            <span className="upload-text-bold">Click to upload</span> or drag and
                            drop
                        </p>
                    </div>
                    <input
                        id="fileInput"
                        type="file"
                        className="file-input"
                        accept="video/*"
                        onChange={handleFileChange}
                    />
                </label>
                {preview ? (
                    <video src={preview} alt="" controls className="video-preview" />
                ) : (
                    <p className="preview-placeholder">Preview</p>
                )}
            </div>

        </div>
    );
}

export default VideoUpload;