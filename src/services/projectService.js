import http from "./httpService";

export function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}
export function removeProjectsApi(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}
export function CreateProjectsApi(data) {
  return http.post(`/project/add`, data).then(({ data }) => data.data);
}

export function editProjectApi({ id, newProject }) {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
}
export function toggleProjectApi({ id, data }) {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
}
export function getProjectApi(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}
