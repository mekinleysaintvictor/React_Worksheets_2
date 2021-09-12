import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable';
import SuperheroCreateForm from './SuperheroCreateForm/SuperheroCreateForm';


class App extends Component {
    constructor(props) {
        super(props);
        this.names = [
            'Thomas', 'Sarah', 'Lindia', 'Jennifer', 'Akeem'
        ];

        this.state = { 
            firstName: 'Reggie',
            lastName: 'White',
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
            </div>
         );
    }
}
 

export default App;
