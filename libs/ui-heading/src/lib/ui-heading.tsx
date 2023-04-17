import { Text, View, StyleSheet } from "react-native"

export interface UiHeadingProps {
  text?: string;
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center"
  }
});

export function UiHeading(props: UiHeadingProps) {
  return (
    <View>
      <Text style={styles.title}>Welcome to UiHeading!</Text>
      {props.text && (
        <Text style={styles.title}>{props.text}</Text>
      )}
    </View>
  );
}

export default UiHeading;
