import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useFonts} from 'expo-font'

export default function App() {

useFonts({
  Poppy: require('./assets/fonts/Poppins-Bold.ttf')
})
const [currentQuestion, setCurrentQuestion] = useState(0)

const questionsArray = [
  {
    question: "What type of hair do you have?",
    choices: ["Thick", "Curly", "Long", "Thin"]
  },
  {
    question: "What is your face shpape?",
    choices: ["Round", "Square", "Diamond", "Oval"]
  },
  {
    question: "What is your preferred maintenance level?",
    choices: ["No maintenance", "Low maintenance", "Willing to style"]
  }
]
  let array = []
const saveAnswer = (answer) => {
  
}

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{`
      FIND 
      YOUR
      NEXT
      HAIRCUT`}</Text>
      <Text>Need help choosing a haircut?</Text>
      <View>
        <Text style={styles.questionText}>
          {questionsArray[currentQuestion].question}
        </Text>
        {questionsArray[currentQuestion].choices.map(item => {
          return <TouchableOpacity onPress={()=> array.push(item)}style={styles.choicesContainer}>
                    <Text style={styles.choicesStyle}>{item}</Text>
                </TouchableOpacity>
        })}
  
        <TouchableOpacity onPress={() =>  currentQuestion + 1 < questionsArray.length ? setCurrentQuestion(currentQuestion + 1) : alert(array) } >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choicesStyle:{
    color: "green",
    padding: 5,
    alignSelf: 'center',
    fontSize: 18
  },
  choicesContainer:{
    borderColor: 'white',
    borderWidth: 2,
    marginTop: 15
  },
  questionText:{
    fontSize: 24,
    color: 'white'
  },
  headerText:{
    fontSize: 24,
    color: 'white',
    fontFamily: 'Poppy',
    display: 'flex'
  }
});
