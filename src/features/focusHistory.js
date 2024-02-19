import React from 'react';
import { View, StyleSheet, Text, FlatList} from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes'

export const FocusHistory = ({history}) => {

  if(!history || !history.length) return <Text style={styles.noTask}>-- No Completed Focus Tasks --</Text>;

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Recently Focused On:</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: spacing.lg
  },
  item:{
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
    paddingLeft: spacing.xl,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  noTask:{
    textAlign: 'center',
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
})