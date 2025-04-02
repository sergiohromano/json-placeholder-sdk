import { BASE_URL } from "./constants";
import { Post } from "./types";

export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const json = await response.json();
    return json as Post[];
  } catch (error) {
    console.error(error);
  }
};
