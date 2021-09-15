import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, Container, makeStyles, Typography } from "@material-ui/core";

import Comments from "../Comments";

import * as api from "../../api/requests";
import { IComments, IPosts } from "../types";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  card: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(5),
    fontWeight: "bold",
  },
}));

interface IProps {
  posts: IPosts;
}

const Post: React.FC<IProps> = ({ posts }) => {
  const classes = useStyles();

  const { postId } = useParams<{ postId: string }>();

  const [comments, setComments] = useState<IComments>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.getPostComments(postId);
        setComments(data);
      } catch (error) {
        toast.error("Unfortunately, we were unable to fetch comments.");
      }
    })();
  }, [postId, setComments]);

  const post = posts && posts.find((post) => post.id === parseInt(postId));

  return (
    <main className={classes.layout}>
      <Card className={classes.card}>
        <Container className={classes.container}>
          <Typography className={classes.title} variant="h5">
            {post?.title}
          </Typography>
          <Typography variant="body1">{post?.body}</Typography>
        </Container>
        <Comments comments={comments} />
      </Card>
    </main>
  );
};

export default Post;
