import { Route, Method } from "./types";
export const API_BASE = "http://localhost:80";

export const CONFIG_FETCH_ALL_route: Route = {
  uri: '/config',
  method: Method.GET
}