import { Link, useNavigate } from "react-router-dom"
import ROUTES from "../../router/router.settings"
import { useState } from "react"
import { useAppDispatch } from "../../store"
import tokenAction from "../../store/auth/token/token.action"


const RegisterPage = () => {
	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
				</a>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Crea una cuenta
						</h1>
						<FormComponent />
					</div>
				</div>
			</div>
		</section>
	)
}

const FormComponent = () => {
	const [email, setEmail] = useState('')

	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const dispatch = useAppDispatch();
	const navigate = useNavigate();


	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (password !== confirmPassword) {
			alert('Las contraseñas no coinciden')
			return
		}

		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3NTAzNzc2MDAwMDB9.Zb-ixauzERNQzPw1Qo8P8V44VI-wM9agmi6xhpmBAjo"
		dispatch(tokenAction.set(token))
		navigate(ROUTES.SALES_LOG_ROUTE)
	}
	return (
		<form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>

			{/* Email */}
			<div>
				<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
				<input value={email} onChange={_e => setEmail(_e?.target?.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
			</div>

			{/* Password */}
			<div>
				<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
				<input value={password} onChange={_e => setPassword(_e?.target?.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
			</div>

			{/* Confirm Password */}
			<div>
				<label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirma tu contraseña</label>
				<input value={confirmPassword} onChange={_e => setConfirmPassword(_e?.target?.value)} type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
			</div>

			{/* Terms */}
			<div className="flex items-start">
				<div className="flex items-center h-5">
					<input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-600 dark:ring-offset-gray-800" required />
				</div>
				<div className="ml-3 text-sm">
					<label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">Acepto <a className="font-medium text-purple-600 hover:underline dark:text-purple-500" href="#">Terminos y condiciones</a></label>
				</div>
			</div>

			{/* Register */}
			<button type="submit" className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Registrar</button>

			{/* Register */}
			<p className="text-sm font-light text-gray-500 dark:text-gray-400 w-full flex flex-col justify-center items-center">
				<span>¿Ya tienes una cuenta?</span> <Link to={ROUTES.LOGIN_ROUTE} className="font-medium text-purple-600 hover:underline dark:text-purple-500"> Registrate </Link>
			</p>
		</form>
	)
}

export default RegisterPage