import axios from "axios";

export const host = "http://localhost:9000";

export const API = axios.create({ baseURL: host });

export const addNft =async (signedDeployJSON) => API.post(host + "/api/nft/addNft", { "signedDeployJSON": signedDeployJSON });
export const fetchBalance = async(publicKey) => API.post(host + "/balance", { "publicKey": publicKey });