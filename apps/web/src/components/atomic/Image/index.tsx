import NextImage, { ImageProps as NextImageProps } from 'next/image';
import styled, { css, ExecutionContext } from 'styled-components';

interface ImageWrapperProps {
  $sx?: ((context: ExecutionContext) => ReturnType<typeof css>) | ReturnType<typeof css>;
}

interface ImageProps extends NextImageProps, ImageWrapperProps {}

const ImageWrapper = styled.div<ImageWrapperProps>`
  display: block;
  position: relative;
  height: fit-content;
  width: 100%;
  overflow: hidden;
  ${({ $sx }) => $sx};
`;

const Image = ({ $sx, src, alt, ...props }: ImageProps) => {
  return (
    <ImageWrapper $sx={$sx}>
      <NextImage
        src={src}
        alt={alt}
        style={{
          objectFit: 'cover',
          ...props.style,
        }}
        {...props}
      />
    </ImageWrapper>
  );
};

export default Image;
