import { getPosts } from "../src";
import { describe, expect, it } from "@jest/globals";

describe("getPosts", () => {
  it("should return an array of posts", async () => {
    const posts = await getPosts();
    if (posts) {
      expect(posts).not.toBeNull();
      expect(posts?.length).toBeGreaterThan(0);
      if (posts?.length) {
        expect(posts[0]).toHaveProperty("userId");
        expect(posts[0]).toHaveProperty("id");
        expect(posts[0]).toHaveProperty("title");
        expect(posts[0]).toHaveProperty("body");
      }
    }
  });
});
