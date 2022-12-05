import axios from 'axios';
import { useState } from "react";


const Upload = () => {

  const [archivo, setArchivo] = useState(null);

    /*const state = { 
        // Initially, no file is selected
        selectedFile: null
      };*/
      
      // On file select (from the pop up)
      const onFileChange = (event) => {      
        // Update the state
        setArchivo(event.target.files[0]);
        //console.log(event.target.files[0]);      
      };
      
      // On file upload (click the upload button)
      const onFileUpload = () => {
        //console.log(archivo);
        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        formData.append(
          "file",
          archivo,
          archivo.name
        );
      
        // Details of the uploaded file
        console.log(archivo);
      
        // Request made to the backend api
        // Send formData object
        axios.post("http://localhost:3050/files", formData);
      };

    return(
        <div>
            <h2>Cargar archivo</h2>
            <input type="file" name="files" id="" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                  Cargar
                </button>
        </div>
    )
}

export default Upload;
