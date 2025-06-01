'use client';

import Box from '@/atomic/Box';
import Button from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import Text from '@/atomic/Text';
import EditableMasonryGallery, { CollageImage } from '@/components/EditableMasonryGallery';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Collage() {
  const [images, setImages] = useState<CollageImage[]>([]);
  const addImage = () => {
    const width = Math.floor(Math.random() * 2 + 1);
    const height = Math.floor(Math.random() * 2 + 1);
    const newImage = {
      id: uuidv4(),
      src: `https://dummyimage.com/${Math.floor(Math.random() * 400) + 200}x${Math.floor(Math.random() * 300) + 200}/000/fff`,
      width,
      height,
    };
    console.log(newImage);
    setImages((prev) => [...prev, newImage]);
  };

  const exportAsImage = async () => {
    const el = document.getElementById('collage');
    if (el) {
      // const area = el.getBoundingClientRect();
      await html2canvas(el, { useCORS: true }).then(function (canvas) {
        const a = document.createElement('a');
        a.href = canvas.toDataURL('image/jpg');
        a.download = 'My file name.jpg';
        a.click();
        a.remove();
      });
      // const image = canvas.toDataURL('image/png');
      // const link = document.createElement('a');
      // link.href = image;
      // link.download = 'gallery-layout.png';
      // link.click();
    }
  };

  const removeImage = (id: string) => {
    console.log(id);
    setImages((prev) => prev.filter((image) => image.id !== id));
  };
  return (
    <FlexBox $py="s_24" $direction="column" $gap="s_56">
      <FlexBox $align="center" $justify="space-between" $width="100%">
        <Box>
          <Text color="white" size="title_M" fontWeight="bold">
            Создай свой коллаж
          </Text>
        </Box>
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <Button onClick={addImage} color="darkSecondary" spacing="s_12">
            Добавить изображение
          </Button>

          <Button onClick={() => exportAsImage()} color="darkSecondary" spacing="s_12">
            Export as PNG
          </Button>
        </div>
      </FlexBox>
      <EditableMasonryGallery images={images} removeImage={removeImage} />
    </FlexBox>
  );
}
