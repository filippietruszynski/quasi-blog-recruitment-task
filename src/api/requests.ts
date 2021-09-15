import axiosInstance from "./axios-instance";

export const getAllPosts = () => axiosInstance.get("/posts");

export const getPostComments = (postId: string) =>
  axiosInstance.get(`/posts/${postId}/comments`);
