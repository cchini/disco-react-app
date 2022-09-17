import React, { useState } from 'react';
import './previewUpload.scss';

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = nestedObj =>
  Object.keys(nestedObj).map(key => nestedObj[key]);

const convertBytesToKB = bytes => Math.round(bytes / KILO_BYTES_PER_BYTE);

const PreviewUpload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const [files, setFiles] = useState({});

  const callUpdateFilesCb = files => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const removeFile = fileName => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };

  return (
    <article className="filePreviewContainer">
      <span>To Upload</span>
      <section className="previewList">
        {Object.keys(files).map((fileName, index) => {
          let file = files[fileName];
          let isImageFile = file.type.split('/')[0] === 'image';
          return (
            <section key={fileName} className="previewContainer">
              <div>
                {isImageFile && (
                  <img
                    className="imagePreview"
                    src={URL.createObjectURL(file)}
                    alt={`file preview ${index}`}
                  />
                )}
                {isImageFile ?? (
                  <div className="fileMetaData">
                    <span>{file.name}</span>
                    <aside>
                      <span>{convertBytesToKB(file.size)} kb</span>
                      <span
                        className="fas fa-trash-alt removeFileIcon"
                        onClick={() => removeFile(fileName)}
                      />
                    </aside>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </section>
    </article>
  );
};

export default PreviewUpload;
