import React, { Component } from 'react';
import Cars from './Cars'

//class stat
class Mycars extends Component {

    //event copie
   /* noCopy = () => {
        alert('pas copier le texte event "onCopy')
    }

    //event change style apres avoir passer la souris sur le text
    addStyle = (e) => {

        console.log(e.target)
        if (e.target.classList.contains('styled')) {
            e.target.classList.remove('styled')
        } else {
            e.target.classList.add('styled')

        }
    }*/

    state = {
        voitures: [
            {
                name: 'voiture1',
                color : 'red',
                years: 2021

            },
            {
                name: 'voiture2',
                color : 'blue',
                years: 2000

            },
            {
                name: 'voiture3',
                color : 'green',
                years: 2016

            },
        ]
    }

    add10year = ()=>{

        // equivalent en js de => this.state.voitures[0].year += 10

        const updateState = this.state.voitures.map((param)=>{
            return param.years -= 1
        })

        //permet de metre a jour obj stat dans le ReactDom
        this.setState({
           updateState
        })
    }


    render() {
        console.log(this)
        const age = new Date().getFullYear()

        return (
            <div className='cars' style={{ border: '1px solid blue' }}>
                <h1>{this.props.titre}</h1>
                {/* <h2 onMouseOver={this.addStyle}>Titre event onMouseOver</h2>
                <p onCopy={this.noCopy}>Texte a ne pas copier</p> */}

                <button onClick={this.add10year}>-10 ans</button>
                {/* <Cars color={this.state.voitures[0].color} years={this.state.voitures[0].years}  age={age - this.state.voitures[0].years}>{this.state.voitures[0].name}</Cars>*/}
 
                {
                   // 0: {name: 'voiture1', color: 'red', years: 2020}
                   //marque={voiture.name} est un propos qu'on recup dans le composent cars.js
                    this.state.voitures.map((voiture,i)=>{
                        return(
                            <Cars marque={voiture.name} key={i} color={voiture.color} years={voiture.years}  age={age - voiture.years}/>
                        )
                    })
                }
            </div>

        );
    }
}

export default Mycars;