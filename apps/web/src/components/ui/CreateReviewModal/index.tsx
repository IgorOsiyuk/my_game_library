import Box from '@/atomic/Box';
import Button, { SizeEnum } from '@/atomic/Button';
import { FileUpload } from '@/atomic/FileUpload';
import FlexBox from '@/atomic/FlexBox';
import Input from '@/atomic/Input';
import { Modal } from '@/atomic/Modal';
import TextArea from '@/atomic/TextArea';
import { theme } from '@/styles/theme';
import { css } from 'styled-components';
import GameScoreSlider from '../GameScoreSlider';
import GameStatus from '../GameStatus';
interface CreateReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const CreateReviewModal = ({ isOpen, onClose }: CreateReviewModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FlexBox
        $direction="row"
        $gap="s_20"
        $sx={css`
          padding: 0 157px;
        `}
      >
        <Box $width="448px" $height="448px">
          <FileUpload onFileSelect={() => {}} />
        </Box>
        <Box $width="100%">
          <FlexBox $direction="column" $gap="s_14" $width="100%">
            <Input name="Название игры" onChange={() => {}} value="" placeholder="Название игры" />
            <FlexBox $direction="row" $gap="s_14">
              <Input name="Разработчик" onChange={() => {}} value="" placeholder="Разработчик" />
              <Input name="Жанр" onChange={() => {}} value="" placeholder="Жанр" />
            </FlexBox>
            <FlexBox $direction="row" $gap="s_14">
              <Input name="Платформа" onChange={() => {}} value="" placeholder="Платформа" />
              <Input name="Год выпуска" onChange={() => {}} value="" placeholder="Год выпуска" />
            </FlexBox>
            <Box
              $radius="rounded_small"
              $backgroundColor="dark"
              $py="s_14"
              $px="s_12"
              $sx={css`
                border: 1px solid ${theme.colors.grey};
              `}
            >
              <FlexBox $direction="row" $gap="s_14" $width="100%">
                <GameStatus label="В разработке" name="game-status" value="В разработке" checked />
                <GameStatus label="Трейлер" name="game-status" value="Трейлер" />
                <GameStatus label="Трейлер2" name="game-status" value="Трейлер2" />
                <GameStatus label="Трейлер3" name="game-status" value="Трейлер3" />
              </FlexBox>
            </Box>
            <Input name="Сложность" onChange={() => {}} value="" placeholder="Сложность" />
            <Box $height="206px">
              <TextArea name="Сюжет" onChange={() => {}} value="" placeholder="Сюжет" />
            </Box>
            <FlexBox $direction="row" $gap="s_14">
              <GameScoreSlider label="Оцени игру" value={0} onChange={() => {}} />
              <GameScoreSlider label="Оценка сюжет" value={0} onChange={() => {}} />
            </FlexBox>
            <FlexBox $direction="row" $gap="s_14">
              <GameScoreSlider label="Оценка art" value={0} onChange={() => {}} />
              <GameScoreSlider label="Оценка геймплей" value={0} onChange={() => {}} />
            </FlexBox>
            <Box $height="206px">
              <TextArea name="Напиши отзыв" onChange={() => {}} value="" placeholder="Напиши отзыв" />
            </Box>
          </FlexBox>
          <FlexBox
            $direction="row"
            $gap="s_24"
            $width="100%"
            $mt="s_24"
            $sx={css`
              & > button {
                align-items: center;
                justify-content: center;
              }
            `}
          >
            <Button buttonSize={SizeEnum.FULL} color="accent" spacing="s_24">
              Save
            </Button>
            <Button buttonSize={SizeEnum.FULL} color="grey" spacing="s_24">
              Delete game
            </Button>
          </FlexBox>
        </Box>
      </FlexBox>
    </Modal>
  );
};

export default CreateReviewModal;
