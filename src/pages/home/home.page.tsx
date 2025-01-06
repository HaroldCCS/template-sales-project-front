import styles from './index.module.scss'

const HomePage: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1 className="text-3xl font-bold underline">
        Home Page
      </h1>
    </div>
  )
}

export default HomePage;