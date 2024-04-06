import { Pressable, Text } from "react-native";
import { colors,  styles } from "../config/thema/app_thema";

interface Props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: () => void;
}

export const CalculatorButton = ({ label, color = colors.darkGray, doubleSize = false, blackText = false, onPress }: Props) => {
    return (
        <Pressable
            onPress={onPress} // Pasar directamente la función onPress
            style={({ pressed }) => ({
                ...styles.button,
                backgroundColor: color,
                width: (doubleSize) ? 180 : 80,
                opacity: pressed ? 0.8 : 1
            })}
        >
            <Text style={{ ...styles.buttonText, color: blackText ? 'black' : 'white' }}>
                {label}
            </Text>
        </Pressable>
    );
};