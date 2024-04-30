import http from "./httpService";

export function getOtp(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function CheckOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export function CompleteProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export function LogoutApi() {
  return http.post("/user/logout").then(({ data }) => data.data);
}