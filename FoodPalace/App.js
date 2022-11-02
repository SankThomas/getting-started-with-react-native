import {View, Text, StyleSheet, ScrollView, Image, Button} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <ScrollView style={globals.mainContainer}>
      <View style={globals.imgContainer}>
        <Image
          source={require('./assets/plate-image.png')}
          style={globals.image}
          borderRadius={10}
        />
      </View>
      <View style={globals.textParent}>
        <Text style={globals.heading}>Chicken Curry</Text>
        <Text style={globals.text}>
          She who arrival end how fertile enabled. Brother she add yet see
          minuter natural smiling article painted. Themselves at dispatched
          interested insensible am be prosperous reasonably it. In either so
          spring wished.
        </Text>

        <Button title="Add to cart" color="#000000" />

        <Text style={globals.wishlist}>Add to wishlist</Text>
      </View>
    </ScrollView>
  );
}

const globals = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingVertical: 52,
  },
  imgContainer: {
    alignItems: 'center',
  },
  image: {
    width: 380,
    height: 300,
  },
  textParent: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#000000',
  },
  text: {
    color: '#525252',
    fontSize: 16,
    lineHeight: 30,
    marginBottom: 32,
  },
  wishlist: {
    color: '#525252',
    fontSize: 16,
    lineHeight: 30,
    marginTop: 32,
  },
});
