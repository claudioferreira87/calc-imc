import { ChangeEvent, useState } from 'react';
import styles from './App.module.css';
import poweredImg from './assets/powered.png';
import leftArrowImg from './assets/leftarrow.png';
import { levels, calculateImc, LevelData } from './helpers/imc';
import { GridItem } from './components/GridItem';

function App() {
  const [hightField, setHightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<LevelData | null>(null);

  const handleCalculateImc = () => {
    if (!hightField || !weightField || hightField > 3.00) {
      alert("Digite todos os campos, ou verifique os dados!")
    } else {
      setToShow(calculateImc(hightField, weightField));
    }
  }

  const handleReset = () => {
    setToShow(null);
    setHightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImg} alt="" width={150} />
        </div>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule o seu IMC</h1>
            <p>
              IMC é a sigla para Índice de Massa Corpórea,
              parâmetro adotado pela Organização Mundial de
              Saúde para calcular o peso ideal de cada pessoa.
            </p>

            <input
              type="number"
              value={hightField > 0 ? hightField : ''}
              placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
              onChange={(e: ChangeEvent<HTMLInputElement>) => setHightField(parseFloat(e.target.value))}
              disabled={toShow ? true : false}
            />
            <input
              type="number"
              value={weightField > 0 ? weightField : ''}
              placeholder='Digite o seu peso. Ex: 75.3 (em kg)'
              onChange={(e: ChangeEvent<HTMLInputElement>) => setWeightField(parseFloat(e.target.value))}
              disabled={toShow ? true : false}
            />
            <button onClick={handleCalculateImc} disabled={toShow ? true : false}>Calcular IMC </button>
          </div>
          <div className={styles.rightSide}>
            {
              !toShow && (
                <div className={styles.grid}>
                  {
                    levels.map(item => (
                      <GridItem key={item.id} item={item} />
                    ))
                  }
                </div>
              )
            }
            {
              toShow && (
                <div className={styles.rightBig}>
                  <div className={styles.rightArrow} onClick={handleReset}>
                    <img src={leftArrowImg} alt="voltar" width={25} />
                  </div>
                  <GridItem item={toShow} />
                </div>
              )
            }
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
