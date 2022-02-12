import React from "react";
import PromotionCard from "Components/Promotion/Card/Card";

const PromotionCardIndex = () => {

  
  const promotionIndex = {
    "id": 1,
    "title": "Kit Notebook 2 em 1 Dell Inspiron 5406-M20SB 14 Touch 11ª Geração Intel Core i5 8GB 256GB SSD Windows 11 McAfee Mochila ",
    "price": 4.799,
    "imageUrl": "https://m.media-amazon.com/images/I/61Hp5SWhV5L._AC_SL1000_.jpg",
    "url": "https://www.amazon.com.br/Notebook-Dell-Inspiron-5406-M20SB-Gera%C3%A7%C3%A3o/dp/B09LZZMMVV/ref=sr_1_24?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=VO6LHTHOSWMW&keywords=notebook+acer+com+mochila&qid=1644173415&refinements=p_89%3ADell&rnid=18120432011&s=computers&sprefix=notebook+acer+com+mochila%2Ccomputers%2C204&sr=1-24&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
       "coments": [
         {
           "id": 1,
           "comment": "TELA HD, 11ª Geração Intel Core i5"
         }
       ]
  };

  return (
    <div 
    style={{
      maxWidth: 800,
      margin: '30px auto'
    }}
    >
   <PromotionCard promotion={promotionIndex} ></PromotionCard> 
      
    </div>
  );
}

export default PromotionCardIndex;