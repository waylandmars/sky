import React, { useState, useCallback, useMemo } from "react";
import { Modal, Button, Form, Row } from  "react-bootstrap";
import {useDropzone} from 'react-dropzone';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };

  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

function Basic(props) {
    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
      } = useDropzone();
    
    // const files = acceptedFiles.map(file => (
    //   <li key={file.path}>
    //     {file.path} - {file.size} bytes
    //   </li>
    // ));

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isFocused,
        isDragAccept,
        isDragReject
      ]);
  
    return (
      <section className="container">
        <div {...getRootProps({className: 'dropzone', style})}>
            
          <input {...getInputProps()} />
          <p className="plusIcon">+</p>
          <p>Перетащите сюда свои файлы</p>
          <p className="sentenceSeparator">или</p>
          <p>нажмите, чтобы выбрать файлы</p>
        </div>
      </section>
    );
  }

const FileLoader = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="fileLoader">
        <div class="fileInput" onClick={handleShow}><p className='fileInputLabel'>Загрузить файл</p></div>
    
        <Modal show={show} onClick={(event)=>{event.stopPropagation();}} > 
            <div className="uploadContainer">
                <Basic/>      
            </div>   
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отмена
          </Button>
        </Modal.Footer> 
        </Modal>
        </div>
    )
}

export default FileLoader;