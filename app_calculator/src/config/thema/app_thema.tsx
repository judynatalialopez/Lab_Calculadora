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
        fontSize: windowHeight * 0.1, 
        textAlign: 'right',
        marginBottom: windowHeight * 0.02, 
        fontWeight: '300',
    },
    subResult: {
        color: colors.textSecondary,
        fontSize: windowHeight * 0.05, 
        textAlign: 'right',
        fontWeight: '300',
    },
    calculatorContainer: {
        flex: 1,
        padding: windowWidth * 0.05, 
        justifyContent: 'flex-end',
    },
    button: {
        height: windowHeight * 0.1,
        width: windowHeight * 0.1, 
        backgroundColor: 'red',
        borderRadius: windowHeight * 0.1 / 2, 
        justifyContent: 'center',
        marginHorizontal: windowWidth * 0.01, 
    },
    buttonText: {
        textAlign: 'center',
        padding: windowHeight * 0.025, 
        fontSize: windowHeight * 0.035, 
        color: 'white',
        fontWeight: 'bold', 
    },    
    row: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: windowHeight * 0.020, 
        paddingHorizontal: windowWidth * 0.1,
    }, 
});
