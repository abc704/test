import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";


import Products from "../components/products/Products";
import CartList from "../components/cart/CartList";
import PRODUCTS from "../DATA";
import {addToCartAction, updateCartUnits} from "../redux/actions/cart_actions";
let h="#1223@";
// const people = [
//   {
//     name: 'James',
//     age: 31,
//   },
//   {
//     name: 'John',
//     age: 45,
//   },
//   {
//     name: 'Paul',
//     age: 65,
//   },
//   {
//     name: 'Ringo',
//     age: 49,
//   },
//   {
//     name: 'George',
//     age: 34,
//   }
// ];

/*const textChangeHandler=e=>{
enteredText=e.target.value;
}*/

class App extends React.Component {

  render() {
    // let friends = this.props.PRODUCTS.filter( function (user) {
    //   return user.batchid == '#1223@'
    // });

    const {cart, addToCartAction, updateCartUnits} = this.props;
    return (
      <main className="pa3 pa5-ns w-100">
       <div className="pt-5"><input type="text" /><button type="submit" >View/Create</button></div>
       {/* <div> {people.filter(person => person.age < 60).map(filteredPerson => (
    <li>
        <div  className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
        <img className="w2 h2 w3-ns h3-ns br-100" src={img} />
      <div className="pl3 flex-auto">
      

      {filteredPerson.name}
      </div>
      </div>
    </li>
       ))}</div> */}

        <CartList cart={cart} updateCartUnits={updateCartUnits} />
     
       { PRODUCTS.map(u=>
      { if(u.batchid==="#1223@")
       return(
      //  <h1> {u.batchid}</h1>
      h
       )})}
        {/* {h==="#1223@"?
        
          <h1>h</h1>: null} */}
                    <Products products={PRODUCTS.filter(function (user) {
                     let  h=user.batchid; // filter first for friends
            return user.batchid === "#1223@" // returns a new array
          })}  addToCartAction={addToCartAction} />
 

          {/* {PRODUCTS.filter(function (user) { // filter first for friends
            return user.batchid === "#1223@" // returns a new array
          }).map(function (user) {  // map the new array to list items
            return <Products products={PRODUCTS} key={user.name} addToCartAction={addToCartAction} />
            // <li key={user.name}>{user.name}</li> */}
             {/* // don't forget unique key for each item */}
          {/* })} */}
        

      {  console.log("gaand mara")}
      </main>
    );
  }
}


const mapStateToProps = ({cart}) => {
  return {
    cart
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    addToCartAction,
    updateCartUnits
  }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(App);
