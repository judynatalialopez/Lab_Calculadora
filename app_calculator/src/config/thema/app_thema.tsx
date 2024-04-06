import { StyleSheet, Dimensions } from "react-native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const colors = {
    darkGray: '#2D2D2D',
    lightGray: '#aaaaaa',
    orange: '#FF9427',
    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000',
}

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background,
    },
    mainResult: {
        color: colors.textPrimary,
        fontSize: windowHeight * 0.1, // Utiliza una fracción del alto de la ventana
        textAlign: 'right',
        marginBottom: windowHeight * 0.02, // Utiliza una fracción del alto de la ventana
        fontWeight: '300',
    },
    subResult: {
        color: colors.textSecondary,
        fontSize: windowHeight * 0.05, // Utiliza una fracción del alto de la ventana
        textAlign: 'right',
        fontWeight: '300',
    },
    calculatorContainer: {
        flex: 1,
        padding: windowWidth * 0.05, // Utiliza una fracción del ancho de la ventana
        justifyContent: 'flex-end',
    },
    button: {
        height: windowHeight * 0.1, // Utiliza una fracción del alto de la ventana
        width: windowHeight * 0.1, // Utiliza una fracción del alto de la ventana
        backgroundColor: 'red',
        borderRadius: windowHeight * 0.1 / 2, // Utiliza una fracción del alto de la ventana
        justifyContent: 'center',
        marginHorizontal: windowWidth * 0.01, // Utiliza una fracción del ancho de la ventana
    },
    buttonText: {
        textAlign: 'center',
        padding: windowHeight * 0.025, // Utiliza una fracción del alto de la ventana
        fontSize: windowHeight * 0.035, // Utiliza una fracción del alto de la ventana
        color: 'white',
        fontWeight: 'bold', // Cambiado a negrita
    },    
    row: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: windowHeight * 0.020, // Utiliza una fracción del alto de la ventana
        paddingHorizontal: windowWidth * 0.1, // Utiliza una fracción del ancho de la ventana
    }, 
});