import Box from '@/atomic/Box';
import Select, { ActionMeta, MultiValue, SingleValue } from 'react-select';
import styled, { css, ExecutionContext } from 'styled-components';

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  value?: SelectOption | SelectOption[];
  onChange: (
    option: SingleValue<SelectOption> | MultiValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>,
  ) => void;
  placeholder?: string;
  className?: string;
  sx?: ((context: ExecutionContext) => ReturnType<typeof css>) | ReturnType<typeof css>;
  isMulti?: boolean;
}

const StyledSelect = styled(Select<SelectOption, boolean>)`
  .select__control {
    background-color: ${({ theme }) => theme.colors.darkSecondary};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: ${({ theme }) => theme.radius.rounded_small};
    min-height: 55px;
    padding: 0 ${({ theme }) => theme.spacing.s_12};
    box-shadow: none;
    cursor: pointer;

    &:hover {
      border-color: ${({ theme }) => theme.colors.greySecondary};
    }
  }

  .select__menu {
    background-color: ${({ theme }) => theme.colors.darkSecondary};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: ${({ theme }) => theme.radius.rounded_small};
    padding: ${({ theme }) => theme.spacing.s_4};
  }

  .select__option {
    padding: ${({ theme }) => theme.spacing.s_8} ${({ theme }) => theme.spacing.s_6};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.radius.rounded_small};
    margin-top: ${({ theme }) => theme.spacing.s_4};
    &:active {
      background-color: ${({ theme }) => theme.colors.grey};
    }
    &--is-focused {
      background-color: ${({ theme }) => theme.colors.grey};
    }

    &--is-selected {
      background-color: ${({ theme }) => theme.colors.grey};
      color: white;

      &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
      }
    }
  }
  .select__value-container {
    padding: 0;
    .select__multi-value {
      gap: ${({ theme }) => theme.spacing.s_4};
      background-color: ${({ theme }) => theme.colors.grey};
      border-radius: ${({ theme }) => theme.radius.rounded_small};
      padding: ${({ theme }) => theme.spacing.s_4} ${({ theme }) => theme.spacing.s_6};
      margin: 0;
      margin-right: ${({ theme }) => theme.spacing.s_4};
    }
  }
  .select__indicator-separator {
    background-color: ${({ theme }) => theme.colors.grey};
  }
  .select__multi-value__remove {
    padding-left: ${({ theme }) => theme.spacing.s_2};
    padding-right: ${({ theme }) => theme.spacing.s_2};
    &:hover {
      background-color: ${({ theme }) => theme.colors.redSecondary};
      color: ${({ theme }) => theme.colors.red};
    }
  }
  .select__single-value,
  .select__multi-value__label {
    font-size: ${({ theme }) => theme.fontSizes.body_M};
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
  }

  .select__placeholder {
    color: ${({ theme }) => theme.colors.greySecondary};
  }
`;

export const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder = 'Выберите опцию',
  className,
  sx,
  isMulti = false,
}: CustomSelectProps) => {
  return (
    <Box $sx={sx}>
      <StyledSelect
        menuIsOpen={true}
        closeMenuOnSelect={false}
        className={className}
        classNamePrefix="select"
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isSearchable={false}
        isClearable
        isMulti={isMulti}
      />
    </Box>
  );
};
