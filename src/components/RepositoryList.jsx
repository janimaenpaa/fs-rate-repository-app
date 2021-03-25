import React, { useState } from "react";
import { FlatList, View, StyleSheet, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDebounce } from "use-debounce/lib";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  searchBar: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 4,
    margin: 12,
    marginBottom: 0,
    padding: 5,
  },
  picker: {
    height: 50,
    margin: 12,
    marginVertical: 0,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const Sorter = ({ sortBy, setSortBy }) => (
  <Picker
    selectedValue={sortBy}
    style={styles.picker}
    onValueChange={(itemValue) => setSortBy(itemValue)}
  >
    <Picker.Item label="Latest repositories" value="latest" />
    <Picker.Item label="Highest rated repositories" value="highestRated" />
    <Picker.Item label="Lowest rated repositories" value="lowestRated" />
  </Picker>
);

export class RepositoryListContainer extends React.Component {
  repositoryNodes = (repositories) =>
    repositories ? repositories.edges.map((edge) => edge.node) : [];

  renderHeader = () => {
    const { searchKeyword, setSearchKeyword, sortBy, setSortBy } = this.props;

    return (
      <React.Fragment>
        <TextInput
          style={styles.searchBar}
          value={searchKeyword}
          onChangeText={setSearchKeyword}
          placeholder="Search..."
        />
        <Sorter sortBy={sortBy} setSortBy={setSortBy} />
      </React.Fragment>
    );
  };

  render() {
    return (
      <FlatList
        data={this.repositoryNodes(this.props.repositories)}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem key={item.id} {...item} />}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState("latest");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedKeyword] = useDebounce(searchKeyword, 500);
  const { repositories } = useRepositories(sortBy, debouncedKeyword);
  console.log(debouncedKeyword);

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortBy={sortBy}
      setSortBy={setSortBy}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
    />
  );
};

export default RepositoryList;
