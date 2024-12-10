import GameList from '@/components/GameList';
import Slider from '@/components/Slider';
import StatItem from '@/components/StatItem';
import DoneSmile from '@/icons/done_smile.svg';
import FunSmile from '@/icons/fun_smile.svg';
import PlaySmile from '@/icons/play_smile.svg';
import SadSmile from '@/icons/sad_smile.svg';

export default function Dashboard() {
  return (
    <>
      <div className="mt-8">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-2">
            <StatItem title={'Игр в библиотеке:'} count={20} icon={<FunSmile />} />
          </div>
          <div className="col-span-2">
            <StatItem title={'Пройдено игр:'} count={20} icon={<DoneSmile />} />
          </div>
          <div className="col-span-2">
            <StatItem title={'Играю в:'} count={20} icon={<PlaySmile />} />
          </div>
          <div className="col-span-2">
            <StatItem title={'Заброшено игр:'} count={20} icon={<SadSmile />} />
          </div>
        </div>
      </div>
      <Slider />
      <GameList />
    </>
  );
}
