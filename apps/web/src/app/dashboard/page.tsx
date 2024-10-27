'use client';
import useAxiosAuth from '@/lib/hooks/useAxiosAuth';

export default function Dashboard() {
  const axiosAuth = useAxiosAuth();
  return (
    <>
      <div className="mt-8">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-2">
            <div className="relative rounded-2xl border border-gray-800 bg-gray-800 p-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-4 right-3 h-14 w-14 text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <div className="mt-5 text-2xl font-medium leading-8 text-gray-100">20</div>
              <div className="text-sm text-gray-500">Games</div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative rounded-2xl border border-gray-800 bg-gray-800 p-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-4 right-3 h-14 w-14 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <div className="flex items-center justify-between">
                <i className="fab fa-behance text-xl text-gray-400"></i>
              </div>
              <div className="mt-5 text-2xl font-medium leading-8 text-gray-100">99</div>
              <div className="text-sm text-gray-500">Completed</div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative rounded-2xl border border-gray-800 bg-gray-800 p-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-4 right-3 h-14 w-14 text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex items-center justify-between">
                <i className="fab fa-codepen text-xl text-gray-400"></i>
              </div>
              <div className="mt-5 text-2xl font-medium leading-8 text-gray-100">50</div>
              <div className="text-sm text-gray-500">in progress</div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative rounded-2xl border border-gray-800 bg-gray-800 p-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-4 right-3 h-14 w-14 text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex items-center justify-between">
                <i className="fab fa-codepen text-xl text-gray-400"></i>
              </div>
              <div className="mt-5 text-2xl font-medium leading-8 text-gray-100">50</div>
              <div className="text-sm text-gray-500">Abandoned</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid-cols-8 justify-start rounded-2xl border border-gray-800 bg-gray-800 px-4 py-8 align-top shadow-lg">
          <div className="grid-cols-8 justify-start rounded-2xl border border-gray-800 bg-gray-800 align-top shadow-lg">
            <div className="col-span-8 text-left text-gray-100">
              <h3 className="mb-6 text-3xl font-bold">Favourite games</h3>
            </div>

            <div className="grid grid-cols-8 gap-6">
              <div className="shadow-secondary-1 dark:bg-surface-dark col-span-2 rounded-lg bg-white">
                <a href="#!">
                  <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="" />
                </a>
                <div className="text-surface p-6 dark:text-white">
                  <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
                  <p className="mb-4 text-base">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    className="shadow-primary-3 hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 active:shadow-primary-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-primary-600 dark:shadow-black/30"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Button
                  </button>
                </div>
              </div>
              <div className="shadow-secondary-1 dark:bg-surface-dark col-span-2 rounded-lg bg-white">
                <a href="#!">
                  <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="" />
                </a>
                <div className="text-surface p-6 dark:text-white">
                  <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
                  <p className="mb-4 text-base">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    className="shadow-primary-3 hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 active:shadow-primary-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-primary-600 dark:shadow-black/30"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Button
                  </button>
                </div>
              </div>
              <div className="shadow-secondary-1 dark:bg-surface-dark col-span-2 rounded-lg bg-white">
                <a href="#!">
                  <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="" />
                </a>
                <div className="text-surface p-6 dark:text-white">
                  <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
                  <p className="mb-4 text-base">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    className="shadow-primary-3 hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 active:shadow-primary-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-primary-600 dark:shadow-black/30"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Button
                  </button>
                </div>
              </div>
              <div className="shadow-secondary-1 dark:bg-surface-dark col-span-2 rounded-lg bg-white">
                <a href="#!">
                  <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="" />
                </a>
                <div className="text-surface p-6 dark:text-white">
                  <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
                  <p className="mb-4 text-base">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    className="shadow-primary-3 hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 active:shadow-primary-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-primary-600 dark:shadow-black/30"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
