import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Cell from './components/Cell';

export default function App() {

  const [splitDirectionVertical, setSplitDirectionVertical] = useState(true);

  const [cells, setCells] = useState([
    { key: '1', x: 0, y: 0 }
  ]);

  const createCell = (key, x, y) => {
    setSplitDirectionVertical(!splitDirectionVertical);
    console.log(cells)
    return (
      { key: '1', x: splitDirectionVertical ? x + 0 : x + 30, y: splitDirectionVertical ? y + 30 : y + 0}
    )
  }

  const pressHandler = () => {
    setCells((prevCells) => {
      return ([
        ...cells.map((cell) => createCell(cell.key, cell.x, cell.y)),
        ...cells
        ])
      })
  }

  return (
    <TouchableWithoutFeedback onPress={() => pressHandler()}>
      <View style={styles.container}>
        <View style={styles.cellsContainer}>
          {cells.map((item) => <Cell item={item} x={item.x} y={item.y}></Cell>)}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'column'
  }
});
