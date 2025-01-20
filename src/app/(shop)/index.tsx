import { FlatList, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../../../assets/categories';
import { PRODUCTS } from '../../../assets/products';
import { ListHeader } from '../../components/list-header';
import { ProductListItem } from '../../components/product-list-item';
// import { ProductListItem } from 

export default function Home() {
  return (
    <View>
      <FlatList 
        data={PRODUCTS}
        renderItem={({item}) =>( 
          <ProductListItem product={item} />
          )}
        keyExtractor={ item => item.id.toString() }
        numColumns={2}
        ListHeaderComponent={<ListHeader categories={CATEGORIES} />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{paddingHorizontal: 10, paddingVertical: 5}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
   flatListContent: {
    paddingBottom: 20,
   },
   flatListColumn: {
    justifyContent: 'space-between'
   }

})