import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { ActiveButton, AddTodo, Header, TodoCard } from "../components";

export interface TodoData {
  title: string;
  isCompleted: boolean;
  time: any;
}
export default function Index() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<TodoData[]>([]);
  const [todo, setTodo] = useState("");
  const onSubmit = () => {
    if (!todo) {
      Alert.alert("Please enter your todo");
    }
    let finalData: TodoData = {
      title: todo,
      isCompleted: false,
      time: new Date().toDateString(),
    };
    setData([...data, finalData]);
    setTodo("");
    setOpen(false);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.todocontainer}>
        <FlatList
          data={data}
          contentContainerStyle={{ gap: 10 }}
          ListEmptyComponent={() => (
            <Text style={styles.noDataFound}>No Data Found</Text>
          )}
          renderItem={({ item }) => (
            <TodoCard
              title={item.title}
              time={item.time}
              isCompleted={item.isCompleted}
            />
          )}
        />
      </View>
      <AddTodo
        isActive={open}
        onClose={() => setOpen(false)}
        value={todo}
        onChangeText={(e: any) => setTodo(e)}
        onSubmit={onSubmit}
      />
      <ActiveButton onPress={() => setOpen(true)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  todocontainer: {
    padding: 20,
    gap: 20,
  },
  noDataFound: {
    fontSize: 16,
    textAlign: "center",
    color: "#808080",
    marginTop: 120,
  },
});
