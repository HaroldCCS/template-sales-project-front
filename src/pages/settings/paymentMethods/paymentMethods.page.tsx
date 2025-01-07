import BreadcrumSettingsComponent from "../../../modules/settings/breadcumb/breadcumpSettings.component"
import PaymentMethodRegisterComponent from "../../../modules/settings/paymentMethods/paymentMethodRegister.component"
import PaymentMethodTableComponent from "../../../modules/settings/paymentMethods/paymentMethodTable.component"


const PaymentMethodsPage = () => {
    return (
        <div>
            <BreadcrumSettingsComponent title="Metodos de pago" />
            <br className="my-10" />

            <PaymentMethodRegisterComponent />
            <br className="my-10" />

            <PaymentMethodTableComponent />
        </div>
    )
}

export default PaymentMethodsPage