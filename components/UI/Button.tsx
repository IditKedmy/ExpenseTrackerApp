import {GlobalStyles} from "../../constants/styles";
import {Pressable, View, StyleSheet, Text, ViewStyle, StyleProp} from "react-native";
import {JSX} from "react";

export default function Button(props: {
  children: string | JSX.Element;
  onPress: () => void;
  mode?: "flat";
  style?:  StyleProp<ViewStyle>;
}) {
  return (
    <View style={props.style}>
      <Pressable onPress={props.onPress} style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button, props?.mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, props?.mode === 'flat' && styles.flatText]}>
            {props.children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4
  },
});