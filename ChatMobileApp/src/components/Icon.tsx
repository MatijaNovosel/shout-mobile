import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

MIcon.loadFont();

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface Props {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
  style?: any;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

export const MaterialIcon = ({size, name, color, style}: Props) => (
  <MIcon style={style} name={name} size={IconSizes[size]} color={color} />
);