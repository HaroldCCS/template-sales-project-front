import styles from './index.module.scss'

const HomePage: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1 className=" title text-3xl font-bold underline bg-gray-600">
        Home Page
      </h1>
    </div>
  )
}

export default HomePage;