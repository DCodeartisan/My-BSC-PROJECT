function Certification() {
  return (
    <div>
      <h1 className="uppercase text-center">Certification</h1>
      <p className="py-6">
        This is to certify that this research, "Effect of inductive and deductive methods of teaching on secondary school students' achievement in mathematics." is original and was carried out by Osideko Fisayo Joshua with Matric no 180313071 student of the Department of Science Education.
      </p>
      
      <div className="flex flex-row gap-10 lg:gap-50 xl:gap-100 2xl:gap-150 mt-25 lg:mt-40 lg:mb-80 2xl:mb-0 2xl:mt-60">
        <div className="w-1/2">
          <hr className="md:w-[200px] w-[150px]" />
          <h2 className="uppercase my-5">Dr S.O. Akinoso</h2>
          <p>Supervisor</p>
        </div>
        
        <div className="w-1/2">
          <hr className="md:w-[200px] w-[150px]" />
          <p className="uppercase font-bold my-5">Date</p>
        </div>
      </div>
    </div>
  );
}

export default Certification;