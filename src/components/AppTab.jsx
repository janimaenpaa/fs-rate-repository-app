import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const AppTab = ({ text, url }) => {
  return (
    <TouchableWithoutFeedback>
      <Link to={url}>
        <Text fontWeight="bold" style={{ color: "#fff", marginRight: 10 }}>
          {text}
        </Text>
      </Link>
    </TouchableWithoutFeedback>
  );
};

export default AppTab;
