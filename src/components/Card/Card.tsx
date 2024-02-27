import React from 'react';
import cardStyle from './Card.module.scss';

type Props = {
  taskTitle: string;
}

export const Card: React.FC<Props>  = ({ taskTitle }) => {
  return (
    <section className={cardStyle.card}>
      <div className={cardStyle.header}>
        <h3 className={cardStyle.title}>{taskTitle}</h3>
      </div>
      <div className={cardStyle.list}>
        <p className={cardStyle.item}>Card content</p>
        <p className={cardStyle.item}>Card content</p>
        <p className={cardStyle.item}>Card content</p>
      </div>

    </section>
  );
}
