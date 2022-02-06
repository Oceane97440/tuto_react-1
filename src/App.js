import React from 'react';
import Mycars from './components/Mycars';

import './App.css';

class App extends React.Component {
  //les state s'utilise dans des class component
  state = {

    titre: "State Cars titre"
  }

  //event bouton on clik
  /* onClik = (e) => {
     console.log(e)
 
     //!important pour push un nouvelle data dans un obj stat (state.titre = "nouveu titre")
     this.setState({
       titre:'Mon nouveau titre'
     })
   }
 
   functionParam = (titre)=>{
     this.setState({
      // titre:titre
       titre
     })
   }
 
   // methode qui remplace ceci => <button onClick={()=> this.functionParam('Titre passer en parametre (param)')}>Bouton passe un parametre</button>
 
   functionbind = (param)=>{
     this.setState({
       titre:param
     })
   }
 
   changeInput = (e)=>{
     console.log(e.target.value)
     this.setState({
       titre:e.target.value
     })
 
   }*/

  render() {
    return (
      <div className="App" style={{ border: ' 1px solid red' }}>
        App composent
        <Mycars titre={this.state.titre} />
        {/* <button onClick={this.onClik}>Bouton event onclik</button>
        <button onClick={() => this.functionParam('Titre passer en parametre (param)')}>Bouton passe un parametre</button>
        <button onClick={this.functionbind.bind(this, 'Titre via bind')}>Bouton bind</button>
        <input type="text" onChange={this.changeInput} value={this.state.titre} /> */}
      </div>
    );
  }



}

export default App;
