import React, { TouchableOpacity, View, Text } from "react-native";
import styles from "./Styles";

interface Task {
  title: string;
  done: boolean;
  date: Date;
}

interface RenderItemProps {
  item: Task;
  markDone: (task: Task) => void;
  deleteFunction: (task: Task) => void;
}

export default function renderItem({item, markDone, deleteFunction}: RenderItemProps) {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => markDone(item)}>
        <Text style={item.done ? styles.textDone : styles.text}>{item.title}</Text>
        <Text style={item.done ? styles.dateDone : styles.date}>{new Date(item.date).toLocaleDateString()}</Text>
      </TouchableOpacity>
      {
        item.done && (
          <TouchableOpacity style={styles.deleteButton} onPress={() => deleteFunction(item)}>
            <Text style={styles.whiteText}>Eliminar</Text>
          </TouchableOpacity>
        )
      }
    </View>
  );  
}