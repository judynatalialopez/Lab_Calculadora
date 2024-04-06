import {View, Text, Pressable} from "react-native";
import { colors, styles } from "../config/thema/app_thema";
import { CalculatorButton } from "../components/CalculatorButton";
import { useCalculator } from "../hooks/useCalculator";


export const CalculatorScreen = () => {
    const {
        number,
        prevNumber,
        buildNumber, 
        toggleSign,
        clear,
        deleteOperation,
        divideOperation,
        multuplyOperation,
        addOperation,
        subtractOperation,
    } = useCalculator();


    return(
        <View style={styles.claculatorContainer}>
            <View style={{paddingHorizontal: 30, paddingBottom:20}}>
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>{number}</Text>
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
                    {(prevNumber ==='0') ? '':prevNumber}
                    </Text>
            </View>

            <View style={styles.row} >
                <CalculatorButton OnPress={clear} blackText label="C" color={colors.lighGray}/>
                <CalculatorButton OnPress={toggleSign} blackText label="+/-" color={colors.lighGray}/>
                <CalculatorButton OnPress={deleteOperation} blackText label="DEL" color={colors.lighGray}/>
                <CalculatorButton OnPress={divideOperation}  label="÷" color={colors.orange}/>
            </View>

            <View style={styles.row} >
                <CalculatorButton OnPress={()=>buildNumber('7')}  label="7" color={colors.lighGray}/>
                <CalculatorButton OnPress={()=>buildNumber('8')}  label="8" color={colors.lighGray}/>
                <CalculatorButton OnPress={()=>buildNumber('9')}  label="9" color={colors.lighGray}/>
                <CalculatorButton OnPress={multuplyOperation}  label="*" color={colors.orange}/>
            </View>

            <View style={styles.row} >
                <CalculatorButton OnPress={()=>buildNumber('4')}  label="4" color={colors.lighGray}/>
                <CalculatorButton OnPress={()=>buildNumber('5')}  label="5" color={colors.lighGray}/>
                <CalculatorButton OnPress={()=>buildNumber('6')}  label="6" color={colors.lighGray}/>
                <CalculatorButton OnPress={subtractOperation}  label="-" color={colors.orange}/>
            </View>

            <View style={styles.row} >
                <CalculatorButton OnPress={()=>buildNumber('1')}  label="1" color={colors.lighGray}/>
                <CalculatorButton OnPress={()=>buildNumber('2')}  label="2" color={colors.lighGray}/>
                <CalculatorButton OnPress={()=>buildNumber('3')}  label="3" color={colors.lighGray}/>
                <CalculatorButton OnPress={addOperation}  label="+" color={colors.orange}/>
            </View>
            <View style={styles.row} >
                <CalculatorButton OnPress={()=>buildNumber('0')} label="0" color={colors.lighGray} doubleSize/>
                <CalculatorButton OnPress={()=>buildNumber('.')} label="." color={colors.lighGray}/>
                {/*<CalculatorButton label="3" color={colors.lighGray}/>*/}
                <CalculatorButton OnPress={()=>console.log('=')} label="=" color={colors.orange}/>
            </View>

        </View>

    

        
    );
};