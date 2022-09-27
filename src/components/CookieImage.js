import React from 'react';
import { StyleSheet , Image } from 'react-native';

function CookieImage(props) {
    return (
        <Image
            style={styles.img}
            source={props.image}
        />
    );
}

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 250
    },
});

export default CookieImage;