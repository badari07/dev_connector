import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import getPost from "../../actionCreaters/getPost";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";

const Post = ({ post: { post, loading }, getPost, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <>
      <Link to="/posts" className="btn">
        {" "}
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
    </>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
};

const mapStateToProps = ({ post }) => ({ post });

export default connect(mapStateToProps, { getPost })(Post);
