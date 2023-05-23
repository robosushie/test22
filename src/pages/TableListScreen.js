import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTables } from '../redux/tableAction';

const TableListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const tables = useSelector((state) => state.tables);

  useEffect(() => {
    dispatch(fetchTables());
  }, []);

  const handleTablePress = (tableId) => {
    navigation.navigate('TableDetails', { tableId });
  };

  return (
    <View>
      <Text>Table List</Text>
      <FlatList
        data={tables}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleTablePress(item.id)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TableListScreen;
