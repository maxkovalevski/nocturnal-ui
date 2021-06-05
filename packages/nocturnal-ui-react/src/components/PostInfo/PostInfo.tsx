import React from "react";

// import { getFormattedDateString } from "../utils";

import * as styles from "./post-info.module.css";

interface PostInfoProps {
  date: string | null;
  // commentsCount: number;
  // postLink?: string;
}

export const PostInfo = ({
  date,
}: // commentsCount,
// postLink = "",
PostInfoProps) => {
  return (
    <div className={styles.info}>
      {date && <time dateTime={date}>{date}</time>}
      {/* <span> | </span> */}
      {/* <Link to={`${postLink}#comments`}>{`${commentsCount} ${
        commentsCount === 1 ? "comment" : "comments"
      }`}</Link> */}
    </div>
  );
};

export default PostInfo;
