export default function User() {
  return (
    <div className="mt-8">
      <div className="bg-white p-4 dark:bg-gray-800" aria-labelledby="drawer-label" aria-hidden="true">
        <h5
          id="drawer-label"
          className="mb-6 inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400"
        >
          Update Product
        </h5>
        <button
          type="button"
          data-drawer-dismiss="drawer-update-product-default"
          aria-controls="drawer-update-product-default"
          className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <form action="#">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="title"
                id="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                value="Apple iMac 27&ldquo;"
                placeholder="Type product name"
              />
            </div>
            <div>
              <label htmlFor="brand" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Brand
              </label>
              <input
                type="text"
                name="title"
                id="brand"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                value="Apple"
                placeholder="Product brand"
              />
            </div>
            <div>
              <label htmlFor="price" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                value="2999"
                placeholder="$2999"
              />
            </div>
            <div>
              <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                id="description"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Enter event description here"
              >
                Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB
                2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet,
                Magic Mouse 2, Magic Keyboard - US
              </textarea>
            </div>
          </div>
          <div className="mt-4 flex w-full justify-center space-x-4 pb-4">
            <button
              type="submit"
              className="w-full justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
