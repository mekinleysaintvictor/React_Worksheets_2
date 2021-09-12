import React, { Component } from 'react';

class SuperHeroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            superheroId: '',
            name: '',
            primaryAbility: '',
            secondaryAbility: ''           
        }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewHero(this.state);
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label> Unique ID </label>
                <input name="superheroId" onChange={this.handleChange} value={this.state.superheroId}/>
                <label> Superhero Name </label>
                <input name="name" onChange={this.handleChange} value={this.state.name}/>
                <label> Primary Ability </label>
                <input name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility}/>
                <label> Secondary Ability </label>
                <input name="secondaryAbility" onChange={this.handleChange} value={this.state.secondaryAbility}/>
                <button type='submit'>Add Hero</button>
            </form>
         );
    }
}
 
export default SuperHeroCreateForm;