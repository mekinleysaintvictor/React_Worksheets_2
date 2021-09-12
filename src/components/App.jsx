import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable';
import SuperheroCreateForm from './SuperheroCreateForm/SuperheroCreateForm';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.names = [
            'Thomas', 'Sarah', 'Lindia', 'Jennifer', 'Akeem'
        ];

        this.state = { 
            firstName: 'Reggie',
            lastName: 'White',
            jokesFromApi: [],
            supers: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ]
         }
    }

    componentDidMount(){
        this.getJokes();
    }

    async getJokes(){
        let response = await axios.get('https://v2.jokeapi.dev/joke/Programming?amount=5');
        console.log(response.data.jokes);
        this.setState({
            jokesFromApi: response.data.jokes
        })
    }

    addHeroToSupers = (heroToAdd) => {
        let tempSupers = this.state.supers;
        tempSupers.push(heroToAdd);
        this.setState({
            supers: tempSupers
        });
    }

    display(message) {
        alert(message);
    }



    render() { 
        return ( 
            <div className="container-fluid">
                <DisplayName firstName = {this.state.firstName} lastName= {this.state.lastName} />
                <NamesList names = {this.names} />
                <AlertUser buttonClick = {(message) => this.display(message)} />
                <SuperHeroTable superheroes = {this.state.supers} />
                <SuperheroCreateForm addNewHero={this.addHeroToSupers} />
                
                <h1>Jokes from API</h1>
                <hr/>
                {this.state.jokesFromApi.map(joke => {
                    return <h1>{joke.setup} : {joke.delivery}</h1>
                })}
            </div>
         );
    }
}
 

export default App;
