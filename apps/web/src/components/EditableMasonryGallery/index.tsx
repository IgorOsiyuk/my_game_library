'use client';
import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
interface Image {
  id: string;
  src: string;
  width: number;
  height: number;
}

const ResponsiveGridLayout = WidthProvider(Responsive);
const MyGridLayout = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [nextId, setNextId] = useState(4);

  const addImage = () => {
    const newImage = {
      id: nextId.toString(),
      src: `https://dummyimage.com/${Math.floor(Math.random() * 400) + 200}x${Math.floor(Math.random() * 300) + 200}/000/fff`,
      width: Math.floor(Math.random() * 2 + 1),
      height: Math.floor(Math.random() * 2 + 1),
    };
    setImages([...images, newImage]);
    setNextId(nextId + 1);
  };

  const removeImage = (id: string) => {
    console.log(id);
    setImages(images.filter((image) => image.id !== id));
  };

  const layout = images.map((image, index) => ({
    i: image.id,
    x: (index % 8) * 2,
    y: Math.floor(index / 8),
    w: image.width,
    h: image.height,
  }));
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const exportAsImage = async () => {
    const el = document.getElementById('test');
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

  return (
    <div>
      <h1>Галерея изображений</h1>
      <button onClick={addImage} style={{ marginBottom: '10px' }}>
        Добавить изображение
      </button>
      <button onClick={() => exportAsImage()} style={{ marginBottom: '20px' }}>
        Export as PNG
      </button>
      <div ref={galleryRef} id="test">
        <ResponsiveGridLayout
          className="layout"
          // layouts={{ lg: layout, md: layout, sm: layout, xs: layout, xxs: layout }}
          layouts={{ lg: layout, md: layout, sm: layout, xs: layout, xxs: layout }}
          cols={{ lg: 8, md: 6, sm: 4, xs: 4, xxs: 2 }}
          // rowHeight={100}
          // width={1200}

          isResizable={true}
          isDraggable={true}
        >
          {images.map((image) => (
            <div key={image.id} style={{ position: 'relative' }}>
              <img src={image.src} alt={image.id} style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
              <div
                onClick={(e) => {
                  e.preventDefault();

                  removeImage(image.id);
                }}
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 5,
                  background: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  zIndex: 22,
                }}
              >
                Удалить
              </div>
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
      {/* style=
      {{
        '.react-grid-item.react-grid-placeholder': {
          opacity: 1,
        },
      }} */}
    </div>
  );
};

export default MyGridLayout;
