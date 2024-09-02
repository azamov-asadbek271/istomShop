import React from 'react'
import kachestvo from "../../images/navbar/infopages/kachestvo.png";
import Vecdostavka from "../../images/navbar/infopages/Vector-dostavka.png";
import  Vecglobus from "../../images/navbar/infopages/Vector-globus.png";
function InfoPages() {
  return (
    <div className="mb-20 flex justify-between gap-6 flex-col w-full ">
      <div
        className=" w-full card mt-20 bg-base-100  shadow-xl flex items-center pt-3 pb-[62px] cursor-pointer 
       transition hover:scale-105"
      >
        <img className="w-[60px] h-[98px] mb-6" src={kachestvo} alt="" />
        <h3 className="text-[#0F0F0EDB] font-bold text-[20px] leading-6 mb-3">
          Качество
        </h3>
        <p className="text-center text-[#9A9999]">
          Высокое качество печати и ультратонкая эластичная пленка
        </p>
      </div>
      {/*  */}
      <div className="card mt-20 bg-base-100 w-full shadow-xl flex items-center pt-3 pb-[62px] cursor-pointer transition hover:scale-105 ">
        <img className="w-[88px] h-[77px] mb-6" src={Vecdostavka} alt="" />
        <h3 className="text-[#0F0F0EDB] font-bold text-[20px] leading-6 mb-3">
          Доставка
        </h3>
        <p className="text-center text-[#9A9999]">
          Отправляем заказы в течении 1−2 рабочих дней, бесплатная доставка от
          2000 ₽
        </p>
      </div>
      {/*  */}
      <div className="card mt-20 bg-base-100 w-full shadow-xl flex items-center pt-3 pb-[62px] cursor-pointer transition hover:scale-105">
        <img className="w-[88px] h-[77px] mb-6" src={Vecglobus} alt="" />
        <h3 className="text-[#0F0F0EDB] font-bold text-[20px] leading-6 mb-3">
          Сотрудничество
        </h3>
        <p className="text-center text-[#9A9999]">
          Приглашаем к сотрудничеству партнёров по всему миру
        </p>
      </div>
      
    </div>
  );
}

export default InfoPages