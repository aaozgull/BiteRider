import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { BORDER_RADIUS, FONT_SIZE } from '../utils/spacing';
import { COLORS, FONTS } from '../constants';

const AppInput = ({ placeholder, value, onChangeText, secure }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secure}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flex: 1,
  },
  input: {
    height: 34,
    borderWidth: 1,
    borderColor: COLORS.borderGrayMedium,
    borderRadius: BORDER_RADIUS.xtiny,
    paddingHorizontal: 12,
    fontFamily: FONTS.semiBold600,
    fontSize: FONT_SIZE.xSmall,
  },
});

export default AppInput;
