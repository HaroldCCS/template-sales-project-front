

const InputControlButtonComponent = (props: { title: string, value: number, onChange: (value: number) => void, subTitle?: string }) => {
  return (
    <div className="my-auto">
      <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.title}</label>
      <div className="relative flex items-center max-w-[8rem]">

        {/* Button decrement */}
        <button onClick={() => props?.onChange(props.value - 1)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
          <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
          </svg>
        </button>
        {/* Button decrement */}

        <input value={props.value} onChange={(_e) => props.onChange(Number(_e?.target?.value))} type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required />

        {/* Button increment */}
        <button onClick={() => props?.onChange(props.value + 1)} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
          <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
          </svg>
        </button>
        {/* Button increment */}

      </div>
      {props?.subTitle &&
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">{props.subTitle}</p>
      }
    </div>
  )
}

export default InputControlButtonComponent