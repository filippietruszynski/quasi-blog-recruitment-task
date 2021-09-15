import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

import Comment from "../Comment";

import { IComment, IComments } from "../types";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(5),
    fontWeight: "bold",
  },
}));

interface IProps {
  comments?: IComments;
}

const Comments: React.FC<IProps> = ({ comments }) => {
  const classes = useStyles();

  const commentComponents =
    comments &&
    comments.map((comment: IComment) => {
      return <Comment comment={comment} key={comment.id} />;
    });

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} variant="h6">
        Comments
      </Typography>
      {commentComponents}
    </Container>
  );
};

export default Comments;
