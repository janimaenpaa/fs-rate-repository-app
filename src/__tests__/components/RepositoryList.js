import React from "react";
import { render } from "@testing-library/react-native";
import { RepositoryListContainer } from "../../components/RepositoryList";

const thousandsToK = (value) => {
  if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;

  return value;
};

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };
      // Add your test code here
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      /* component renders repository's name, description, language, 
      forks count, stargazers count, rating average, and review count correctly.  */

      const fullName = getAllByTestId("fullName");

      expect(fullName[0]).toHaveTextContent(
        repositories.edges[0].node.fullName
      );
      expect(fullName[1]).toHaveTextContent(
        repositories.edges[1].node.fullName
      );

      const description = getAllByTestId("description");

      expect(description[0]).toHaveTextContent(
        repositories.edges[0].node.description
      );
      expect(description[1]).toHaveTextContent(
        repositories.edges[1].node.description
      );

      const forksCount = getAllByTestId("forksCount");

      expect(forksCount[0]).toHaveTextContent(
        thousandsToK(repositories.edges[0].node.forksCount)
      );
      expect(forksCount[1]).toHaveTextContent(
        thousandsToK(repositories.edges[1].node.forksCount)
      );

      const stargazersCount = getAllByTestId("stargazersCount");

      expect(stargazersCount[0]).toHaveTextContent(
        thousandsToK(repositories.edges[0].node.stargazersCount)
      );
      expect(stargazersCount[1]).toHaveTextContent(
        thousandsToK(repositories.edges[1].node.stargazersCount)
      );

      const ratingAverage = getAllByTestId("ratingAverage");

      expect(ratingAverage[0]).toHaveTextContent(
        repositories.edges[0].node.ratingAverage
      );
      expect(ratingAverage[1]).toHaveTextContent(
        repositories.edges[1].node.ratingAverage
      );

      const reviewCount = getAllByTestId("reviewCount");

      expect(reviewCount[0]).toHaveTextContent(
        repositories.edges[0].node.reviewCount
      );
      expect(reviewCount[1]).toHaveTextContent(
        repositories.edges[1].node.reviewCount
      );
    });
  });
});
