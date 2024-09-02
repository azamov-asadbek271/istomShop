 import { NavLink } from "react-router-dom";
 const links = [
   {
     id: 1,
     text: "Магазин",
     link: "/magazin",
   },
   {
     id: 2,
     text: "Оплата и доставка",
     link: "/dastavka",
   },
   {
     id: 3,
     text: "О нас",
     link: "/onas",
   },
   {
     id: 4,
     text: "Контакты",
     link: "/kontakt",
   },
 ];

 function NavLinks() {
   return (
     <div className="flex gap-[64px] mr-[64px] pt-2">
       {links.map((link) => {
         return (
           <li
             key={link.id}
             className="text-text-clr hover:text-bleck-clr transition duration-200"
           >
             <NavLink to={link.link} className="capitalize ">
               {link.text}
             </NavLink>
           </li>
         );
       })}
     </div>
   );
 }

 export default NavLinks;
