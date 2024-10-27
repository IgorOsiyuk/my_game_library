'use client';
import { Textarea } from '@nextui-org/input';
import {
  Autocomplete,
  AutocompleteItem,
  Checkbox,
  CheckboxGroup,
  Image,
  Input,
  Radio,
  RadioGroup,
} from '@nextui-org/react';
import { Slider } from '@nextui-org/slider';

const testSelect = [
  {
    key: 'asd',
    label: 'PC',
    value: 'cat',
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="mt-8">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-3 row-span-2 flex max-h-[500px] justify-center self-center overflow-hidden">
            <Image
              style={{
                height: '100%',
              }}
              alt="NextUI hero Image with delay"
              src="https://nextui.org/images/hero-card-complete.jpeg"
            />
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-4">
              <div>
                <Autocomplete label="Find your game" className="">
                  {testSelect.map((animal) => (
                    <AutocompleteItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
              </div>
              <div>
                <p>Год выпуска</p>
              </div>
              <div>
                <p>Платформы</p>
              </div>
              <div>
                <p>Жанр</p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col gap-4">
              <div>
                <Autocomplete
                  label="Платформа"
                  placeholder="Выберите платформу прохождения"
                  // className="max-w-xs"
                  defaultItems={testSelect}
                >
                  {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                </Autocomplete>
              </div>
              <div>
                <Input type="email" label="Время прохождения" />
              </div>
              <div>
                <RadioGroup size="sm" label={<p className="text-sm">Статус прохождения</p>} orientation="horizontal">
                  <Radio value="buenos-aires">В процессе</Radio>
                  <Radio value="sydney">Заброшено</Radio>
                  <Radio value="san-francisco">Пройдено</Radio>
                </RadioGroup>
              </div>
              <div>
                <CheckboxGroup
                  size="sm"
                  label={<p className="text-sm">Способ прохождения</p>}
                  orientation="horizontal"
                  color="secondary"
                >
                  <Checkbox value="buenos-aires">Соло</Checkbox>
                  <Checkbox value="sydney">Кооп</Checkbox>
                </CheckboxGroup>
              </div>
              <div>
                <Checkbox defaultSelected color="success" size="sm">
                  Перепрохождение
                </Checkbox>
              </div>

              <div>
                <Slider label="Процент прохождения" step={1} maxValue={100} minValue={0} defaultValue={10} />
              </div>
              <div>
                <p>Ваша оценка:</p>
                <div className="mt-1 flex flex-row-reverse items-center justify-end">
                  <input
                    id="hs-ratings-readonly-1"
                    type="radio"
                    className="peer -ms-5 size-5 cursor-pointer appearance-none border-0 bg-transparent text-transparent checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    value="1"
                  />
                  <label
                    htmlFor="hs-ratings-readonly-1"
                    className="pointer-events-none text-gray-300 peer-checked:text-yellow-400"
                  >
                    <svg
                      className="size-5 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  </label>
                  <input
                    id="hs-ratings-readonly-2"
                    type="radio"
                    className="peer -ms-5 size-5 cursor-pointer appearance-none border-0 bg-transparent text-transparent checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    value="2"
                  />
                  <label
                    htmlFor="hs-ratings-readonly-2"
                    className="pointer-events-none text-gray-300 peer-checked:text-yellow-400"
                  >
                    <svg
                      className="size-5 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  </label>
                  <input
                    id="hs-ratings-readonly-3"
                    type="radio"
                    className="peer -ms-5 size-5 cursor-pointer appearance-none border-0 bg-transparent text-transparent checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    value="3"
                  />
                  <label
                    htmlFor="hs-ratings-readonly-3"
                    className="pointer-events-none text-gray-300 peer-checked:text-yellow-400"
                  >
                    <svg
                      className="size-5 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  </label>
                  <input
                    id="hs-ratings-readonly-4"
                    type="radio"
                    className="peer -ms-5 size-5 cursor-pointer appearance-none border-0 bg-transparent text-transparent checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    value="4"
                  />
                  <label
                    htmlFor="hs-ratings-readonly-4"
                    className="pointer-events-none text-gray-300 peer-checked:text-yellow-400"
                  >
                    <svg
                      className="size-5 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  </label>
                  <input
                    id="hs-ratings-readonly-5"
                    type="radio"
                    className="peer -ms-5 size-5 cursor-pointer appearance-none border-0 bg-transparent text-transparent checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    value="5"
                  />
                  <label
                    htmlFor="hs-ratings-readonly-5"
                    className="pointer-events-none text-gray-300 peer-checked:text-yellow-400"
                  >
                    <svg
                      className="size-5 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <Textarea minRows={10} label="Комментарий " placeholder="Краткая или неочень заметка об игре" />
          </div>
        </div>
      </div>
    </>
  );
}
