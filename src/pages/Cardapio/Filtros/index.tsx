import filtros from './filtros.json';
import styles from './Filtros.module.scss';

type IOpcao = typeof filtros[0];

export default function Filtros() {
  function selecionarFiltro(item: IOpcao) {}

  return (
    <div className={styles.filtros}>
      {filtros.map((item) => (
        <button
          className={styles.filtros__filtro}
          key={item.id}
          onClick={() => selecionarFiltro(item)}
        >
          {' '}
          {item.label}
        </button>
      ))}
    </div>
  );
}
