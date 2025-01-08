import { memo, useState } from "react"
import { HiOutlineDocumentReport } from "react-icons/hi"
import { MdAttachMoney } from "react-icons/md"
import { RiLogoutBoxLine } from "react-icons/ri"
import { Link, useLocation } from "react-router-dom"
import ROUTES from "../../router/router.settings"
import useToken from "../../hooks/useToken.hook"

const SidebarComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { logout } = useToken()

	return (
		<>
			<OpenSidebarButton setIsOpen={() => setIsOpen(prev => !prev)} />

			<aside
				id="default-sidebar"
				className={`fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full${isOpen ? 'aaa' : ''} sm:translate-x-0 `}
				aria-label="Sidebar"
			>
				<OpenSidebarButton setIsOpen={() => setIsOpen(prev => !prev)} />
				<div className="pt-14 h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col">
				<ul className="space-y-2 font-medium flex-grow">
						<OptionNavigation to={ROUTES.REPORT_ROUTE} title="Reportes">
							<HiOutlineDocumentReport size={22} />
						</OptionNavigation>
						<OptionNavigation to={ROUTES.SALES_LOG_ROUTE} title="Ventas">
							<MdAttachMoney size={22} />
						</OptionNavigation>
					</ul>
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

const OpenSidebarButton = ({ setIsOpen }: { setIsOpen: () => void }) => {

	return (
		<button onClick={() => setIsOpen()} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="fixed inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
			<span className="sr-only">Open sidebar</span>
			<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
			</svg>
		</button>
	)
}

const OptionNavigation = (props: { children: React.ReactNode, title: string, to: string }) => {
	const location = '/' + useLocation()?.pathname?.split('/')[1];
	const isActive = location === props.to;

	return (
		<li>
			<Link to={props?.to} className={` ${isActive ? 'bg-gray-200 dark:bg-gray-700' : 'text-gray-900 rounded-lg dark:text-white'} mb-3  flex items-center p-2  rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
				{props.children}
				<span className="ms-3">{props.title}</span>
			</Link>
		</li>
	)
}

export default memo(SidebarComponent)