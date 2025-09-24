import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppInput from '../../components/AppInput';
import HeaderComponent from '../../components/HeaderComponent';
import AppButton from '../../components/AppButton';
import { COLORS, FONTS } from '../../constants';
import { FONT_SIZE } from '../../utils/spacing';

const Password = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent leftIcon="chevron" />

      {/* Main content */}
      <View style={styles.subContainer}>
        <Text style={styles.title}>Password</Text>
        <AppInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <AppInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secure
        />
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={{ marginVertical: 10 }}>
          <LablePoints lable="Kam az kam 10 characters" />
          <LablePoints lable="1 bara harf (A–Z)" />
          <LablePoints lable="1 chota harf (a–z)" />
          <LablePoints lable="1 number (0–9)" />
          <LablePoints lable="1 khaas character (!@#$%^&*)" />
        </View>
      </View>

      {/* Footer + Button at bottom */}
      <View style={styles.bottomSection}>
        <Text style={styles.footer}>
          Jari rakhne se aap hamari{' '}
          <Text style={{ color: COLORS.primary }}> Raazdaari ki policy </Text>{' '}
          aur cookies se ittifaq karte hain
        </Text>
        <AppButton
          title="Continue"
          onPress={() => navigation.navigate('PhoneNumber')}
        />
      </View>
    </SafeAreaView>
  );
};

const LablePoints = ({ lable }) => {
  return (
    <View style={styles.row}>
      <Image
        source={require('../../assets/images/Authentication/tick.png')}
        style={styles.image}
      />
      <Text style={styles.lable}>{lable}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: COLORS.background,
//   },

//   subContainer: { flex: 1, paddingTop: 70 },
//   title: {
//     fontFamily: FONTS.bold700,
//     fontSize: FONT_SIZE.xxxlarge,
//     fontWeight: '700',
//     marginBottom: 20,
//   },
//   link: {
//     fontFamily: FONTS.bold700,
//     fontSize: FONT_SIZE.xSmall,
//     fontWeight: '700',
//     color: COLORS.primary,
//     marginBottom: 12,
//   },
//   row: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
//   image: { marginRight: 7 },
//   lable: {
//     fontFamily: FONTS.semiBold600,
//     fontSize: FONT_SIZE.normal,
//     fontWeight: '600',
//   },
//   footer: {
//     fontFamily: FONTS.bold700,
//     fontSize: FONT_SIZE.normal,
//     marginVertical: 20,
//     // textAlign: 'center',
//   },
//   bottomSection: {
//     paddingBottom: 20,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  subContainer: {
    flex: 1, // takes up available space
    paddingTop: 70,
  },
  bottomSection: {
    paddingBottom: 20,
  },
  title: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.xxxlarge,
    fontWeight: '700',
    marginBottom: 20,
  },
  link: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.xSmall,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 12,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
  image: { marginRight: 7 },
  lable: {
    fontFamily: FONTS.semiBold600,
    fontSize: FONT_SIZE.normal,
    fontWeight: '600',
  },
  footer: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.normal,
    marginBottom: 20,
  },
});

export default Password;
