const Header = () => {
  const divStyle = {
    backgroundImage:
      "url(https://optim.tildacdn.pub/tild6130-3963-4033-b434-333530643238/-/format/webp/mainimg.png)",
    height: "650px",
    backgroundSize: "cover", // Rasm to'liq ko'rinishi uchun
    backgroundPosition: "end" // Rasm markazda joylashishi uchun
  };
  return (
    <div className="px-10" style={divStyle}>
      <div className="flex items-center gap-3 ">
        <p className="w-[39px] h-[1px] bg-[#A7DFB1]"></p>
        <p className="text-[18px] text-[#333333]">
          3 oyda Koreys tilida gapirishni boshlang
        </p>
      </div>

      <div className="  pt-10">
        <div className="space-y-20">
          <div>
            <h1 className="text-[64px] font-medium text-[#b789f8] max-w-[988px] leading-20 border ">
              Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish
              imkoniyati
            </h1>
          </div>
          <div className="flex items-center ">
            <div className="flex items-center justify-center gap-6">
              <div className="w-[25px] h-[60px] ">
                <img
                  src="https://static.tildacdn.info/tild3463-6463-4138-b665-383266323530/decoration.svg"
                  alt="logo"
                  className="w-full h-full"
                />
              </div>
              <p className="text-[17px] w-[192px] text-[#333333]">
                5 oyda Topikdan 6 darajagacha olishda yordam beramiz
              </p>
            </div>
            <div className="flex items-center justify-center gap-6">
              <div className="w-[25px] h-[60px] ">
                <img
                  src="https://static.tildacdn.info/tild3463-6463-4138-b665-383266323530/decoration.svg"
                  alt="logo"
                  className="w-full h-full"
                />
              </div>
              <p className="text-[17px] w-[192px] text-[#333333]">
                Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish
                va ishlash imkoniyati
              </p>
            </div>
          </div>
        </div>
        <div>
          <button>BEPUL DARSGA YOZILISH</button>
          <p>Birinchi darsga bepul yoziling!</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
