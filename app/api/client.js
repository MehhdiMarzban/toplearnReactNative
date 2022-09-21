import { create } from "apisauce";

const client = create({ baseURL: "http://192.168.8.114:9000/api" });

export default client;
