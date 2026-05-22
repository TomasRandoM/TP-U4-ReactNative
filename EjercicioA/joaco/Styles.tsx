import {
  StyleSheet,
  Dimensions,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    color: "#6f6f6f",
  },
  text: {
    fontSize: 16,
    color: "#000000",
  },
  whiteText: {
    fontSize: 16,
    color: "#ffffff",
  },
  textInput: {
    borderColor: "#6f6f6f",
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get("screen").width * 0.63,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  }, 
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: Dimensions.get("screen").width * 0.23,
  },
  scrollContainer: {
    marginTop: 20,
    width: "100%",
  },
  itemContainer: {
    paddingVertical: 10,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    fontSize: 14,
    color: "#6f6f6f",
  },
  dateDone: {
    fontSize: 14,
    color: "#6f6f6f",
    textDecorationLine: "line-through",
  },
  textDone: {
    fontSize: 16,
    color: "#6f6f6f",
    textDecorationLine: "line-through",
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: Dimensions.get("screen").width * 0.23,
  },
});

export default styles;