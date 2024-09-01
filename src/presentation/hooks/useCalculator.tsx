import {useEffect, useRef, useState} from 'react';

enum operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lasOperation = useRef<operator>();

  useEffect(() => {
    if (lasOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lasOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubRsult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  const clean = () => {
    setNumber('0');
    lasOperation.current = undefined;
    setFormula('');
  };

  const deleteOpereation = () => {
    let currentSing = '';
    let temporalNumber = number;
    if (number.includes('-')) {
      currentSing = '-';
      temporalNumber = number.substring(1);
    }
    if (temporalNumber.length > 1) {
      return setNumber(currentSing + temporalNumber.slice(0, -1));
    }
    setNumber('0');
  };
  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      //punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }
      //evaluar si es otro cero y no tenenemos  punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      //evaluar si es diferente de cero, no hay punto , y  es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      //evitar 0000
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith('-')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const DivideOperation = () => {
    setLastNumber();
    lasOperation.current = operator.divide;
  };
  const mulitOperation = () => {
    setLastNumber();
    lasOperation.current = operator.multiply;
  };
  const subtractOperation = () => {
    setLastNumber();
    lasOperation.current = operator.subtract;
  };
  const addperation = () => {
    setLastNumber();
    lasOperation.current = operator.add;
  };
  const calculateResult = () => {
    const result = calculateSubRsult();
    setFormula(`${result}`);
    lasOperation.current = undefined;
    setPrevNumber('0');
  };
  const calculateSubRsult = (): Number => {
    const [firtValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firtValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case operator.add:
        return num1 + num2;

      case operator.subtract:
        return num1 - num2;

      case operator.multiply:
        return num1 * num2;

      case operator.divide:
        return num1 / num2;

      default:
        throw new Error('operation not implement');
    }
  };

  return {
    //propiedad
    number,
    prevNumber,
    formula,

    //metodo
    buildNumber,
    clean,
    deleteOpereation,
    toggleSign,
    lasOperation,
    setLastNumber,
    DivideOperation,
    mulitOperation,
    subtractOperation,
    addperation,
    calculateResult,
    calculateSubRsult,
  };
};
