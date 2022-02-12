import React from "react";
import '../Card/Card.css';

const PromotionCard = ({ promotion }) => (
    <div className="promotion-card">
        <img src={promotion.imageUrl} alt={promotion.title} className="promotion-card__image"/>

        <div className="promotion-card__info">

            <h1 className="promotion-card__title">{promotion.title}</h1>
            <span className="promotion-card__price"> R$ {promotion.price}</span>

            <footer className="promotion-card__footer">
                {promotion.coments.length > 0 && (
                    <div className="promotion-card__comment"> "{promotion.coments[0].comment}" </div>
                )}

                <div className="promotion-card__comments"> 
                {promotion.coments.length} 
                {promotion.coments.length > 1 ? 'Comentários' : 'Comentário'} </div>
                <a href={promotion.url} target="_blank" rel="noreferrer" className="promotion-card__link" >IR PARA O SITE</a>
            </footer>

        </div>
    </div>
);

export default PromotionCard;