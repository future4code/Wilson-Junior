import { BaseDatabase } from "./BaseDatabase";
import { Post, toPostModel } from "../entities/Post";

export class PostDatabase extends BaseDatabase {
  async createPost(post: Post) {
    try {
      await this.connection("labook_posts").insert({
        id: post.id,
        photo: post.photo,
        description: post.description,
        type: post.type,
        author_id: post.authorId,
        created_at: post.createdAt.toISOString().substring(0, 10),
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getPostById(id: string): Promise<Post> {
    try {
      const result: any = await this.connection("labook_posts")
        .select("*")
        .where({ id });

      return toPostModel(result[0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
