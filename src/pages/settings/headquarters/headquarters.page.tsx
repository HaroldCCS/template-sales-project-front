import BreadcrumSettingsComponent from "../../../modules/settings/breadcumb/breadcumpSettings.component"
import HeadquarterRegisterComponent from "../../../modules/settings/headquarter/headquarterRegister.component"
import HeadquarterTableComponent from "../../../modules/settings/headquarter/headquarterTable.component"


const HeadquartersPage = () => {
    return (
        <div>
            <BreadcrumSettingsComponent title="Sedes" />
            <br className="my-10" />

            <HeadquarterRegisterComponent />
            <br className="my-10" />

            <HeadquarterTableComponent />
        </div>
    )
}

export default HeadquartersPage