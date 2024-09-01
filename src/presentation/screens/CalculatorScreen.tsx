import {View, Text, Pressable} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    formula,
    number,
    prevNumber,
    buildNumber,
    clean,
    deleteOpereation,
    toggleSign,
    DivideOperation,
    subtractOperation,
    addperation,
    mulitOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={styles.calulatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {formula}
        </Text>
        {formula === prevNumber ? (
          <Text style={styles.subResult}> </Text>
        ) : (
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
            {prevNumber}
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={clean}
          blackText
          label="C"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={toggleSign}
          blackText
          label="+/-"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={deleteOpereation}
          blackText
          label="del"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={DivideOperation}
          label="÷"
          color={colors.oragen}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={mulitOperation}
          label="x"
          color={colors.oragen}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={subtractOperation}
          label="-"
          color={colors.oragen}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={addperation}
          label="+"
          color={colors.oragen}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          dougleSize
        />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPress={calculateResult}
          label="="
          color={colors.oragen}
        />
      </View>
    </View>
  );
};
