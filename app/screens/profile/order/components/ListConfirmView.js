import { useEffect, useState } from "react";
import { Text, View } from "tamagui";
import api from "../../../../services";
import { Image, StyleSheet } from "react-native";
import Itext from "../../../components/Text/Itext";
const ListConfirmView = () => {
  const [listConfirm, setListConfirm] = useState([]);

  const fetch = async () => {
    try {
      const res = await api.order.getOrder();
      setListConfirm(res.data.response);
    } catch (error) {}
  };

  const filteredOrders = listConfirm.filter((order) => order.status === 0);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <View>
      {filteredOrders.map((item) => (
        <View style={styles.container}>
          <Text>{item.code}</Text>
          {item.products.map((iten) => (
            <View style={styles.containerItem}>
              <Image
                style={{ height: 50, width: 50, borderRadius: 16 }}
                source={{
                  uri: iten.thumb,
                }}
              />
              <View>
                <Text>{iten.title}</Text>
                <Text>Màu: {iten.color}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <Text>Giá: {iten.price} đ</Text>
                  <Text>x {iten.quantity}</Text>
                </View>
              </View>
              {/* <View>
                <Text>{iten.color}</Text>
                <Text>{iten.color}</Text>
              </View> */}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default ListConfirmView;
const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 10,
    gap: 12,
  },
  containerItem: {
    paddingVertical: 8,
    flexDirection: "row",
    gap: 16,
  },
});
