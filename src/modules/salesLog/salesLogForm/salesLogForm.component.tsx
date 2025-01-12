import { useRef, useState } from 'react';
import useHeadquarters from "../../../hooks/useHeadquarters.hook";
import usePaymentMethods from "../../../hooks/usePaymentMethods.hook";

import ProgressBarComponent from '../../../components/progressBar/progressBar.component';
import useUploadFile from '../../../hooks/useUploadFile.hook';
import { ISalesLog } from '../../../interfaces/salesLog';
import useSalesLogs from '../../../hooks/useSalesLogs.hook';

import { PiMoneyThin } from "react-icons/pi";
import { IoMdCard } from "react-icons/io";
import useEmployees from '../../../hooks/useEmployees.hook';
import OptionPaymentMethodComponent from './optionPaymentMethod.component';
import { IPaymentMethod } from '../../../interfaces/paymentMethods';
import InputControlButtonComponent from '../../../components/inputControlButton/inputControlButton.component';
import MoneyFormatter from '../../../utility/MoneyFormatter';




const SalesLogFormComponent = (props: { close: () => void }) => {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);

  const [salesLog, setSalesLog] = useState<ISalesLog>({
    id: 0,
    description: '',
    price: 0,
    quantity: 1,
    finalPrice: 0,
    date: (new Date()).toISOString().slice(0, 16),
    registrant: '',
    method: 1,
    file: '',
    headquarter: ''
  })

  console.log(salesLog)

  const { addOne, salesLogs } = useSalesLogs();
  const { headquarters } = useHeadquarters()
  const { paymentMethods } = usePaymentMethods();
  const { employees } = useEmployees();

  const { handleUpload, progressBar } = useUploadFile({ file })
  const fileInputRef = useRef<any>(null);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const url = await handleUpload();

    addOne({
      ...salesLog,
      id: salesLogs[salesLogs.length - 1]?.id ? (salesLogs[salesLogs.length - 1].id + 1) : 1,
      file: url
    })
    setLoading(false)
    props.close()
  }

  const hanldeChangeMethod = (id: number) => {
    setSalesLog(prev => ({
      ...prev,
      method: id
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSalesLog(prev => ({
      ...prev,
      [e.target.name]: e?.target?.value
    }))
  }


  const switchPaymentMethod = (paymentMethod: IPaymentMethod) => {
    let title = ""
    let children = <></>

    switch (paymentMethod?.name?.toLowerCase()) {
      case 'nequi':
        children = <img src='public/nequi.svg' alt='nequi' className="w-max h-6 me-2" sizes='22'></img>
        break;
      case 'daviplata':
        children = <img src='public/daviplata.png' alt='daviplata' className="w-max h-6 me-2" sizes='22' />
        break;
      case 'efectivo':
        title = "EFECTIVO"
        children = <PiMoneyThin size={22} className='text-green-500 dark:text-white' />
        break;
      case 'tarjeta':
        title = "TARJETA"
        children = <IoMdCard size={22} className='text-purple-500 dark:text-white' />
        break;
      default:
        title = paymentMethod.name
        break;
    }

    return (
      <OptionPaymentMethodComponent
        handleChange={hanldeChangeMethod}
        value={salesLog?.method === paymentMethod?.id}
        id={paymentMethod?.id}
        key={paymentMethod?.id}
        title={title}>
        {children}
      </OptionPaymentMethodComponent>
    )
  }

  const handlePriceChange = (name: 'price' | 'finalPrice', money: number) => {
    setSalesLog(prev => {
      let calculatedMoney = Number(prev[name] ? prev[name] : 0) + Number(money)
      if (calculatedMoney < 0) calculatedMoney = 0

      console.log(calculatedMoney)

      return {
        ...prev,
        [name]: calculatedMoney || 0
      }
    })
  }


  return (
    <form onSubmit={handleSubmit} className='p-4'>

      <div className='w-full mb-4'>
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
        <input onChange={handleChange} value={salesLog?.description} type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descripcion" required />
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-3 justify-items-center w-full">
        <div className='w-full'>
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
          <input onChange={handleChange} value={Number(salesLog?.price) ? Number(salesLog?.price) : ""} type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Precio" required />

          <HelperPriceComponent name="price" hanldeChange={handlePriceChange} typePlus={false} className='text-red-600' />
          <HelperPriceComponent name="price" hanldeChange={handlePriceChange} typePlus={true} className='text-green-600' />

          <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">{MoneyFormatter(salesLog?.price)}</p>
        </div>
        <InputControlButtonComponent title="Cantidad" value={Number(salesLog?.quantity) || 0} onChange={_e => setSalesLog(prev => ({ ...prev, quantity: Number(_e) }))} />
        <div className='w-full'>
          <label htmlFor="finalPrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio Final</label>
          <input onChange={handleChange} value={Number(salesLog?.finalPrice) || ""} type="number" name="finalPrice" id="finalPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Precio Final" required />
          <HelperPriceComponent name="finalPrice" hanldeChange={handlePriceChange} typePlus={false} className='text-red-600' />
          <HelperPriceComponent name="finalPrice" hanldeChange={handlePriceChange} typePlus={true} className='text-green-600' />
          <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">{MoneyFormatter(salesLog?.finalPrice)}</p>
        </div>
      </div>

      <hr className='my-5' />

      <div className="grid gap-6 md:grid-cols-2  w-full">
        {/* Registrante */}
        <div>
          <label htmlFor="registrant" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Registrante</label>
          <select onChange={handleChange} id="registrant" name="registrant" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Registrante</option>
            {employees?.map(_e => <option value={_e?.id}>{_e?.name}</option>)}
          </select>
        </div>

        {/* Sede */}
        <div>
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sede</label>
          <select onChange={handleChange} id="headquarter" name="headquarter" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Elige una opcion</option>
            {headquarters?.map(_e => <option key={_e?.id} value={_e?.id}>{_e?.name}</option>)}
          </select>
        </div>

      </div>

      <hr className='my-5' />


      {/* Metodo de Pago */}
      <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Metodo de pago</label>
      <ul className="mb-4 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {paymentMethods?.map(_e => switchPaymentMethod(_e))}
      </ul>


      <div className="grid gap-6 md:grid-cols-2  w-full">
        <div>
          <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Registro</label>
          <input value={salesLog?.date?.toString()} onChange={handleChange} type="datetime-local" id="date" name="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>


        <div className="mb-6">

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Comprobante</label>
          <input
            className="h-11 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            onChange={_e => setFile(_e?.target?.files?.[0])}
            ref={fileInputRef}
          />

        </div>
      </div>

      {progressBar > 0 && <ProgressBarComponent progress={progressBar} />}

      <div className="flex justify-end gap-2 items-center py-4 pb-4 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button disabled={loading} onClick={props.close} data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancelar</button>
        <button disabled={loading} data-modal-hide="default-modal" type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
      </div>
    </form>

  )
}


const HelperPriceComponent = ({ name, hanldeChange, typePlus , className}: {className?: string,  typePlus?: boolean, name: 'price' | 'finalPrice', hanldeChange: (name: 'price' | 'finalPrice', money: number) => void }) => {

  return (
    <div className={"flex w-full text-xs " + className}>
      <button onClick={() => hanldeChange(name, (typePlus ? 1 : -1) * 100)} type="button" id="decrement-button" className="w-full bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
        {typePlus ? '+' : '-'} 100
      </button>
      <button onClick={() => hanldeChange(name, (typePlus ? 1 : -1) * 1_000)} type="button" id="decrement-button" className="w-full bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
        {typePlus ? '+' : '-'} 1.000
      </button>
      <button onClick={() => hanldeChange(name, (typePlus ? 1 : -1) * 10_000)} type="button" id="decrement-button" className="w-full bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
        {typePlus ? '+' : '-'} 10.000
      </button>
    </div>
  )
}

export default SalesLogFormComponent