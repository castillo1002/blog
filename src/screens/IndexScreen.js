import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/createDataContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={() => addBlogPost()} />
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({ item }) => {
          return <Text>item.title</Text>;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default IndexScreen;
