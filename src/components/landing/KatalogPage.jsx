import { Link } from "react-router-dom";

function KatalogPage() {
  return (
    <div className="flex gap-3 justify-between">
      <div className="flex flex-col justify-center w-[638px] ">
        <h2 className=" unbounded font-extrabold text-[#000000] uppercase mb-4 ">
          <span>Инструменты для профессиональных</span>{" "}
          <span className="text-orenj-clr">стоматологов</span>
        </h2>
        <p className="w-[421px] mb-[51px]">
          Обеспечьте свою практику лучшими инструментами от ведущих
          производителей
        </p>
        <Link to="/magazin" className="btn bg-orenj-clr w-[230px] text-[#fff]">
          В каталог
        </Link>
      </div>
      <div>
        <img
          className=" w-[707px] h-[609px]"
          src=""
          alt=""
        />
      </div>
    </div>
  );
}

export default KatalogPage