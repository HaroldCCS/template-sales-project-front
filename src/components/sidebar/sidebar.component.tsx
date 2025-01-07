import { memo, useState } from "react"
import { HiOutlineDocumentReport } from "react-icons/hi"
import { MdAttachMoney, MdSettings } from "react-icons/md"
import { RiLogoutBoxLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import ROUTES from "../../router/router.settings"
import useToken from "../../hooks/useToken.hook"
import ButtonOpenComponent from "./buttonOpen.component"
import OP from "./option.component"

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
					<ListOptionsComponent />
					<ul className="space-y-2 font-medium">
						<li>
							<Link to={''} onClick={logout} className={`text-gray-900 dark:text-white' mb-3 flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
								<RiLogoutBoxLine size={22} />
								<span className="ms-3">Cerrar Sesión</span>
							</Link>
						</li>
					</ul>
				</div>
			</aside>
		</>
	);
};


const ListOptionsComponent = () => {
	return (
		<ul className="space-y-2 font-medium flex-grow">
			<OP to={ROUTES.REPORT_ROUTE} title="Reportes">
				<HiOutlineDocumentReport size={22} />
			</OP>
			<OP to={ROUTES.SALES_LOG_ROUTE} title="Ventas">
				<MdAttachMoney size={22} />
			</OP>
			<OP to={ROUTES.SETTINGS_ROUTE} title="Configuración">
				<MdSettings size={22} />
			</OP>
		</ul>
	)
}

export default memo(SidebarComponent)