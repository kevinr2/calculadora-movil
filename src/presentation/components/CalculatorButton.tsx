import {View, Text, Pressable} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  dougleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  dougleSize,
  blackText,
  onPress,
}: Props) => {
  return (
    <>
      <Pressable
        onPress={() => onPress()}
        style={({pressed}) => ({
          ...styles.button,
          backgroundColor: color,
          width: dougleSize ? 220 : 100,
          opacity: pressed ? 0.8 : 1,
        })}>
        <Text
          style={{
            ...styles.buttonText,
            color: blackText ? 'black' : 'white',
          }}>
          {label}
        </Text>
      </Pressable>
    </>
  );
};
