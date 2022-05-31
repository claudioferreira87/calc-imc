import React from 'react'
import { LevelData } from '../../helpers/imc';
import styles from './GridItem.module.css';
import downImg from '../../assets/down.png';
import upImg from '../../assets/up.png';

interface GridItemProps {
  item: LevelData
}

export const GridItem = ({ item }: GridItemProps) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        {item.icon === 'up' ? <img src={upImg} alt="resultado é bom"
          width={30} /> :
          <img src={downImg} alt="resultado é ruim" width={30} />}
      </div>
      <div className={styles.gridTitle}>{item.title}</div>
      {
        item.yourImc && (
          <div className={styles.yourImc}>
            Seu IMC é de {item.yourImc} kg/m²
          </div>
        )
      }

      <div className={styles.gridInfo}>
        <>
          IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  )
}
