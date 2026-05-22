import React, {useState, useEffect} from "react";
import { Alert } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import styles from "./Styles";
import renderItem from "./RenderItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {

  interface Task {
    title: string;
    done: boolean;
    date: Date;
  }

  const [text, setText] = useState("");
  
  const storeData = async (value: Task[]) => {
    try {
      await AsyncStorage.setItem('myTasks', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('myTasks');
      if(value !== null) {
        const tasksFromStorage = JSON.parse(value);
        setTasks(tasksFromStorage);
      }
    } catch(e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData();
  }, []);
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    const newTask: Task = {
      title: text,
      done: false,
      date: new Date(),
    };
    const task = tasks.find(t => t.title === text);
    if(task) {
      Alert.alert("Tarea duplicada", "Ya existe una tarea con ese título");
      return;
    }
    setTasks([...tasks, newTask]);
    storeData([...tasks, newTask]);
    setText("");
  }

  const markDone = (task: Task) => {
    const updatedTasks = tasks.map(t =>
      t === task ? { ...t, done: !t.done } : t
    );

    setTasks(updatedTasks);
    storeData(updatedTasks);
  }

  const deleteFunction = (task: Task) => {
    Alert.alert(
      'Eliminar tarea',
      '¿Estás seguro de que quieres eliminar esta tarea?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            const updatedTasks = tasks.filter(t => t !== task);

            setTasks(updatedTasks);
            storeData(updatedTasks);
          },
        },
      ]
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%" }}>
        <Text style={styles.title}>Mis tareas por hacer</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput} 
            placeholder="Nueva tarea..." 
            value={text}
            onChangeText={(t: string) => setText(t)}
          />
          <TouchableOpacity 
            onPress={addTask}
            style={styles.addButton}>
            <Text style={styles.whiteText}>
              Agregar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scrollContainer}>
          <FlatList 
            data={tasks}
            renderItem={({item}) => renderItem({item, markDone, deleteFunction})}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

