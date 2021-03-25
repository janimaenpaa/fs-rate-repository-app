import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  sortBy,
  setSortBy,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem key={item.id} {...item} />}
      ListHeaderComponent={() => (
        <Picker
          selectedValue={sortBy}
          style={{ height: 50, margin: 10 }}
          onValueChange={(itemValue) => setSortBy(itemValue)}
        >
          <Picker.Item label="Latest repositories" value="latest" />
          <Picker.Item
            label="Highest rated repositories"
            value="highestRated"
          />
          <Picker.Item label="Lowest rated repositories" value="lowestRated" />
        </Picker>
      )}
    />
  );
};

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState("latest");
  const { repositories } = useRepositories(sortBy);

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortBy={sortBy}
      setSortBy={setSortBy}
    />
  );
};

export default RepositoryList;
