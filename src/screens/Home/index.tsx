import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import TodoForm, { TodoItem } from '../../components/TodoForm'
import TodoList from '../../components/TodoList'
import Header from '../../components/Header'
const Home = () => {
  const [todoes , setTodoes] = useState<TodoItem[]>([])
  return (
    <View style={styles.mainContainer}>
      <Header />
      <TodoForm
        addTodo={(todo: TodoItem) => {
          setTodoes((prev)=> [...prev , todo])
        }}
        isModalOpen  = {isModal}
      />
      <TodoList todoes = {todoes} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
})
