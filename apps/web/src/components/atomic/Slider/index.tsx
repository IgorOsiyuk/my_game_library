import { ChangeEvent, useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './style';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  register: UseFormRegisterReturn<string>;
  value?: number;
}

export const Slider = ({ min = 0, max = 5, step = 0.1, defaultValue = 0, register, value }: SliderProps) => {
  const [internalValue, setInternalValue] = useState(value || defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setInternalValue(newValue);
  };

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  useEffect(() => {
    setInternalValue(defaultValue);
  }, [defaultValue]);

  const displayValue = value !== undefined ? value : internalValue;
  const progress = ((displayValue - min) / (max - min)) * 100;

  return (
    <S.SliderWrapper>
      <S.SliderTrack>
        <S.SliderProgress $progress={progress} />
      </S.SliderTrack>
      <S.SliderThumb $progress={progress} />
      <S.HiddenInput
        type="range"
        min={min}
        max={max}
        step={step}
        value={displayValue}
        {...register}
        onChange={(e) => {
          handleChange(e);
          register.onChange(e);
        }}
      />
    </S.SliderWrapper>
  );
};
