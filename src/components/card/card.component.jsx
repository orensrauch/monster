import React from 'react'
import './card.styles.css'

export const Card = props => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}></img>

        <h2>{props.monster.name}</h2>
        <p className="para">Company: {props.monster.company.name}</p>
        <p className="subPara">Email: {props.monster.email}</p>
        <p className="subPara" alt="call us" href="{props.monster.phone}">Phone: {props.monster.phone}</p>
        

    </div>
)