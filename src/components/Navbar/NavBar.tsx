import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import ArrowRightSharpIcon from "@material-ui/icons/ArrowRightSharp";

import { IPosts } from "../types";

const useStyles = makeStyles(() => ({
  appBar: {
    position: "relative",
    color: "default",
  },
  navLink: {
    fontSize: "1.2rem",
    color: "white",
  },
}));

interface IProps {
  posts: IPosts;
}

const NavBar: React.FC<IProps> = ({ posts }) => {
  const classes = useStyles();

  const { postId } = useParams<{ postId: string }>();

  const post = posts && posts.find((post) => post.id === parseInt(postId));

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <NavLink className={classes.navLink} to="/posts">
          Posts
        </NavLink>
        <ArrowRightSharpIcon />
        <NavLink className={classes.navLink} to={`/posts/${postId}`}>
          {post?.title}
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
