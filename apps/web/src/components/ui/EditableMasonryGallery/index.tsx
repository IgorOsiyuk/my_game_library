'use client';
import Box from '@/atomic/Box';
import Button from '@/atomic/Button';
import SvgImage from '@/atomic/SvgImage';
import BinIcon from '@/icons/bin.svg';
import { useRef } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { css } from 'styled-components';

export interface CollageImage {
  id: string;
  src: string;
  width: number;
  height: number;
}

const ResponsiveGridLayout = WidthProvider(Responsive);

const MyGridLayout = ({ images, removeImage }: { images: CollageImage[]; removeImage: (id: string) => void }) => {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  // Базовая конфигурация layout
  const layout = images.map((image, index) => ({
    i: image.id,
    x: (index % 4) * 2, // Базовое размещение в 4 колонки
    y: Math.floor(index / 4),
    w: image.width,
    h: image.height,
    minW: 1,
    minH: 1,
  }));

  // Базовые breakpoints
  const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
  const cols = { lg: 24, md: 10, sm: 6, xs: 4, xxs: 2 };

  return (
    <Box
      ref={galleryRef}
      id="collage"
      $sx={({ theme }) => css`
        background-color: ${theme.colors.darkSecondary};
        overflow: hidden;
        min-height: 100px;
        min-width: 100px;
      `}
    >
      <ResponsiveGridLayout
        className="layout"
        isDraggable={true}
        isResizable={true}
        allowOverlap={true}
        margin={[0, 0]}
        containerPadding={[0, 0]}
        useCSSTransforms={true}
      >
        {images.map((image) => (
          <div key={image.id} style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={image.src}
              alt={image.id}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <Box
              data-grid-static="true"
              $sx={css`
                position: absolute;
                top: 4px;
                right: 4px;
                z-index: 1000;
                pointer-events: auto;
              `}
            >
              <Button
                // as="button"
                // className="delete-button-container"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  removeImage(image.id);
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                sx={({ theme }) => css`
                  position: 'absolute';
                  top: '4px';
                  right: '4px';
                  z-index: 1000;
                  background-color: ${theme.colors.white};
                  border-radius: ${theme.radius.rounded_small};
                  padding: ${theme.spacing.s_4};
                  margin: 0;
                  cursor: pointer;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  &:hover {
                    background-color: ${theme.colors.greySecondary};
                    svg {
                      path {
                        fill: ${theme.colors.white};
                        transition: fill 0.3s ease;
                      }
                    }
                  }
                `}
              >
                <SvgImage $width="16px" $height="16px" $fill="greySecondary">
                  <BinIcon />
                </SvgImage>
              </Button>
            </Box>
          </div>
        ))}
      </ResponsiveGridLayout>

      <style jsx global>{`
        .react-grid-layout {
          position: relative;
        }

        .react-grid-item {
          transition: all 200ms ease;
          transition-property: left, top;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .react-grid-item:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .react-grid-item.cssTransforms {
          transition-property: transform;
        }

        .delete-button-container {
          pointer-events: auto !important;
          touch-action: none !important;
          z-index: 1000 !important;
          position: relative !important;
        }

        .delete-button-container * {
          pointer-events: auto !important;
          touch-action: none !important;
        }

        .delete-button-container:hover {
          transform: scale(1.1);
          transition: transform 0.1s ease;
        }

        .react-grid-item > .react-resizable-handle {
          position: absolute;
          width: 20px;
          height: 20px;
          bottom: 0;
          right: 0;
          -webkit-mask-image: url('/icons/resize.svg');
          mask-image: url('/icons/resize.svg');
          background-color: red;
          background-position: bottom right;
          padding: 0 3px 3px 0;
          background-repeat: no-repeat;
          background-origin: content-box;
          box-sizing: border-box;
          cursor: se-resize;
        }

        .react-grid-placeholder {
          background: rgba(0, 0, 0, 0.1);
          opacity: 0.2;
          transition-duration: 100ms;
          z-index: 2;
          user-select: none;
          border-radius: 4px;
        }
      `}</style>
    </Box>
  );
};

export default MyGridLayout;
