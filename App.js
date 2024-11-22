import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import TaskCard from './TaskCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome da Tarefa' />

      <Text style={styles.label}>Tarefa descricao</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder='descricao da tarefa'
        multiline />

      <View style={styles.buttonContainer}>
        <Button
          title='Salvar'
          style={styles.buttonContainer}
          color='darkgreen'
          onPress={
            () => {
              alert('vq feio')
            }
          }
        />
      </View>
      <TaskCard
        title={"Teste"}
        desc={"descrição teste"}
        status={"done"}
        onClick={() => {
          alert("deletar")
        }}
      />
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

  }
});

