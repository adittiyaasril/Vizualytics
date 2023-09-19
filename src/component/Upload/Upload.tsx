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
        "https://vizualytics-be.vercel.app/raw-data/upload",
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
  const handleCancel = () => {
    const fileInput = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement | null;
    if (fileInput) {
      fileInput.value = "";
    }
    setMessage("");
  };

  const inputStyle = {
    width: "100%",
    fontSize: "1rem",
    marginBottom: "1rem",
  };

  return (
    <>
      <div className="container-child">
        Upload .gz file here
        <form onSubmit={handleUpload}>
          <input
            type="file"
            name="file"
            accept=".gz "
            className="border rounded text-lg"
            style={inputStyle}
          />
          <span className="ml-auto ">
            <button
              type="submit"
              className="bg-transparent border rounded-none  mr-2 py-4 px-4"
            >
              Upload
            </button>
            <button
              type="button"
              className="bg-transparent border rounded-none  py-4 px-4"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </span>
          {message && <p>{message}</p>}
        </form>
      </div>
    </>
  );
}
