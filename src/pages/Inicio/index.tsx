import cardapio from 'data/cardapio.json';
import { Key } from 'react';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';
import nossaCasa from '../../assets/nossa_casa.png';
import { Prato } from 'types/Pratos';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato } });
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div>
              <img
                style={{ borderRadius: '8px' }}
                src={item.photo}
                alt={item.title}
              />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt='Casa do aluroni' />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br />
          <br /> Vila Mariana -SP
        </div>
      </div>
    </section>
  );
}
