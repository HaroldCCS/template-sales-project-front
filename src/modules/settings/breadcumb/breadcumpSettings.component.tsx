import { Link } from "react-router-dom"
import ROUTES from "../../../router/router.settings"
import { MdSettings } from "react-icons/md"

const BreadcrumSettingsComponent = (props: { title?: string }) => {
  return (
    <nav className="flex sm:pl-0 pl-12" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link to={ROUTES.SETTINGS_ROUTE} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <MdSettings size={20} />
            Configuraciones
          </Link>
        </li>

        {props.title &&
          <li>
            <div className="flex items-center">
              <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{props.title}</a>
            </div>
          </li>
        }
      </ol>
    </nav>

  )
}

export default BreadcrumSettingsComponent