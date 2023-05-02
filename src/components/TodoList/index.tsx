import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TodoItem } from '../TodoForm'

interface TodoListProps {
  todoes: TodoItem[]
}
const TodoList: React.FC<TodoListProps> = ({ todoes }: TodoListProps) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={{
          width: '100%',
        }}
      >
        <View style={styles.mainContainer}>
          {!todoes.length && (
            <Text style={styles.text}>No Todoes to be listed......</Text>
          )}
          {todoes.map((todo, index) => {
            return <Text key={index}>{todo.title}</Text>
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#c71585',
  },
})
