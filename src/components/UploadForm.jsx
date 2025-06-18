import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadForm.css';

function UploadForm({ onFileUpload }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv']
    },
    maxFiles: 1
  });

  return (
    <div className="upload-form">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? 'active' : ''}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the CSV file here...</p>
        ) : (
          <div className="upload-content">
            <p>Drag and drop a CSV file here, or click to select a file</p>
            <p className="upload-hint">
              The CSV should contain 'month' and 'income' columns
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadForm; 