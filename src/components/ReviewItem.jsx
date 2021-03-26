import React from "react";
import { View } from "react-native";
import { format } from "date-fns";
import theme from "../theme";
import Text from "./Text";

const ReviewItem = ({ review }) => {
  console.log(review);
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#fff",
        padding: 10,
        marginTop: 10,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          width: 50,
          borderRadius: 50 / 2,
          borderWidth: 2,
          borderColor: theme.colors.primary,
        }}
      >
        <Text color="primary" fontWeight="bold">
          {review.rating}
        </Text>
      </View>
      <View style={{ width: "80%", marginLeft: 10 }}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text color="textSecondary">
          {format(new Date(review.createdAt), "dd.MM.yyyy")}
        </Text>
        <Text style={{ marginTop: 10 }}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
