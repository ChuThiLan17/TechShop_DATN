import RenderHtml from "react-native-render-html";

const DescriptionCard = ({ description }) => {
  const source = { html: description };
  return <RenderHtml contentWidth={"100%"} source={source} />;
};

export default DescriptionCard;
