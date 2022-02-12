import React from "react";
import './Card.css'

const PromotionCard = ({ promotions }) => {

    <div className="promotion-card">
        <img src={promotions.imageUrl} alt={promotions.title} className="promotion-card__image"></img>

        <div className="promotion-card__info">
            <h1 className="promotion-card__title">{promotions.title}</h1>
            <span className="promotion-card__price">R$ {promotions.price}</span>

            <footer className="promotion-card__footer">
                {promotions.comments.length > 0 && (
                    <div className="promotion-card__comment">{promotions.comments[0].comment} </div>
                )}

                <div className="promotion-card__comments"> 
                {promotions.comments.length} {''} {promotions.comments.length > 1 ?  'Comentário' : 'Comentário'} </div>

                <a href={promotions.url} target="_blank" rel="noopener noreferrer" className="promotion-card__link">IR PARA O SITE</a>
            </footer>
        </div>
    </div>
    
}

export default PromotionCard;