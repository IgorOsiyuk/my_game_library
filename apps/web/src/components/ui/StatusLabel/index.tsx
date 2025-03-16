import * as S from './style';

export enum StatusEnum {
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
}

interface StatusLabelIProps {
  variant: StatusEnum;
  label: string;
}

const StatusLabel = ({ variant, label }: StatusLabelIProps) => {
  return <S.StatusBox variant={variant}>{label}</S.StatusBox>;
};

export default StatusLabel;
