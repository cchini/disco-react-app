import React, { useRef, useState } from 'react';
import './dragDropFile.scss';

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = nestedObj =>
  Object.keys(nestedObj).map(key => nestedObj[key]);

const convertBytesToKB = bytes => Math.round(bytes / KILO_BYTES_PER_BYTE);

const DragDropFile = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = newFiles => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = files => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const handleNewDragDropFile = e => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = fileName => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };

  return (
    <>
      <section className="fileUploadContainer">
        <label className="inputLabel">{label}</label>
        <p className="dragDropText">Drag and drop your files anywhere or</p>
        <button
          type="button"
          onClick={handleUploadBtnClick}
          className="uploadFileBtn">
          <i className="fas fa-file-upload" />
          <span> Upload {otherProps.multiple ? 'files' : 'a file'}</span>
        </button>
        <input
          className="formField"
          type="file"
          ref={fileInputField}
          onChange={handleNewDragDropFile}
          title=""
          value=""
          {...otherProps}
        />
      </section>

      {/* Sección preview que debería ir en el componente <Preview/> */}
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
    </>
  );
};

export default DragDropFile;
