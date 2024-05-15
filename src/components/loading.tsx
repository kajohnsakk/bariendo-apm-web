import React from "react";
import PropTypes from "prop-types";

interface LoadingProps {
  children?: React.ReactNode;
  isLoading?: boolean;
}

const Loading = ({ children, isLoading }: LoadingProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

Loading.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};

export default Loading;
