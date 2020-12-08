import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Neumorphic({ children, size, style, borderRadius, background }) {
    return (
        <View style={ styles.topShadow }>
            <View style={ styles.bottomShadow }>
                <View style={{
                    ...styles.inner,
                    width: size || width || 40,
                    height: size || height || 40,
                    borderRadius: borderRadius || size / 2 || 20,
                    backgroundColor: background || '#DEE9F7',
                    ...style
                }}>
                    { children }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topShadow: {
        shadowOffset: {
            width: -6,
            height: -6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#fbffff'
    },
    bottomShadow: {
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#b7c4dd'
    },
    inner: {
        backgroundColor: '#dee9f7',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e2ecfd',
    }
})