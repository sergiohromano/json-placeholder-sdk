import { BASE_URL } from "./constants";
import { Post } from "./types";

export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    console.log({ response });
    const json = await response.json();
    console.log({ json });
    return json as Post[];
  } catch (error) {
    console.error(error);
  }
};
