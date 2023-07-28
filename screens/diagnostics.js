import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardComponent = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Simply Efficient</Text>
      <Text style={styles.subtitle}>HEATING & AIR CONDITIONING</Text>
      <Text style={styles.content}>
        Greater Northwest's go-to HVAC maintenance specialists! Benefit from improved system longevity &amp; efficiency with our comprehensive solutions. Trust our expertise for top-quality service.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 25,
    shadowOpacity: 1,
    boxSizing: 'border-box',
    color: 'rgb(17, 17, 17)',
    display: 'block',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize: 16,
    //height: 293.586,
    letterSpacing: 1,
    lineHeight: 18.4,
    margin: 0,
    maxWidth: 1200,
    padding: 40,
    position: 'relative',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
    zIndex: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  content: {
    marginTop: 20,
  },
});

export default CardComponent;
