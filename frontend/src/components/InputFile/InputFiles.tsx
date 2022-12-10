import React, { useState } from "react";
import {
  InputFileStyledContainer,
  InputFileStyled,
  InputFileStyledInput,
  InputFileStyledLabel,
} from "./InputFile.styled";

import Button from "components/Button/Button";

import { BsUpload } from "react-icons/bs";

const InputFiles = () => {
  const [dragActive, setDragActive] = useState(false);
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };

  //   // triggers when file is selected with click
  //   const handleChange = (e: React.MouseEvent) {
  //     e.preventDefault();
  //     if (e.target.files && e.target.files[0]) {
  //       // handleFiles(e.target.files);
  //     }
  //   };
  return (
    <InputFileStyled>
      <InputFileStyledLabel
        htmlFor="upload-input"
        onDragEnter={() => setDragActive(!dragActive)}
        onClick={(e) => e.preventDefault()}
      >
        Upload a photo or video (optional)
        <InputFileStyledContainer>
          <BsUpload />
          <p>Drag and drop here to upload</p>
          <Button
            styleType="default"
            variant="outlined"
            size="small"
            onClick={() => document.getElementById("upload-input")?.click()}
          >
            Or select file
          </Button>
        </InputFileStyledContainer>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </InputFileStyledLabel>
      <InputFileStyledInput id="upload-input" type="file" />
    </InputFileStyled>
  );
};

export default InputFiles;

// // drag drop file component
// function DragDropFile() {
//   // drag state
//   const [dragActive, setDragActive] = React.useState(false);
//   // ref
//   const inputRef = React.useRef(null);

//   // handle drag events
//   const handleDrag = function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") {
//       setDragActive(true);
//     } else if (e.type === "dragleave") {
//       setDragActive(false);
//     }
//   };

//   // triggers when file is dropped
//   const handleDrop = function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       // handleFiles(e.dataTransfer.files);
//     }
//   };

//   // triggers when file is selected with click
//   const handleChange = function (e) {
//     e.preventDefault();
//     if (e.target.files && e.target.files[0]) {
//       // handleFiles(e.target.files);
//     }
//   };

//   // triggers the input when the button is clicked
//   const onButtonClick = () => {
//     inputRef.current.click();
//   };

//   return (
//     <form
//       id="form-file-upload"
//       onDragEnter={handleDrag}
//       onSubmit={(e) => e.preventDefault()}
//     >
//       <input
//         ref={inputRef}
//         type="file"
//         id="input-file-upload"
//         multiple={true}
//         onChange={handleChange}
//       />
//       <label
//         id="label-file-upload"
//         htmlFor="input-file-upload"
//         className={dragActive ? "drag-active" : ""}
//       >
//         <div>
//           <p>Drag and drop your file here or</p>
//           <button
//             className="upload-button"
//             ref={inputRef}
//             onClick={onButtonClick}
//           >
//             Upload a file
//           </button>
//         </div>
//       </label>

//     </form>
//   );
// }
