"use client";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function Upload() {
  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();

  const uploadFile = async (formData: FormData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/raw-data/upload",
        formData
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to upload file");
    }
  };

  const { mutate } = useMutation(uploadFile, {
    onSuccess: () => {
      setMessage("File uploaded successfully.");
      queryClient.invalidateQueries(["uploadedFiles"]);
    },
    onError: () => {
      setMessage("Failed to upload file.");
    },
  });

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", (event.target as HTMLFormElement).file.files[0]);
    mutate(formData);
  };

  return (
    <div>
      <h1>Upload Page</h1>
      <form onSubmit={handleUpload}>
        <input type="file" name="file" accept=".gz" />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
