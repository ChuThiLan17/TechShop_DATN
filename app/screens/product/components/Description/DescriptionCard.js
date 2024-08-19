import { Dimensions } from "react-native";

import RenderHtml from "react-native-render-html";

const width = Dimensions.get("window").width;
const DescriptionCard = ({ description }) => {
  const source = { html: description };
  return <RenderHtml contentWidth={width} source={source} />;
};

export default DescriptionCard;
