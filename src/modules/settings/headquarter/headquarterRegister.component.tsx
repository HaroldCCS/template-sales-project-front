import { useState } from "react"
import useHeadquarters from "../../../hooks/useHeadquarters.hook"
import { IHeadquarter } from "../../../interfaces/headquarter"


const HeadquarterRegisterComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(true)} data-modal-target="default-modal" data-modal-toggle="default-modal" className=" mb-5 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Registrar sede
      </button>

      <div id="default-modal" tabIndex={-1} aria-hidden="true" className={`${isOpen ? '' : 'hidden'} bg-gray-400 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Registrar Sede
              </h3>
              <button type="button" onClick={() => setIsOpen(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <FormComponent close={() => setIsOpen(false)} />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

const FormComponent = (props: { close: () => void }) => {
  const { addOne, headquarters } = useHeadquarters();

  const [name, setName] = useState<string>('')
  const [color, setColor] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!color || !name) {
      alert('Falta escorger el nombre o el color');
      return;
    }

    const headquarter: IHeadquarter = {
      id: headquarters[headquarters.length - 1]?.id ? (headquarters[headquarters.length - 1].id + 1) : 1,
      name,
      color
    }

    addOne(headquarter)

    setName('');
    setColor('');

    props.close()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la sede</label>
          <input value={name} onChange={_e => setName(_e?.target?.value)} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre de la sede" required />
        </div>

        <div>
          <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color de la sede</label>
          <input value={color} onChange={_e => setColor(_e?.target?.value)} type="color" id="color" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Color" required />
        </div>
      </div>
      <div className="flex justify-end gap-2 items-center py-4 pb-4 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button onClick={props.close} data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancelar</button>
        <button data-modal-hide="default-modal" type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
      </div>
    </form>

  )
}
export default HeadquarterRegisterComponent