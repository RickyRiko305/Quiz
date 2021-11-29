import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Title from '../components/title';

// export default function home() {
//   return (
//     <View>
//       <Text></Text>
//      </View>
//   );
// }
//

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title/>
      <Text>This is home</Text>
      <View style={styles.bannerContainer}>
          <Image 
            source={{
                uri:'https://banner2.cleanpng.com/20180811/tkg/kisspng-quiz-clip-art-image-portable-network-graphics-ques-quiz-9th-november-british-club-las-palmas-5b6efaa3dab932.3624226815339997798959.jpg',
            }}
            style={styles.banner}
          />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    container:{
        paddingTop:20,
        paddingHorizontal: 20,
        height:'100%',
    },
    button: {
        width: '100%',
        backgroundColor: '#1A759F',
        padding: 16,
        borderRadius:16,
        alignItems:'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize:24,
        fontWeight:'600',
        color:'white',
    },
});


