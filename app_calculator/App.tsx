import { StatusBar, Text, View } from "react-native";
import { CalculatorScreen } from "./src/screens/CalculatorScreen";
import {styles} from "./src/config/thema/app_thema"

function App() {
  return(
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
      
      <CalculatorScreen/>
    </View>
  );
};

export default App;