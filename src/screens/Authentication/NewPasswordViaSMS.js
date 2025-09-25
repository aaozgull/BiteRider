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

const NewPasswordViaSMS = ({ navigation }) => {
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={isIOS ? 'padding' : 'height'}
      >
        <HeaderComponent leftIcon="chevron" />

        {/* Scrollable content so inputs don’t get hidden */}
        <ScrollView
          contentContainerStyle={styles.subContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>New password sent via SMS</Text>
          <Text style={styles.subtitle}>
            Type below the new password sent to your phone number
          </Text>
          <AppInput
            placeholder="New Password"
            value={password}
            onChangeText={setPassword}
            type="password"
          />
          <View style={styles.smsRow}>
            <Text style={styles.lable}>Didn’t get the SMS? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}
            >
              <Text style={styles.link}>Request again</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Footer stays fixed */}
        <View style={styles.bottomSection}>
          <Text style={styles.footer}>
            Jari rakhne se aap hamari{' '}
            <Text style={{ color: COLORS.primary }}> Raazdaari ki policy </Text>{' '}
            aur cookies se ittifaq karte hain
          </Text>
          <AppButton
            title="Sign in"
            onPress={() => navigation.navigate('AccountComplete')}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  subtitle: {
    fontFamily: FONTS.semiBold600,
    fontSize: FONT_SIZE.normal,
    marginBottom: 20,
    color: COLORS.grayText1,
  },

  link: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.xSmall,
    fontWeight: '700',
    color: COLORS.primary,
  },
  lable: {
    fontFamily: FONTS.semiBold600,
    fontSize: FONT_SIZE.xSmall,
    fontWeight: '600',
    color: COLORS.text,
  },
  footer: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.normal,
    marginBottom: 20,
  },
  smsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default NewPasswordViaSMS;
