import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

// export default function home() {
//   return (
//     <View>
//       <Text></Text>
//      </View>
//   );
// }


const Result = ({navigation}) => {
  return (
    <View > 
      {/* <Text>This is Result</Text> */}
      <View>
          <Text>Result</Text>
      </View>
      <View >
            <Image 
                source={{
                    uri:'https://banner2.cleanpng.com/20180811/tkg/kisspng-quiz-clip-art-image-portable-network-graphics-ques-quiz-9th-november-british-club-las-palmas-5b6efaa3dab932.3624226815339997798959.jpg',
                }}
                style={styles.banner}
                resizeMode="contain"
            />
      </View>
      <View>
          <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
              <Text>HOME</Text>
          </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        paddingTop:20,
        paddingHorizontal: 20,
        height:'100%',
    },
});


