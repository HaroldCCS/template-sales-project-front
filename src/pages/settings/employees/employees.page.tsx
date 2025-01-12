import BreadcrumSettingsComponent from "../../../modules/settings/breadcumb/breadcumpSettings.component"
import EmployeeRegisterComponent from "../../../modules/settings/employees/employeeRegister.component"
import EmployeeTableComponent from "../../../modules/settings/employees/employeeTable.component"


const EmployeesPage = () => {
    return (
        <div>
            <BreadcrumSettingsComponent title="Empleados" />
            <br className="my-10" />

            <EmployeeRegisterComponent/>
            <br className="my-10" />

            <EmployeeTableComponent />
        </div>
    )
}

export default EmployeesPage