import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SegmentedControl from 'rn-segmented-control';


const AppRoot = () => {
  const handleTabPress = (index) => {
    // Function Callback with Tab index pressed
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello,World !</Text>
      <Text style={styles.textStyle}> Segmented Control with 2 Control</Text>
      <SegmentedControl
        tabs={['Label', 'Label']}
        onTabPress={() => { }}
      />
      <Text style={styles.textStyle}> Segmented Control with 3 Control</Text>
      <SegmentedControl
        tabs={['Label', 'Label', 'Label']}
        onTabPress={() => { }}
      />
      <Text style={styles.textStyle}>Customised Segmented Control</Text>
      <SegmentedControl
        tabs={['Shop', 'Discover', 'Brands']}
        onTabPress={() => { }}
        segmentedControlBackgroundColor='#E5E5EA'
        activeSegmentBackgroundColor='white'
        activeTextColor='black'
        textColor='black'
        currentIndex={1}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10
  }
})


export default AppRoot;