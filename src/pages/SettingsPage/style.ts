import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    title: {
        fontSize: Dimensions.get('screen').width * 0.04,
        fontWeight: 'bold'
    }
});
