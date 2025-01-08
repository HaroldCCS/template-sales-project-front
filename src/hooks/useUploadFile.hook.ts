import { useEffect, useState } from "react";
import axios, { AxiosProgressEvent } from "axios";
import env from "../settings/env";


const useUploadFile = ({ file }: {file?: File}) => {
  const [progressBar, setProgressBar] = useState(0);
  const [errorMessage, setError] = useState("");

  useEffect(() => {
    setError("");
    setDefaultStates();
  }, [file]);

  const setDefaultStates = () => setProgressBar(0);

  const failRequest = (error: Error = new Error("")) => {
    setDefaultStates();
    setError("Ha ocurrido un error al cargar el archivo, vuelve a intentarlo " + error?.message);
    return '';
  };


  const handleUpload = async (): Promise<string> => {
    if (!file) return '';

    try {
      setProgressBar(0.1);
      //@INFO Obteniedo PreSigned de S3 para cargar la imagen desde react
      const uploadResponse = await fetch(env.UPLOAD_FILE_URL + "/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          folder: env.UPLOAD_FILE_URL,
          contentType: file.type,
        }),
      });

      const _resposne = await uploadResponse.json();
      const { data: uploadData, url_download } = _resposne;

      if (!url_download || !uploadData.url) return failRequest();

      const formData = new FormData();
      Object.entries(uploadData.fields).forEach(([field, value]) => {
        formData.append(field, value as string);
      });
      formData.append("file", file);


      const load = (progressEvent: AxiosProgressEvent) => {
        const progress = Math.round(
          (progressEvent.loaded / (progressEvent?.total || 1)) * 100
        );

        // Aquí puedes actualizar tu barra de progreso en el frontend
        setProgressBar(progress);
      }
      const axiosConfig = {
        onUploadProgress: load,
        method: "PUT",
        headers: { "Content-Type": "multipart/form-data" },
      };

      //@INFO Consumiendo apli de AWS para guardar la imagen
      await axios.post(uploadData.url, formData, axiosConfig);
      return url_download;
    } catch (error) {
      return failRequest(error as Error);
    }
  };

  return {
    handleUpload,
    progressBar,
    errorMessage
  }
};

export default useUploadFile;
