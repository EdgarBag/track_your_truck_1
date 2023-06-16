import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16, flexDirection: 'row',
        justifyContent: "space-between"
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    iconBox: {
        alignSelf: 'center'
    },
    iconsBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    p: {
        fontSize: Dimensions.get('screen').width * 0.035,
    }
});