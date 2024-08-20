import axios from "axios";

const instance = axios.create();
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3RfbmFtZSI6InJhbSIsIm1pZGRsZV9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiJnaGltaXJlIiwiZW1haWwiOiJyeWFtQHRlc3QuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkR3dzVjY0L21pbGhnS2ppd3NYdVU1ZVhGWG5WUDFqa0JSOFdON0VqblN5TDU1ZFdWWDRYNjYiLCJyb2xlX2lkIjoyLCJjcmVhdGVkX2F0IjoiMjAyNC0wNi0yNFQwOToxNTozMi4yMDdaIiwidXBkYXRlZF9hdCI6IjIwMjQtMDYtMjRUMDk6MTU6MzIuMjA3WiIsImlhdCI6MTcyMjQ4OTcxNn0.YMO9N0iDK8axhcG6vKmfQXEX8Zg_WQnnCxCn4E1sgrQ"

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config)
    config.headers.Authorization = token;
    config.headers["Content-Type"] = "Application/json"
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // Do something before request is sent
    console.log(response)
    // const { status, data } = response
    return response;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { instance };
