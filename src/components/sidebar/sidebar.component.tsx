import { memo, useState } from "react"
import { HiOutlineDocumentReport } from "react-icons/hi"
import { MdAttachMoney, MdPayment, MdSettings } from "react-icons/md"
import { RiLogoutBoxLine } from "react-icons/ri"
import ROUTES from "../../router/router.settings"
import useToken from "../../hooks/useToken.hook"
import ButtonOpenComponent from "./buttonOpen.component"
import OP from "./option.component"
import { IoMoon, IoSunny } from "react-icons/io5"

const SidebarComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { logout } = useToken()

	return (
		<>
			<ButtonOpenComponent setIsOpen={() => setIsOpen(prev => !prev)} />

			<aside
				id="default-sidebar"
				className={`fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full${isOpen ? 'aaa' : ''} sm:translate-x-0 `}
				aria-label="Sidebar"
			>
				<ButtonOpenComponent setIsOpen={() => setIsOpen(prev => !prev)} />
				<div className="pt-14 h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col">
					<ListOptionsComponent logout={logout} closeSidebar={() => setIsOpen(false)} />
				</div>
			</aside>
		</>
	);
};


const ListOptionsComponent = ({ closeSidebar, logout }: { closeSidebar: () => void, logout: () => void }) => {
	const [dark, setDark] = useState(false);

	const darkModeHandler = () => {
		setDark(!dark);
		document.body.classList.toggle("dark");
	}

	return (
		<ul className="space-y-2 font-medium flex-grow">
			<OP to={ROUTES.REPORT_ROUTE} callback={closeSidebar} title="Reportes">
				<HiOutlineDocumentReport size={22} />
			</OP>
			<OP to={ROUTES.SALES_LOG_ROUTE} callback={closeSidebar} title="Ventas">
				<MdAttachMoney size={22} />
			</OP>

			<OP to={ROUTES.LINK_PAYMENT_ROUTE} callback={closeSidebar} title="Link de pago">
				<MdPayment size={22} />
			</OP>

			<OP to={ROUTES.SETTINGS_ROUTE} callback={closeSidebar} title="Configuración">
				<MdSettings size={22} />
			</OP>
			<hr />

			<OP isButton={true} to={''} callback={darkModeHandler} title={!dark ? "Modo oscuro" : "Modo claro"}>
				{dark ? <IoSunny /> : <IoMoon />}
			</OP>
			<OP to={''} callback={logout} title="Cerrar Sesión">
				<RiLogoutBoxLine size={22} />
			</OP>
		</ul>
	)
}

export default memo(SidebarComponent)