import { baseApi } from "./ApiBase";

export function getEmployees(){
    return baseApi.get("/employees")
}