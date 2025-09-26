import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppInput from '../../components/AppInput';
import HeaderComponent from '../../components/HeaderComponent';
import AppButton from '../../components/AppButton';
import { COLORS, FONTS } from '../../constants';
import { FONT_SIZE } from '../../utils/spacing';
import { isIOS } from '../../utils/layout';

const Password = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent leftIcon="chevron" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={isIOS ? 'padding' : 'height'}
      >
        {/* Scrollable content so inputs don’t get hidden */}
        <ScrollView
          contentContainerStyle={styles.subContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Password</Text>
          <AppInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            type="password"
          />
          <AppInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            //secure
            type="password"
          />

          <View style={{ marginTop: 10 }}>
            <Text style={styles.footer}>Password mai ye hona chaheye</Text>
            <LablePoints lable="Kam az kam 10 characters" />
            <LablePoints lable="1 bara harf (A–Z)" />
            <LablePoints lable="1 chota harf (a–z)" />
            <LablePoints lable="1 number (0–9)" />
            <LablePoints lable="1 khaas character (!@#$%^&*)" />
          </View>
        </ScrollView>

        {/* Footer stays fixed */}
        <View style={styles.bottomSection}>
          <Text
            style={[
              styles.footer,
              {
                marginBottom: 20,
              },
            ]}
          >
            Jari rakhne se aap hamari{' '}
            <Text style={{ color: COLORS.primary }}> Raazdaari ki policy </Text>{' '}
            aur cookies se ittifaq karte hain
          </Text>
          <AppButton
            title="Account banaiyen"
            onPress={() => navigation.navigate('AccountComplete')}
          />
        </View>
      </KeyboardAvoidingView>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
  },
  subContainer: {
    paddingTop: 70,
    paddingBottom: 20, // leaves space above footer
  },
  bottomSection: {
    paddingBottom: 10,
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Password;
