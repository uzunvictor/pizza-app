import React from 'react';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import PizzaDescription from './components/PizzaDescription';


function App() { 
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' component={Home} exact/>
        <Route path='/cart' component={Cart} exact/>
        <Route path='/pizzas_description' component={PizzaDescription} exact/>
      </div>
      <Footer />
    </div>
    
  );
} 


export default App;


// class App extends React.Component {

//   componentDidMount() {
//       axios.get('http://localhost:3000/db.json')
//       .then(({data}) => {this.props.savePizzas(data.pizzas)});
//       // .then(({data}) => {this.props.dispatch(setPizzasAction(data.pizzas))});
      
//   }
  
//   render () {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route path='/' render={() => <Home items={this.props.items} />} exact/>
//           <Route path='/cart' component={Cart} exact/>
//         </div>
//       </div>
//     )
//   }
// }


// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items
//   } 
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     savePizzas: (items) => dispatch(setPizzasAction(items)),
    
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
