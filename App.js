import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import TaskCard from './TaskCard';
import { useState, useEffect } from 'react';
import { getRequest } from './api/Api';

export default function App() {

  const [taskTitle, setTasktitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [task, setTask] = useState([]);
  const [alert1, setAlert1] = useState(false);
  const [alert2, setAlert2] = useState(false);

  const onMessage = () => {
    setAlert1(false);
    setAlert2(false);

    if (taskTitle !== "" && taskDescription.length >= 10) {
      setTask
        ([
          ...task,
          {
            id: task.length + 1,
            title: taskTitle,
            description: taskDescription
          }
        ])
      setTasktitle("");
      setTaskDescription("");
    }
    else {

      if (!taskTitle.trim()) {
        setAlert1(true)
        setTimeout(() => {
          setAlert1(false);

        }, 4000);
      }

      if (taskDescription.length < 10) {
        setAlert2(true)
        setTimeout(() => {
          setAlert2(false);
        }, 4000);
      }

    }
  }
  const deleteTask = (index) => {
    const updateTask = [...task];
    updateTask.splice(index, 1)
    setTask(updateTask)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {

        const resp = await getRequest();
        setTask(resp)
      } catch (ex) {
        console.error(ex)
      }
    };
    fetchData()
  }, [])
  return (

    <View style={styles.container}>
      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Tarefa"
        value={taskTitle}
        onChangeText={setTasktitle}
      />

      {
        alert1
          ?
          <Text style={styles.errorText}>
            Necessário informar o título
          </Text>
          : <></>
      }

      <Text style={styles.label}>Tarefa descricao</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descricao da tarefa"
        multiline
        value={taskDescription}
        onChangeText={setTaskDescription}
      />

      {
        alert2
          ? <Text style={styles.errorText}>
            Necessário mínimo 10 caracteres
          </Text>
          : <></>
      }



      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonContainer}
          title='Salvar'
          color='darkgreen'
          onPress={
            () => onMessage()}



        />
      </View>

      {task.length > 0
        ? <View style={styles.separator} />
        : <></>
      }

      <ScrollView>
        {
          task.map((item, index) => (
            <TaskCard
            key={item.id}
              title={item.title}
              desc={item.description}
              status={"Done"}
              onClick={() => {
                deleteTask(index);
              }}
            />
          ))}

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightred',
    padding: 16
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    margemBottom: 8

  },
  input: {
    borderWitdth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },

  buttonContainer: {
    marginTop: 16
  },
  buttonGreen: {
    backgroundColor: 'darkgreen',
    borderRadius: 12

  },
  separator: {
    marginTop: 16,
    width: "100%",
    height: 1,
    backgroundColor: "#222"
  },
  errorText: {
    color: "red",
    fontSize: 12,
    fontStyle: "italic"

  }
});

