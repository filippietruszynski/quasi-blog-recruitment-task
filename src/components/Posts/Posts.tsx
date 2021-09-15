import React from "react";
import { makeStyles } from "@material-ui/core";

import PostPreview from "../PostPreview";

import { IPost, IPosts } from "../types";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

interface IProps {
  posts: IPosts;
}

const Posts: React.FC<IProps> = ({ posts }) => {
  const classes = useStyles();

  const postPreviews =
    posts &&
    posts.map((post: IPost) => {
      return <PostPreview post={post} key={post.id} />;
    });

  return <main className={classes.layout}>{postPreviews}</main>;
};

export default Posts;
