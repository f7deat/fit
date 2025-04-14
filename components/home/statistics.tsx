const Statistics: React.FC = () => {
  return (
    <div className="h-40" style={{
      backgroundImage: "url('https://dhhp.edu.vn/fit/world-map.png')",
    }}>
      <div className="h-full container mx-auto flex items-center 2xl:max-w-7xl" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-2xl font-bold 2xl:text-5xl mb-1 text-[#bf0a30]">98%</h2>
            <p className="text-lg font-medium">Sinh viên có việc làm</p>
          </div>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-2xl font-bold 2xl:text-5xl mb-1 text-[#bf0a30]">3+</h2>
            <p className="text-lg font-medium">Chương trình đào tạo</p>
          </div>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-2xl font-bold 2xl:text-5xl mb-1 text-[#bf0a30]">1.500+</h2>
            <p className="text-lg font-medium">Sinh viên đang học</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;