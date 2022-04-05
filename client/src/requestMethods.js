import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGFjMzYzYWVmYzdjNmNkNWQyNTQ3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTA4OTcyMiwiZXhwIjoxNjQ5MzQ4OTIyfQ.tOv5LtvhJbGVudPL6cQrpOQ4R5oxXGx5b2VJRTwI67U";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
