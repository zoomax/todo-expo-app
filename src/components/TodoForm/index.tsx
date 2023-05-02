import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Modal,
  View,
} from 'react-native'
import React, { useState } from 'react'
export interface TodoItem {
  status: string
  title: string
}
interface TodoFormProps {
  addTodo(todo: TodoItem): void
  isModalOpen: boolean
  closeModal(): void
}
const TodoForm: React.FC<TodoFormProps> = ({
  addTodo,
  isModalOpen,
  closeModal,
}: TodoFormProps) => {
  const [title, setTitle] = useState<string>('')
  const handleInputChange = (value: string) => {
    setTitle(value)
    console.log(value, 'from todoForm component')
  }
  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.modalContainer}>
        <Pressable
          onPress={() => {
            closeModal()
          }}
        >
          <Text style={{ color: '#000' }}>Dismiss</Text>
        </Pressable>
        <View style={styles.mainContainer}>
          <TextInput
            placeholder={'type a todo title here ....'}
            style={styles.textInput}
            onChangeText={handleInputChange}
          />
          <Pressable
            style={styles.actionBtn}
            onPress={() => {
              const todo: TodoItem = {
                status: 'inProgress',
                title,
              }
              addTodo(todo)
            }}
          >
            <Text style={styles.text}>Add Todo</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default TodoForm

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#00000020',
    backfaceVisibility: "visible",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 16,
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 25,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  textInput: {
    flex: 7,
    height: 50,
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  actionBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
    backgroundColor: '#66023c',
    height: 50,
    borderRadius: 10,
  },
})
