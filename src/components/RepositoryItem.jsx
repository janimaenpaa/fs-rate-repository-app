import React from "react";
import { View, Text } from "react-native";

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  starGazersCount,
  reviewCount,
  ratingAverage,
}) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text>Full name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {starGazersCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
