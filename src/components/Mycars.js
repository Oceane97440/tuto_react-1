import React , {Component} from 'react';
import Cars from './Cars'

//class stat
class Mycars extends Component {
  
    //event copie
    noCopy = ()=>{
        alert('pas copier le texte event "onCopy')
    }

    //event change style apres avoir passer la souris sur le text
    addStyle = (e) =>{

        console.log(e.target)
        if(e.target.classList.contains('styled')){
            e.target.classList.remove('styled')
        }else{
            e.target.classList.add('styled')

        }
    }

    render() { 
        console.log(this)
        return (
            <div className='cars' style={{border:'1px solid blue'}}>
                 <h1>{this.props.titre}</h1>
                 <h2 onMouseOver={this.addStyle}>Titre event onMouseOver</h2>
                 <p onCopy={this.noCopy}>Texte a ne pas copier</p>

                <Cars color="black">Voiture 1</Cars>
                <Cars color="red">Voiture 2</Cars>
                <Cars color="green"></Cars>
            </div>
             
          );
    }
}
 
export default Mycars;