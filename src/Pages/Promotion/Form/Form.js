import React from "react";
import { useParams } from "react-router-dom";
import PromotionForm from "Components/Promotion/Form/Form";
import UIContainer from "Components/Promotion/UI/Container/Container";

const PagesForm = () => {
    const { id } = useParams();

    return (

        <UIContainer>
            <PromotionForm  />
        </UIContainer>  
        
    );
};

export default PagesForm;