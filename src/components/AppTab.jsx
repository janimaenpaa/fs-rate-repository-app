import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const AppTab = ({ text, url, onPress }) => {
  return (
    <TouchableWithoutFeedback>
      <Link to={url} onPress={onPress}>
        <Text fontWeight="bold" style={{ color: "#fff", marginRight: 10 }}>
          {text}
        </Text>
      </Link>
    </TouchableWithoutFeedback>
  );
};

export default AppTab;
