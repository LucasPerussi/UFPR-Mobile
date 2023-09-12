import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const ImageGallery = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={{ uri: item }} style={styles.image} />
        </View>
      )}
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 2,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
  },
});

export default ImageGallery;
