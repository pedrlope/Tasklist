import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome da Tarefa' />

      <Text style={styles.label}>Tarefa Descrição</Text>
      <TextInput style={[styles.input, styles.textArea]} placeholder='Descrição da Tarefa'
        multiline />

      <view style={styles.buttonContainer}>
        <Button title='Salvar' 
        style={styles.buttonColor}
        color='mediumblue'
        onPress={
          () =>{
            alert('TESTADO')
          }
        }/>
         </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008B8B',
    alignItems: 'center',
    justifyContent: 'top',
  },
  label: {
    fontSize: 35,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 16
  },
  buttonColor : {
  },
});
