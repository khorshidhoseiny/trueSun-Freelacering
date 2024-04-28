import http from "./httpService";

export function getCategoriApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}
