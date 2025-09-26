import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../components/HeaderComponent';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import { COLORS, FONTS } from '../../constants';
import { FONT_SIZE } from '../../utils/spacing';
import { isIOS } from '../../utils/layout';
import LogoutModal from '../../components/Authentication/logoutModal';

const RiderRegistration = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        //leftIcon="chevron"
        title="Become a rider"
        bottomBorder={true}
        rightIcon={require('../../assets/images/Authentication/cross.png')}
        onleftPress={() => setModalVisible(true)}
        onRightPress={() => navigation.goBack()}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={isIOS ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.subContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Rider registration</Text>
          <Text style={styles.subtitle}>
            Tell us about yourself so we can create the right application
            journey for you
          </Text>
          <Text style={styles.lable}>Apki email kia hai?</Text>
          <AppInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            type="email"
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Footer stays fixed */}
      <View style={styles.bottomSection}>
        <AppButton
          title="Next"
          onPress={() => navigation.navigate('RiderNames')}
        />
      </View>
      <LogoutModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={() => setModalVisible(false)}
      />
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
    paddingVertical: 40,
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
    color: COLORS.grayText1,
  },
  lable: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.xxlarge,
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 5,
  },

  footer: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.normal,
    marginBottom: 20,
  },
});

export default RiderRegistration;
