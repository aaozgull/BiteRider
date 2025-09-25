import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../components/HeaderComponent';
import AppButton from '../../components/AppButton';
import { COLORS, FONTS } from '../../constants';
import { FONT_SIZE } from '../../utils/spacing';

const AccountComplete = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        leftIcon="chevron"
        title="Account ban gaya"
        bottomBorder={true}
        rightIcon={require('../../assets/images/Authentication/cross.png')}
        onRightPress={() => navigation.goBack()}
      />

      {/* Scrollable content so inputs don’t get hidden */}
      <View style={styles.subContainer}>
        <Text style={styles.title}>Apka account kamiyabi se ban gaya </Text>
        <Text style={styles.subtitle}>
          Apni application ka safar shuru krne ke liye sign in karein
        </Text>
      </View>

      {/* Footer stays fixed */}
      <View style={styles.bottomSection}>
        <AppButton
          title="Sign in"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.background,
  },
  subContainer: {
    //paddingTop: 70,
    flex: 1,
    paddingBottom: 20, // leaves space above footer
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    paddingBottom: 10,
  },
  title: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.large,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: FONTS.semiBold600,
    fontSize: FONT_SIZE.normal,
    //marginBottom: 20,
    color: COLORS.grayText1,
  },

  footer: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.normal,
    marginBottom: 20,
  },
});

export default AccountComplete;
