import React from "react";
import { View, StyleSheet, Image } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  column: {
    flexDirection: "column",
    alignItems: "baseline",
  },
  infoItem: {
    flexDirection: "column",
    textAlign: "center",
  },
  avatar: {
    flexDirection: "column",
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 8,
  },
  language: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: theme.colors.primary,
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
});

const InfoItem = ({ value, title, testID }) => {
  return (
    <View styles={styles.infoItem} testID={testID}>
      {value >= 1000 ? (
        <Text fontWeight="bold" align="center">{`${(value / 1000).toFixed(
          1
        )}k`}</Text>
      ) : (
        <Text fontWeight="bold" align="center">
          {value}
        </Text>
      )}
      <Text color="textSecondary">{title}</Text>
    </View>
  );
};

const TopBar = ({ ownerAvatarUrl, fullName, description, language }) => (
  <View style={{ flexDirection: "row" }}>
    <Image
      style={styles.avatar}
      source={{
        uri: ownerAvatarUrl,
      }}
      testID="avatarUrl"
    />
    <View style={styles.column}>
      <Text fontWeight="bold" testID="fullName">
        {fullName}
      </Text>
      <Text fontSize="subheading" color="textSecondary" testID="description">
        {description}
      </Text>
      <Text style={styles.language} testID="language">
        {language}
      </Text>
    </View>
  </View>
);

const BottomBar = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => (
  <View style={styles.row}>
    <InfoItem value={stargazersCount} title="Stars" testID="stargazersCount" />
    <InfoItem value={forksCount} title="Forks" testID="forksCount" />
    <InfoItem value={reviewCount} title="Reviews" testID="reviewCount" />
    <InfoItem value={ratingAverage} title="Rating" testID="ratingAverage" />
  </View>
);

const RepositoryItem = (props) => {
  return (
    <View style={styles.container}>
      <TopBar {...props} />
      <BottomBar {...props} />
    </View>
  );
};

export default RepositoryItem;
