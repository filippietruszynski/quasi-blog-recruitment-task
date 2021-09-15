import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

import { IComment } from "../types";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  name: {
    fontWeight: "bold",
  },
}));

interface IProps {
  comment: IComment;
}

const Comment: React.FC<IProps> = ({ comment }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.name} variant="h6" gutterBottom>
          {comment.name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {comment.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
