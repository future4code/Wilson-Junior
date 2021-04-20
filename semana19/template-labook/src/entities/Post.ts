export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

export type Post = {
  id: string;
  photo: string;
  description: string;
  type: POST_TYPES;
  createdAt: Date;
  authorId: string;
};

export interface createPostInputDTO {
  photo: string;
  description: string;
  type: POST_TYPES;
  token: string;
}

export interface getPostByIdInputDTO {
  id: string;
}

export interface getPostByIdOutputDTO {
  photo: string;
  description: string;
  type: POST_TYPES;
  createdAt: Date;
}

export function toPostModel(obj: any): Post {
  return (
    obj && {
      id: obj.id,
      photo: obj.photo,
      description: obj.description,
      type: obj.type,
      createdAt: obj.created_at,
      authorId: obj.author_id,
    }
  );
}
