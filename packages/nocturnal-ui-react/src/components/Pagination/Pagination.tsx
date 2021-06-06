import React, { FC } from "react";

import { PaginationLink } from "../PaginationLink";

export interface PaginationProps {
  currentPage: number;
  pagesCount: number;
  routePath: string;
  pageRoutePath?: string;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  pagesCount,
  routePath,
  pageRoutePath = "/page",
}) => {
  const fullPageRoutePath = `${routePath}${pageRoutePath}`;
  const isFirst = currentPage === 1;
  const isLast = currentPage === pagesCount;
  const prevPageIndex = currentPage - 1;
  const nextPageIndex = currentPage + 1;
  const prevPagePath =
    prevPageIndex === 1 ? routePath : `${fullPageRoutePath}/${prevPageIndex}`;
  const nextPagePath = `${fullPageRoutePath}/${nextPageIndex}`;

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2em",
      }}
    >
      <PaginationLink key="page-prev" to={prevPagePath} isDisabled={isFirst}>
        &laquo;
      </PaginationLink>
      {Array.from({ length: pagesCount }).map((_, index) => {
        const pageNumber = index + 1;

        return (
          <PaginationLink
            isActive={currentPage === pageNumber}
            key={`page-${pageNumber}`}
            to={
              pageNumber === 1
                ? routePath
                : `${fullPageRoutePath}/${pageNumber}`
            }
          >
            {pageNumber}
          </PaginationLink>
        );
      })}
      <PaginationLink key="page-next" to={nextPagePath} isDisabled={isLast}>
        &raquo;
      </PaginationLink>
    </div>
  );
};
