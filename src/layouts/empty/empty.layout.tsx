import React from 'react'

import styles from './index.module.scss'

function EmptyLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <header>
      </header>

      <main className={styles.main}>
        <div className={styles['main-body']}>
          {props.children}
        </div>
      </main>

      <footer>
      </footer>
    </>
  );
}

export default EmptyLayout;