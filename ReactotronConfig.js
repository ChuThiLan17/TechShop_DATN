import Reactotron, { asyncStorage, networking } from "reactotron-react-native";

Reactotron.configure()
  .useReactNative()
  .use(asyncStorage())
  .use(networking())
  .connect();
console.tron = Reactotron;

export default Reactotron;
