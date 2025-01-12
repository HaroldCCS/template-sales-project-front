

const OptionPaymentMethodComponent = (props: { id: number, children?: React.ReactNode, title: string, handleChange: (id: number) => void, value: boolean }) => {
  return (
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 px-1" onClick={() => props.handleChange(props?.id)}>
      <div className="flex items-center ps-1">
        <input
          name='method'
          id={props?.id?.toString()}
          checked={props.value}
          type="radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
          <label htmlFor="horizontal-list-radio-id" className="pr-2 flex gap-1 w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 align-center"><span className="text-xs uppercase" >{props.title}</span>{props.children}</label>
      </div>
    </li>
  )
}

export default OptionPaymentMethodComponent