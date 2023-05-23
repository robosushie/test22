import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const TableDetailsScreen = ({ route }) => {
  const { tableId } = route.params;
  const table = useSelector((state) =>
    state.tables.find((t) => t.id === tableId)
  );

  if (!table) {
    return (
      <View>
        <Text>Table not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Table Details</Text>
      <Text>Name: {table.name}</Text>
      <Text>Columns: {table.columns.join(', ')}</Text>
      <Text>Rows:</Text>
      {table.rows.map((row, index) => (
        <Text key={index}>{row.join(', ')}</Text>
      ))}
    </View>
  );
};

export default TableDetailsScreen;
