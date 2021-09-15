import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { IPost } from "../types";

const useStyles = makeStyles((theme) => ({
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
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: "bold",
  },
  actions: { justifyContent: "flex-end" },
}));

interface IProps {
  post: IPost;
}

const PostPreview: React.FC<IProps> = ({ post }) => {
  const classes = useStyles();

  const previewPostBody = `${post.body.substring(0, 150).trim()}...`;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h5">
          {post.title}
        </Typography>
        <Typography>{previewPostBody}</Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/posts/${post.id}`}
        >
          Full Version
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostPreview;
