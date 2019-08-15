import React from 'react';
import { connect } from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  
  
  const {onIncrementTotal,additionalPrice,car,carStore,onAddItem,onRemoveFeature,onDecrementTotal} = props

  const removeFeature = (item) => {
    // dispatch an action here to remove an item
    onRemoveFeature(item.id)
    onDecrementTotal(item.price)
    console.log(item.price)
  };

  const buyItem = (item) => {
    // dipsatch an action here to add an item
   
    onAddItem(item)
    onIncrementTotal(item.price)
    console.log(item)
  };

  
  
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature = {removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={carStore} buyItem = {buyItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  return{
    additionalPrice: state.additionalPrice,
    car: state.car,
    carStore: state.store
  }

}
const mapDispatchToProps = dispatch =>{
  return{
    onRemoveFeature : (id) => dispatch({type:'REMOVE_FEATURE',payload:id}),
    onAddItem : (item) => dispatch({type:'ADD_ITEM', payload: item}),
    onIncrementTotal: (price) => dispatch({type:'INC_TOTAL' ,payload: price}),
    onDecrementTotal: (price) => dispatch({type:'DEC_TOTAL', payload: price})
  }
}

export default connect(
                mapStateToProps,
                mapDispatchToProps
              )(App);
