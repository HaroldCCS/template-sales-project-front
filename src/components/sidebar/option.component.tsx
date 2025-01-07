import { Link, useLocation } from "react-router-dom";


const OptionComponent = (props: { children: React.ReactNode, title: string, to: string }) => {
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

export default OptionComponent