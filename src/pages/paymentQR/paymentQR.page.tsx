import { useState } from "react"
import HelperPriceComponent from "../../components/helperPrice/helperPrice.component"
import MoneyFormatter from "../../utility/MoneyFormatter"
import usePaymentQR from "../../hooks/usePaymetQR.hook"
import QRCode from "react-qr-code"
import SpinnerComponent from "../../components/spinner/spinner.component"


const PaymentQRPage = () => {

	const { generateLink, loading } = usePaymentQR()

	const [description, setDescription] = useState<string>('')
	const [price, setPrice] = useState<number>(0)
	const [error, setError] = useState<string>('')
	const [link, setLink] = useState<string>('')


	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setPrice(Number(e?.target?.value))
	}

	const handlePriceChange = (name: 'price' | 'finalPrice', money: number) => {
		setPrice(prev => {
			const calculatedMoney = Number(prev ? prev : 0) + Number(money);
			return calculatedMoney > 0 ? calculatedMoney : 0;
		})
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!price) {
			setError('Falta ingresar el valor de la venta')
			return;
		}

		if (price < 1000) {
			setError('El valor de la venta debe ser mayor a $1.000')
			return;
		}

		if (!description) {
			setError('Falta ingresar la descripcion del pago')
			return;
		}

		setError('')

		const response = await generateLink({
			price,
			description
		})

		if (response?.payload?.url) {
			setLink(response?.payload?.url);
			setDescription('')
			setPrice(0)
			return;
		}

		if (response?.errors?.length) {
			setError(response?.errors[0]?.message)
			return;
		}

		setError('Error al generar el link')
	}


	if (link) return <div className="flex flex-col mx-auto justify-center items-center p-5 pt-10 max-w-md gap-8">

		<div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
			<span className="font-medium">¡QR generado con exito!</span> Pidele al cliente que escanee el siguiente código para pagar.
		</div>

		<QRCode
			size={256}
			style={{ height: "auto", maxWidth: "100%", width: "100%" }}
			value={link}
			viewBox={`0 0 256 256`}
		/>

		<a href={link} target="_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ir al sitio de pago</a>

		<button
			onClick={() => setLink('')}
			type="button"
			className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
			Generar un nuevo QR de pago
		</button>
	</div>


	return (
		<form className="flex flex-col mx-auto justify-center items-center p-5 max-w-md" onSubmit={handleSubmit}>
			<h1 className="text-4xl my-10">Generar link de pago</h1>

			<div className='w-full max-w-md my-10'>
				<label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Ingresa el valor de tu venta
				</label>
				<input onChange={handleChange} value={Number(price) ? Number(price) : ""} type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$10.000" required />

				<div className="flex flex-col gap-2 mt-2">
					<HelperPriceComponent name="price" hanldeChange={handlePriceChange} typePlus={true} className='text-green-600' />
					<HelperPriceComponent name="price" hanldeChange={handlePriceChange} typePlus={false} className='text-red-600' />

				</div>

				<p id="helper-text-explanation" className="w-full text-center mt-2 text-sm text-gray-500 dark:text-gray-400">{MoneyFormatter(price)}</p>
			</div>


			<div className="w-full mb-5">
				<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Descripción del pago
				</label>
				<textarea
					required
					onChange={(_e) => setDescription(_e?.target?.value)}
					value={description}
					id="message"
					rows={4}
					className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Camiseta blanca y pantalon..."></textarea>
			</div>

			{loading ? <>
				<h2>Generando link...</h2>
				<SpinnerComponent />
			</> :
				<button type="submit" className={` text-white bg-gradient-to-r 
				from-blue-600 to-red-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}>
					Generar QR de pago BOLD
				</button>
			}
			{error &&
				<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
					{error}
				</div>
			}
		</form>
	)
}

export default PaymentQRPage