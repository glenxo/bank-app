

import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Encuentre Ofertas <br className="sm:block hidden" /> de manera
        mucho mas facil.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Nunca ha sido tan fácil encontrar una gran oferta en su próxima tarjeta de crédito. 
      Con tantas ofertas y opciones disponibles, puedes comparar fácilmente las tarjetas 
      y encontrar la que mejor se adapte a tus necesidades. 
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;