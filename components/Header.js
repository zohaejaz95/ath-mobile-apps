import React from 'react'
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import styles from './styles/GenericStyles'

export default function Header() {
    return (
        <SafeAreaView style={headerStyles.header}>
            <Text>Hello World</Text>
        </SafeAreaView>
    )
}
const headerStyles = StyleSheet.create({
    header:{
        height: 50,
        backgroundColor: styles.goldenColor.color,
    }
})
