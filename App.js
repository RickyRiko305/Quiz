import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Home from './screens/home';
import MyStack from './screens/navigation';
import Quiz from './screens/quiz';
import Result from './screens/result';

// const App = () = >{
//   return (
//     <View>
//       <Text></Text>
//      </View>
//   )
// }

// export default function componentName() {
//   return (
//     <View>
//       <Text>This is Quiz App</Text>
//      </View>
//   );
// }

    //  <View style={styles.container}>
    //   <Quiz/>
      
    //  </View>

const App = () => {
  return (
    <NavigationContainer>{
          <MyStack/>
        
    }
    </NavigationContainer>
    
  );
};

export default App;

const styles = StyleSheet.create({
  // container: {
  //   paddingTop:40,
  // },
});

