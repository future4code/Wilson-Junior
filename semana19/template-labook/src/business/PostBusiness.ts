import { createPostInputDTO, Post, getPostByIdInputDTO } from "../entities/Post";
import { TokenManager } from "../services/TokenManager";
import { AuthenticationData } from "../entities/User";
import { IdGenerator } from "../services/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { PostDatabase } from "../data/PostDatabase";

export class PostBusiness {

    async createUser(input: createPostInputDTO) {

        try {

            const tokenManager = new TokenManager();

            if (!input.token) {
                throw new Error("A jwt must be provided");
            }
            const tokenData: AuthenticationData = tokenManager.getTokenData(input.token);

            const idGenerator = new IdGenerator();
            const id: string = idGenerator.generateId();

            const post: Post = {
                id,
                authorId: tokenData.id,
                createdAt: new Date(),
                description: input.description,
                photo: input.photo,
                type: input.type
            }

            await new PostDatabase().createPost(post);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getPostById(input: getPostByIdInputDTO){
        try {

            const post: Post = await new PostDatabase().getPostById(input.id);
            
           if (!post) {
              throw new Error("Post not found")
           }
           return post;
            
        } catch (error) {
            throw new Error(error.message);
        }
    }
}