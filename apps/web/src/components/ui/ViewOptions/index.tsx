'use client';

import Button from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import SvgImage from '@/atomic/SvgImage';
import CardViewIcon from '@/icons/card_view.svg';
import ListViewIcon from '@/icons/list_view.svg';
import { css } from 'styled-components';

export enum ViewType {
  LIST = 'list',
  CARD = 'card',
}

interface ViewOptionsProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const ViewOptions = ({ currentView, onViewChange }: ViewOptionsProps) => {
  return (
    <FlexBox
      $gap="s_12"
      $justify="flex-start"
      $sx={({ theme }) => css`
        button:hover {
          background-color: ${theme.colors.darkSecondary};
          transition: all 0.25s;
        }
      `}
    >
      <Button
        spacing="s_12"
        onClick={() => onViewChange(ViewType.LIST)}
        icon={
          <SvgImage $height="20px" $width="20px" $fill="white">
            <ListViewIcon />
          </SvgImage>
        }
        sx={({ theme }) => css`
          background-color: ${currentView === ViewType.LIST ? theme.colors.darkSecondary : 'transparent'};
        `}
      />
      <Button
        spacing="s_12"
        onClick={() => onViewChange(ViewType.CARD)}
        icon={
          <SvgImage $height="20px" $width="20px" $fill="white">
            <CardViewIcon />
          </SvgImage>
        }
        sx={({ theme }) => css`
          background-color: ${currentView === ViewType.CARD ? theme.colors.darkSecondary : 'transparent'};
        `}
      />
    </FlexBox>
  );
};

export default ViewOptions;
