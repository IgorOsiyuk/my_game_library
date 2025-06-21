'use client';

import Button from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import PlusIcon from '@/icons/plus.svg';
import { FilterType } from '@/stores/store';
import { css } from 'styled-components';
import SkeletonFilterOptions from './SkeletonFilterOptions';

interface ReviewCounts {
  total: number;
  completed: number;
  inProgress: number;
  abandoned: number;
  planned: number;
  favorites: number;
}

export interface FilterOptionsProps {
  selectedFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  reviewCounts: ReviewCounts | null;
  isLoading: boolean;
}

const FilterOptions = ({ selectedFilter, onFilterChange, reviewCounts, isLoading }: FilterOptionsProps) => {
  if (isLoading) {
    return <SkeletonFilterOptions />;
  }

  if (!reviewCounts) {
    return null;
  }

  return (
    <FlexBox
      $gap="s_12"
      $justify="flex-start"
      $sx={({ theme }) => css`
        button:hover {
          background-color: ${theme.colors.accentSecondary};
          transition: all 0.25s;
          span {
            color: ${theme.colors.white};
          }
          svg {
            path {
              fill: ${theme.colors.white};
            }
          }
        }
      `}
    >
      {reviewCounts.total > 0 && (
        <Button
          textSize="body_M"
          color={selectedFilter === FilterType.ALL ? 'accent' : 'darkSecondary'}
          spacing="s_12"
          onClick={(e) => {
            e.preventDefault();
            onFilterChange(FilterType.ALL);
          }}
        >
          <Text color="greySecondary" size="body_M">
            Все ({reviewCounts.total})
          </Text>
        </Button>
      )}
      {reviewCounts.completed > 0 && (
        <Button
          color={selectedFilter === FilterType.COMPLETED ? 'accent' : 'darkSecondary'}
          spacing="s_12"
          onClick={(e) => {
            e.preventDefault();
            onFilterChange(FilterType.COMPLETED);
          }}
        >
          <Text color="greySecondary" size="body_M">
            Пройдено ({reviewCounts.completed})
          </Text>
        </Button>
      )}
      {reviewCounts.inProgress > 0 && (
        <Button
          color={selectedFilter === FilterType.IN_PROGRESS ? 'accent' : 'darkSecondary'}
          spacing="s_12"
          onClick={(e) => {
            e.preventDefault();
            onFilterChange(FilterType.IN_PROGRESS);
          }}
        >
          <Text color="greySecondary" size="body_M">
            В процессе ({reviewCounts.inProgress})
          </Text>
        </Button>
      )}
      {reviewCounts.abandoned > 0 && (
        <Button
          color={selectedFilter === FilterType.ABANDONED ? 'accent' : 'darkSecondary'}
          spacing="s_12"
          onClick={(e) => {
            e.preventDefault();
            onFilterChange(FilterType.ABANDONED);
          }}
        >
          <Text color="greySecondary" size="body_M">
            Заброшено ({reviewCounts.abandoned})
          </Text>
        </Button>
      )}
      {reviewCounts.planned > 0 && (
        <Button
          color={selectedFilter === FilterType.PLANNED ? 'accent' : 'darkSecondary'}
          spacing="s_12"
          onClick={(e) => {
            e.preventDefault();
            onFilterChange(FilterType.PLANNED);
          }}
        >
          <Text color="greySecondary" size="body_M">
            Запланировано ({reviewCounts.planned})
          </Text>
        </Button>
      )}
      {reviewCounts.favorites > 0 && (
        <Button
          color={selectedFilter === FilterType.FAVORITE ? 'accent' : 'darkSecondary'}
          spacing="s_12"
          onClick={(e) => {
            e.preventDefault();
            onFilterChange(FilterType.FAVORITE);
          }}
          icon={
            <SvgImage
              $height="16px"
              $width="16px"
              $fill={selectedFilter === FilterType.FAVORITE ? 'white' : 'greySecondary'}
            >
              <PlusIcon />
            </SvgImage>
          }
        >
          <Text color="greySecondary" size="body_M">
            Избранные ({reviewCounts.favorites})
          </Text>
        </Button>
      )}
    </FlexBox>
  );
};

export default FilterOptions;
