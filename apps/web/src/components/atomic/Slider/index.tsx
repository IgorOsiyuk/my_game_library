import { ChangeEvent, useEffect, useState } from 'react';
import * as S from './style';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange: (value: number) => void;
}

export const Slider = ({ min = 0, max = 5, step = 0.1, defaultValue = 0, onChange }: SliderProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const progress = ((value - min) / (max - min)) * 100;

  return (
    <S.SliderWrapper>
      <S.SliderTrack>
        <S.SliderProgress $progress={progress} />
      </S.SliderTrack>
      <S.SliderThumb $progress={progress} />
      <S.HiddenInput type="range" min={min} max={max} step={step} value={value} onChange={handleChange} />
    </S.SliderWrapper>
  );
};
