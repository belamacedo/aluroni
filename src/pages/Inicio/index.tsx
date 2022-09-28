import cardapio from 'data/cardapio.json';
import { Key } from 'react';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);
  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(
          (item: {
            id: Key | null | undefined;
            photo: string | undefined;
            title: string | undefined;
          }) => (
            <div key={item.id} className={styles.recomendado}>
              <div className={styles.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>
              <button className={styles.recomendado__botao}>Ver mais</button>
            </div>
          )
        )}
      </div>
    </section>
  );
}
