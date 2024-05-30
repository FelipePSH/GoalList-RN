import { StyleSheet, TextInput, View, Button } from "react-native";
import { useState } from "react";

function GoalInput(props) {
const [enteredGoalText, setEnteredGoalText] = useState("");
function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }     

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

return(
  <View style={styles.newTaskContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="Your Goal"
      onChangeText={goalInputHandler}
      value={enteredGoalText}
    />
    <Button title="Add Goal" onPress={addGoalHandler} />
  </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  newTaskContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
