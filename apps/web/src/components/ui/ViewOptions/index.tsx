'use client';

import Button from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import SvgImage from '@/atomic/SvgImage';
import CardViewIcon from '@/icons/card_view.svg';
import ListViewIcon from '@/icons/list_view.svg';
import { css } from 'styled-components';

const ViewOptions = () => {
  return (
    <FlexBox
      $gap="s_12"
      $justify="flex-start"
      $sx={({ theme }) => css`
        button:hover,
        button:hover * {
          color: ${theme.colors.white};
          background-color: ${theme.colors.dark};
          stroke: ${theme.colors.white};
          transition: all 0.25s;
        }
      `}
    >
      <Button
        spacing="s_12"
        onClick={(e) => {
          e.preventDefault();
        }}
        icon={
          <SvgImage $height="20px" $width="20px" $fill="white">
            <ListViewIcon />
          </SvgImage>
        }
      />
      <Button
        color="dark"
        spacing="s_12"
        onClick={(e) => {
          e.preventDefault();
        }}
        icon={
          <SvgImage $height="20px" $width="20px" $fill="white">
            <CardViewIcon />
          </SvgImage>
        }
      />
    </FlexBox>
  );
};

export default ViewOptions;
