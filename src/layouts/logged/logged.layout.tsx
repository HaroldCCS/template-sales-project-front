import SidebarComponent from '../../components/sidebar/sidebar.component'


const LoggedLayout = (props: { children: React.ReactNode }) => {

  return (

    <>
      <SidebarComponent />

      <main className="p-4 sm:ml-56">
        {props.children}
      </main>
    </>
  )
}


export default LoggedLayout