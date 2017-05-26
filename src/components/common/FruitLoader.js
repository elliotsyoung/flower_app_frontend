import React from 'react';
import { View, Image, Text } from 'react-native';
import { FadeInView } from './FadeInView'

const FruitLoader = ({ size, text }) => {
  const sizes = {tiny: 25, small: 50, medium: 100, large: 200, huge: 400};

  //the filepath must be known statically (ie. before the program runs, during build)
  //why? they don't really explain it.
  //https://facebook.github.io/react-native/docs/images.html
  //this means each one needs to use a require statement with a static string literal rather than first generating a string and then requiring.
  //so don't change this!
  const images = [require('./../../images/loading_banana.gif'), require('./../../images/loading_peach.gif'), require('./../../images/loading_watermelon.gif')];
  
  return (
    <View style={styles.loaderStyle}>
      <FadeInView>
        <Image
            style={{width: sizes[size], height: sizes[size]}}
            source={images[~~(Math.random() * 3)]}
          />
        <Text style={{ textAlign: 'center' }}>{ text }</Text>
      </FadeInView>
    </View>
  );
};

const styles = {
  loaderStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export { FruitLoader };
