import cardapio from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i'); // 'i' significa case insensitive. N importa se está lower ou uppercase
    return regex.test(title);
  }

  function testaFiltro(id: number | null) {
    if (filtro !== null) return filtro === id; // se filtro não for nulo, ou seja, se existir, ele retorna o filtro(id)
    return true;
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(novaLista);
  }, [busca, filtro]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
