import React from 'react';

const SuperHeroTable = (props) => {
    return ( 
        <div className='table'>
            <table>
                <tr className= 'tableHeader'>
                    <th> Name </th>
                    <th> Primary Ability </th>
                    <th> Secondary Ability </th>
                </tr>
                {props.superheroes.map((hero) => {
                    return (
                        <tr className= "heroDetails">
                            <th> {hero.name} </th>
                            <th> {hero.primaryAbility} </th>
                            <th> {hero.secondaryAbility} </th>
                        </tr>
                )
            })}
            </table>
        </div>
     );
}
 
export default SuperHeroTable;