import { getPosts } from "../src";
import { describe, expect, it } from "@jest/globals";

describe("getPosts", () => {
  it("should return an array of posts", async () => {
    const posts = await getPosts();
    expect(posts).toBeInstanceOf(Array);
  });
});
