import SidebarComponent from '../../components/sidebar/sidebar.component'


const LoggedLayout = (props: { children: React.ReactNode }) => {

  return (

    <>
      <SidebarComponent />

      <main className="p-4 sm:ml-56">
        <div className="max-w-screen-lg mr-auto ml-auto">
          {props.children}
        </div>
      </main>
    </>
  )
}


export default LoggedLayout