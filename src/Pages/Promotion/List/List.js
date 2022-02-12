import React from "react";
import PromotionCardIndex from "../PromotionCard/PromotionCard";
import './List.css'

const PromotionList = ({ loading, promotions }) => {
    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="promotion-list">
            {promotions.map((promotion)=> (
            <PromotionCardIndex promotion={promotion} />
            ))}
        </div>
    )
}

export default PromotionList;