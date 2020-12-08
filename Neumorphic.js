import React from 'react';

export default function Neumorphic({ children, size, style, width, height, background, borderRadius }) {
    return (
        <span style={ styles.topShadow }>
            <span style={ styles.bottomShadow }>
                <span style={{
                    ...styles.inner,
                    width: size || width || 40,
                    height: size || height || 40,
                    borderRadius: borderRadius || size / 2 || width / 2,
                    background: background || '#DEE9F7',
                    ...style
                }}>
                {{ children }}
                </span>
            </span>
        </span>
    )
}

const styles = {
    topShadow: {
        boxShadow: '-6px -6px 6px 1px #FBFFFF'
    },
    bottomShadow: {
        boxShadow: '6px 6px 6px 1px #FBFFFF'
    },
    inner: {
        backgroundColor: '#dee9f7',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e2ecfd',
    }
}