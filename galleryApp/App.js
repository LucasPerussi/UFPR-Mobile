import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageGallery from './components/ImageGallery';

const images = [
  'https://i.imgur.com/IZgyfAo.jpg',
  'https://i.imgur.com/n5gP1Tu.jpg',
  'https://i.imgur.com/iBJDbUP.jpg',
  'https://i.imgur.com/C7RkG1C.jpg',
  'https://i.imgur.com/RPakOLv.png',
  'https://i.imgur.com/n5gP1Tu.jpg',
  'https://i.imgur.com/RPakOLv.png',
];

const App = () => {
  return (
    <View style={styles.container}>
      <ImageGallery data={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default App;
