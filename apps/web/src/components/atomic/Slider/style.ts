import styled from 'styled-components';

const SliderTrack = styled.div`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.radius.rounded_medium};
  position: relative;
`;

const SliderProgress = styled.div<{ $progress: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background: ${({ theme }) => theme.colors.accent2};
  border-radius: ${({ theme }) => theme.radius.rounded_medium};
`;

const SliderThumb = styled.div<{ $progress: number }>`
  width: 14px;
  height: 14px;
  background: ${({ theme }) => theme.colors.accent2};
  border-radius: ${({ theme }) => theme.radius.rounded_circle};
  position: absolute;
  top: 50%;
  left: ${({ $progress }) => $progress}%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 14px;
`;

export { HiddenInput, SliderProgress, SliderThumb, SliderTrack, SliderWrapper };
