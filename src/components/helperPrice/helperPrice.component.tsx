import MoneyFormatter from '../../utility/MoneyFormatter';

const HelperPriceComponent = ({ name, hanldeChange, typePlus, className }: { className?: string, typePlus?: boolean, name: 'price' | 'finalPrice', hanldeChange: (name: 'price' | 'finalPrice', money: number) => void }) => {
  return (
    <div className={"flex w-full gap-2 text-xs " + className}>
      <ButtonComponent name={name} hanldeChange={hanldeChange} typePlus={typePlus} value={100}/>
      <ButtonComponent name={name} hanldeChange={hanldeChange} typePlus={typePlus} value={1000}/>
      <ButtonComponent name={name} hanldeChange={hanldeChange} typePlus={typePlus} value={10000}/>
    </div>
  )
}

const ButtonComponent = ({ name, hanldeChange, typePlus, value }: { value: number,  typePlus?: boolean, name: 'price' | 'finalPrice', hanldeChange: (name: 'price' | 'finalPrice', money: number) => void }) => {

  return (
    <button
      onClick={() => hanldeChange(name, (typePlus ? 1 : -1) * value)}
      type="button"
      id="decrement-button"
      className="w-full bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
    >
      {MoneyFormatter((typePlus ? 1 : -1) * value)}
    </button>
  )
}

export default HelperPriceComponent