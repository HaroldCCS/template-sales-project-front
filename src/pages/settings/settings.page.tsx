import { Link } from "react-router-dom"
import BreadcrumSettingsComponent from "../../modules/settings/breadcumb/breadcumpSettings.component"
import ROUTES from "../../router/router.settings"

const SettingsPage = () => {
    return (
        <div className="">
            <BreadcrumSettingsComponent />

            <br className="my-5" />


            <div className="flex gap-5 flex-wrap sm:justify-start justify-center">
                <CardComponent
                    title="Sedes"
                    description="Agrega, elimina y edita sedes"
                    to={ROUTES.SETTINGS_HEADQUARTERS}
                />
                <CardComponent
                    title="Metodos de pago"
                    description="Agrega, elimina y edita metodos de pago"
                    to={ROUTES.SETTINGS_PAYMENT_METHODS}
                />
                <CardComponent
                    title="Empleados"
                    description="Agrega, elimina y edita empleados"
                    to={ROUTES.SETTINGS_EMPLOYEES}
                />
            </div>
        </div>
    )
}

const CardComponent = (props: { title: string, description: string, to: string }) => {
    return (
        <div className=" w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div className="flex flex-col items-center p-2">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.title}</h5>
                <span className="text-sm text-center text-gray-500 dark:text-gray-400">{props.description}</span>
                <div className="flex mt-4 md:mt-6">
                    <Link to={props.to} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">redirigir</Link>
                </div>
            </div>
        </div>

    )
}

export default SettingsPage