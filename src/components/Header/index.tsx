import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Todoish List</Text>
      <Text style={styles.subHeaderText}>
        The only todo app that you'll ever need to organize and track your tasks
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    width: '100%',
    marginBottom: 30,
  },
  headerText: {
    color: '#66023c',
    fontSize: 30,
    marginBottom: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  subHeaderText: {
    color: '#c71585',
    fontSize: 14,
    textAlign: 'center',
  },
})
