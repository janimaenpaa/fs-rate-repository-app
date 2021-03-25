import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORIES } from "../graphql/queries";

const sortOptions = {
  latest: { orderBy: "CREATED_AT", orderDirection: "DESC" },
  highestRated: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
  lowestRated: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
};

const useRepositories = (sortBy) => {
  const { loading, data, refetch } = useQuery(GET_REPOSITORIES, {
    variables: sortOptions[sortBy],
    fetchPolicy: "cache-and-network",
  });

  return {
    repositories: data ? data.repositories : undefined,
    loading,
    refetch,
  };
};

export default useRepositories;
