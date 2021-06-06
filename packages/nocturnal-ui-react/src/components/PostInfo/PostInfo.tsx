import React, { FC } from "react";

// import { getFormattedDateString } from "../utils";

import * as styles from "./post-info.module.css";

export interface PostInfoProps {
  date: string | null;
  // commentsCount: number;
  // postLink?: string;
}

export const PostInfo: FC<PostInfoProps> = ({
  date,
  // postLink = "",
  // commentsCount,
}) => {
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
