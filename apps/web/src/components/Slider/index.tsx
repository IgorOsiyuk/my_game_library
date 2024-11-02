'use client';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Link } from '@nextui-org/react';
import Item from './Item';

const Slider = () => {
  return (
    <section className="mt-8">
      <div className="flex flex-col gap-4 rounded-2xl border border-default-100 p-4 align-top shadow-xl">
        <div className="flex flex-row justify-between">
          <h3 className="text-3xl font-bold text-default-600">Последние релизы</h3>
          <Link href="/dashboard/games">View all</Link>
        </div>
        <div>
          <Swiper
            slidesPerView={4}
            speed={1500}
            spaceBetween={'24px'}
            //   centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay]}
            className="bg-transparent"
          >
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
