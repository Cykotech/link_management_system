/* eslint-disable react/prop-types */
import { useInventoryStore } from '../../store/inventoryStore';

import { ItemCard } from '../../components/Item_Card/ItemCard';

import classes from './Inventory.module.scss';

import { useState } from 'react';

export function InventoryManager() {
  const { inventory } = useInventoryStore((state) => state);
  const [filterBy, setFilterBy] = useState('');

  const handleChange = (e) => {
    setFilterBy(e.target.value);
  };

  const handleKeyDown = (e: { key: string; }) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      setFilterBy('');
    }
  };

  return (
    <div className={classes.container}>
      <input
        value={filterBy}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='Filter items...'
      ></input>
      <div className={classes.grid}>
        {inventory
          .filter((item) => item.name.toLowerCase().includes(filterBy.trim()))
          .map((item) => {
            return (
              <ItemCard
                key={item.name}
                imgSrc={item.imgSrc}
                quantity={item.quantity}
              >
                {item.name}
              </ItemCard>
            );
          })}
      </div>
    </div>
  );
}
