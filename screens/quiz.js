import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// export default function home() {
//   return (
//     <View>
//       <Text></Text>
//      </View>
//   );
// }


const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState();
    const getQuiz=async()=>{
        const url = 'https://opentdb.com/api.php?amount=10';
        const res = await fetch(url);
        const data = await res.json();
        //console.log(data.results[0]);
        setQuestions(data.results);
    };
    useEffect(() => {
        getQuiz();
    //   return () => {
    //     effect
    //   };
    }, []);//input
  return (
      <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.question}>Q. What is teh largest animal currently on Earth?</Text>
          </View>
          <View style={styles.options}>
             <TouchableOpacity style={styles.optionButton}>
                 <Text style={styles.option}>Orca</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.optionButton}>
                 <Text style={styles.option}>Blue Whale</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.optionButton}>
                 <Text style={styles.option}>COlossal Squid</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.optionButton}>
                 <Text style={styles.option}>Giraffe</Text>
             </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
             <TouchableOpacity style={styles.button}>
                 <Text style={styles.buttonText}>SKIP</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.button}>
                 <Text style={styles.buttonText}>NEXT</Text>
             </TouchableOpacity>
             {/* <TouchableOpacity onPress={()=>navigation.navigate("Result")}>
                 <Text>END</Text>
             </TouchableOpacity> */}
          </View>

      </View>
    
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    paddingHorizontal: 20,
    height:'100%',
  },
  top: {
      marginVertical: 16,
  },
  options: {
      marginVertical:16,
      flex: 1,
  },
  bottom:{
    marginBottom:12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    
    backgroundColor: '#1A759F',
    padding: 16,
    paddingHorizontal: 16,
    borderRadius:16,
    alignItems:'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize:18,
    fontWeight:'600',
    color:'white',
  },
  question: {
      fontSize: 28,
  },
  option: {
      fontSize: 18,
      fontWeight:'500',
      color:'white',
  },
  optionButton: {
      paddingVertical:12,
      marginVertical:6,
      backgroundColor:'#34A0A4',
      paddingHorizontal:12,
      borderRadius: 12,
  }
});


