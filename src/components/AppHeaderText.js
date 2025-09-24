import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FONT_SIZE } from '../utils/spacing';
import { COLORS, FONTS } from '../constants';

const AppHeaderText = ({ title, subtitle }) => (
  <>
    <Text style={styles.title}>{title}</Text>
    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
  </>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.xxlarge,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: FONTS.medium500,
    fontSize: FONT_SIZE.normal,
    fontWeight: '500',
    color: COLORS.grayText1,
  },
});

export default AppHeaderText;
