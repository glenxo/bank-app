import styles from './style';

import navbar from '/components/navbar';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={'${styles.paddingX} ${styles.flexCenter}'}>
      <div className={'${styles.boxWidth}'}>
        navbar
      </div>
    </div>

    <div className={'bg-primary ${styles.flexStart}'}>
      <div className={'${styles.boxWidth}'}>
        Hero
      </div>
    </div>

    <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
      <div className={'${styles.boxWidth}'}>
        Stats
        Business
        billing
        CardDeal 
        Testimonials
        clients
        CTA
        Footer
      </div>
    </div>

  </div>
)


export default App