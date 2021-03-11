import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const WhyScreen = () => {
    const reasons = [
        { count: 1, harm: 'Affect the way your body uses sugar' },
        { count: 2, harm: 'Increased risks to got type 2 diabetes, cardiovascular disease, cancer and higher mortality' },
        
    ];

    return (
      <View>
        <Text style={styles.textHeader}>Sodium nitrate</Text>
        <FlatList
          keyExtractor={reason => reason.harm}
          data={reasons}
          // element == { item: {}, index: 0} 
          renderItem={({ item }) => {
              return <Text style={styles.textStyle}>Harm { item.count }: { item.harm }</Text>
          }} 
        />        
      </View>
    );
}
const styles = StyleSheet.create({
  textHeader: {
    fontSize: 30
  },
  textStyle: {
    fontSize: 20,
    marginVertical: 10,
    
  }
});

export default WhyScreen;