import { YStack } from "tamagui";

import Itext from "../../../components/Text/Itext";

const ListEmptyView = () => {
  return (
    <YStack h={500} ai="center" jc="center">
      <Itext text={"Bạn chưa có đơn hàng nào cả"} />
    </YStack>
  );
};

export default ListEmptyView;
