export default function Games() {
  return (
    <div className="mt-8">
      <section className="antialiased">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col space-y-3 p-4 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
            <div className="flex flex-1 items-center space-x-2">
              <h5>
                <span className="text-gray-500">All Games: </span>
                <span className="dark:text-white">123456</span>
              </h5>
              <h5 className="ml-1 text-gray-500 dark:text-gray-400">1-100 (436)</h5>

              <div
                id="results-tooltip"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              >
                Showing 1-100 of 436 results
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
          </div>
          <div className="mx-4 flex flex-col items-stretch justify-between space-y-3 border-t py-4 dark:border-gray-700 md:flex-row md:items-center md:space-x-3 md:space-y-0">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    placeholder="Search for products"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  />
                </div>
              </form>
            </div>
            <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <button
                type="button"
                id="createProductButton"
                data-modal-toggle="createProductModal"
                className="flex items-center justify-center rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  className="-ml-1 mr-1.5 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add product
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="p-4">
                    Game name
                  </th>
                  <th scope="col" className="p-4">
                    Platform
                  </th>
                  <th scope="col" className="p-4">
                    Type
                  </th>
                  <th scope="col" className="p-4">
                    Completed
                  </th>
                  <th scope="col" className="p-4">
                    Time spend
                  </th>
                  <th scope="col" className="p-4">
                    Rating
                  </th>

                  <th scope="col" className="p-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="mr-3 flex items-center">
                      <img
                        src="https://placedog.net/800/640?id=186"
                        alt="iMac Front Image"
                        className="mr-3 h-40 w-auto"
                      />
                      Game-game
                    </div>
                  </th>
                  <td className="px-4 py-3">
                    <span className="rounded bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                      PC
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex flex-wrap gap-1">
                      <span className="rounded bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        Action
                      </span>
                      <span className="rounded bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        RPG
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 inline-block h-4 w-4 rounded-full bg-red-700"></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">100h</td>
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-gray-500 dark:text-gray-400">5.0</span>
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex flex-col items-start gap-4">
                      <button
                        type="button"
                        data-drawer-target="drawer-update-product"
                        data-drawer-show="drawer-update-product"
                        aria-controls="drawer-update-product"
                        className="flex items-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </button>
                      <button
                        type="button"
                        data-drawer-target="drawer-read-product-advanced"
                        data-drawer-show="drawer-read-product-advanced"
                        aria-controls="drawer-read-product-advanced"
                        className="flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-ml-0.5 mr-2 h-4 w-4"
                        >
                          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                          />
                        </svg>
                        Preview
                      </button>
                      <button
                        type="button"
                        data-modal-target="delete-modal"
                        data-modal-toggle="delete-modal"
                        className="flex items-center rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex">
              <a
                href="#"
                className="mx-1 flex cursor-not-allowed items-center justify-center rounded-md bg-white px-4 py-2 capitalize text-gray-500 dark:bg-gray-800 dark:text-gray-600 rtl:-scale-x-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="mx-1 hidden transform rounded-md bg-white px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-blue-500 dark:hover:text-gray-200 sm:inline"
              >
                1
              </a>

              <a
                href="#"
                className="mx-1 hidden transform rounded-md bg-white px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-blue-500 dark:hover:text-gray-200 sm:inline"
              >
                2
              </a>

              <a
                href="#"
                className="mx-1 hidden transform rounded-md bg-white px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-blue-500 dark:hover:text-gray-200 sm:inline"
              >
                ...
              </a>

              <a
                href="#"
                className="mx-1 hidden transform rounded-md bg-white px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-blue-500 dark:hover:text-gray-200 sm:inline"
              >
                9
              </a>

              <a
                href="#"
                className="mx-1 hidden transform rounded-md bg-white px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-blue-500 dark:hover:text-gray-200 sm:inline"
              >
                10
              </a>

              <a
                href="#"
                className="mx-1 flex transform items-center justify-center rounded-md bg-white px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-blue-500 dark:hover:text-gray-200 rtl:-scale-x-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
