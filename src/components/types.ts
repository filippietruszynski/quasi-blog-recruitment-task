/* POSTS */

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type IPosts = IPost[];

/* COMMENTS */

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type IComments = IComment[];
