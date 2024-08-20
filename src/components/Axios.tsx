"use client";
import axios from "axios";
import React, { useState } from "react";

export const Axios = () => {
  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3RfbmFtZSI6InJhbSIsIm1pZGRsZV9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiJnaGltaXJlIiwiZW1haWwiOiJyeWFtQHRlc3QuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkR3dzVjY0L21pbGhnS2ppd3NYdVU1ZVhGWG5WUDFqa0JSOFdON0VqblN5TDU1ZFdWWDRYNjYiLCJyb2xlX2lkIjoyLCJjcmVhdGVkX2F0IjoiMjAyNC0wNi0yNFQwOToxNTozMi4yMDdaIiwidXBkYXRlZF9hdCI6IjIwMjQtMDYtMjRUMDk6MTU6MzIuMjA3WiIsImlhdCI6MTcyMjQ4OTcxNn0.YMO9N0iDK8axhcG6vKmfQXEX8Zg_WQnnCxCn4E1sgrQ"
  // const [table, setTable] =useState([])

  const data = {
    "name":"abc",
    "email":"abc@test.com",
    "is_vendor": true
};

  const postTable = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/customers",
        data,
        {
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response)
    } catch (error: any) {
      console.error("problem fetching data");
    }
  };

  return (
    <div>
      <button onClick={postTable}>Submit</button>
    </div>
  );
};
export default Axios;
