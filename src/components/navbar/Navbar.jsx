const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5">
      <div className="flex items-end gap-2">
        <img
          src="https://optim.tildacdn.pub/tild6631-6232-4037-a439-663632313035/-/resize/258x/-/format/webp/logo.png"
          alt="logo"
        />
        <span>
          <p className="max-w-[200px] text-[17px] leading-7">
            Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi
          </p>
        </span>
      </div>
      <ul className="flex items-center justify-between gap-7">
        <li className=" hover:font-bold font-medium text-[18px] hover:text-blue-600 hover:underline hover:text-[19px] text-[#333333]">
          <a href="#">Nega biz</a>
        </li>
        <li className=" hover:font-bold font-medium text-[18px] hover:text-blue-600 hover:underline hover:text-[19px] text-[#333333]">
          <a href="#">Natijalar</a>
        </li>
        <li className=" hover:font-bold font-medium text-[18px] hover:text-blue-600 hover:underline hover:text-[19px] text-[#333333]">
          <a href="#">Kurslar</a>
        </li>
        <li className=" hover:font-bold font-medium text-[18px] hover:text-blue-600 hover:underline hover:text-[19px] text-[#333333]">
          <a href="#">Ko’p beriladigan savollar</a>
        </li>
      </ul>
      <select className="w-[110px] h-10 rounded-lg font-bold px-2 bg  text-slate-700  ">
        <option value="ru">Russian</option>
        <option value="uz">Uzbek</option>
      </select>
      <div className="flex items-center flex-col justify-center">
        <button className="font-medium text-[22px]">
          <a href="#">+998 (90) 062 4341</a>
        </button>
        <button className="font-normal text-[22px]">
          <a href="#">Hoziroq bog’laning</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
