import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { BORDER_RADIUS, FONT_SIZE } from '../utils/spacing';
import { COLORS, FONTS } from '../constants';

const AppInput = ({ placeholder, value, onChangeText, type = 'text' }) => {
  const [secure, setSecure] = useState(type === 'password');
  return (
    <View style={[styles.container, type === 'password' && styles.row]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={type === 'password' ? secure : false}
        autoCapitalize={type === 'email' ? 'none' : 'sentences'}
        maxLength={35}
        keyboardType={
          type === 'email'
            ? 'email-address'
            : type === 'phone'
            ? 'phone-pad'
            : 'default'
        }
      />
      {type === 'password' && (
        <TouchableOpacity
          onPress={() => setSecure(!secure)}
          style={styles.iconRightContainer}
        >
          <Image
            source={
              secure
                ? require('../assets/images/Authentication/invisible.png')
                : require('../assets/images/Authentication/visible.png')
            }
            //style={styles.iconRight}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flex: 1,
    paddingHorizontal: 12,

    height: 34,
    borderWidth: 1,
    borderColor: COLORS.borderGrayMedium,
    borderRadius: BORDER_RADIUS.xtiny,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    paddingVertical: 8,
    fontFamily: FONTS.semiBold600,
    fontSize: FONT_SIZE.xSmall,
  },
});

export default AppInput;
