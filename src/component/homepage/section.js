import React from 'react'
import './section.css'
function Section() {
    return (
        <div className='container'>
        <div className='main-div'>
            <div className="photo-container" >
                <img className='photo' src="https://cdn5.1001salles.com/images/22502/g/1519037717_2395_303121564.jpg"/>
            </div>
            <div className='description'>
                <h1>Salle des Fêtes</h1>
                <p>
                On vous aide à trouver votre salle de rêve pour fêter votre mariage, Outia, fiancaille...
                on vous offre aussi la possibilité de réserver en ligne la salle que vous choisissez depuis votre emplacement
                </p>
                <button>Go to</button>
            </div>
        </div>
        </div>
    )
}
export default Section;