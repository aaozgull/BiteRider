import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import AppButton from '../../components/AppButton';
import DropdownSelector from '../../components/DropdownSelector';
import { COLORS, FONTS } from '../../constants';
import { FONT_SIZE } from '../../utils/spacing';

const RiderWelcome2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/Welcome/Logo.png')} />
      </View>
      <Text style={styles.title}>Welcome!</Text>

      <Text style={styles.title}>
        To <Text style={{ color: COLORS.primary }}>Bite</Text> Rider App
      </Text>
      <DropdownSelector value="Pakistan" />
      <AppButton
        title="Sign in"
        onPress={() => navigation.navigate('Signup')}
        style={{ marginTop: 10 }}
      />
      <AppButton
        title="Apply now"
        onPress={() => {}}
        textColor={COLORS.text}
        backgroundColor={COLORS.background}
        style={{ marginTop: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: { alignItems: 'center', marginBottom: 20, marginLeft: 80 },
  title: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.xxxlarge,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default RiderWelcome2;
