import {Ionicons} from "@expo/vector-icons";
import {Pressable, View, StyleSheet} from "react-native";

export default function IconButton(props: {
  name: any;
  size: number;
  color: string | undefined;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={props.onPress} style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
    <Ionicons
      name={props.name}
      size={props.size}
      color={props.color}
      style={{marginRight: 20}}
    />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2
  },
  pressed: {
    opacity: 0.75,
  }
});
