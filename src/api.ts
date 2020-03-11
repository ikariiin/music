import { Route, Method } from "./types";
import { API_BASE } from "./api_routes";

export async function fetchApi(route: Route, data: any = {}, uriParam: string = ''): Promise<any> {
  if(route.method === Method.GET) {
    const response = await fetch(`${API_BASE}${route.uri}/${uriParam}`);

    return response.json();
  }
} 