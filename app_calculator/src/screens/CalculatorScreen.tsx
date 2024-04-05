import {View, Text} from "react-native";
import { styles } from "../config/thema/app_thema";

export const CalculatorScreen = () => {
    return(
        <View style={styles.claculatorContainer}>
            <View style={{paddingHorizontal: 30, paddingBottom:20}}>
                <Text style={styles.mainResult}>0504</Text>
                <Text style={styles.subResult}>05</Text>
            </View>
        </View>
    );
};