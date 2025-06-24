function Approval() {
  return (
    <div>
      <h1 className="uppercase text-center">
        approval page
      </h1>
      <p className='py-6'>
        This project prepared by Osideko Fisayo Joshua with Matric no 180313071 has been approved in partial fulfillment of the requirements for the award of the Bachelor of Science Education Degree B.Sc. (Ed) Degree in Mathematics, Faculty of Education, University of Lagos, Lagos, Nigeria.
      </p>

      <div className='flex flex-row gap-10 lg:gap-50 xl:gap-100 2xl:gap-150 mt-25 lg:mt-40 2xl:mt-60'>
        <div className='w-1/2'>
          <hr className='md:w-[200px] w-[150px]'/>
          <h2 className='uppercase my-3'>
            dr s.o. akinoso
          </h2>
          <p>
            Supervisor
          </p>
        </div>
        <div className='w-1/2'>
          <hr className='md:w-[200px] w-[150px]'/>
          <p className='uppercase font-bold my-3'>
            date
          </p>
        </div>
      </div>

      <div className='flex flex-row gap-10 lg:gap-50 xl:gap-100 2xl:gap-150 mt-25 lg:mt-40 2xl:mt-60'>
        <div className='w-1/2'>
          <hr className='md:w-[200px] w-[150px]'/>
          <h2 className='uppercase my-3'>
            prof. sunday adeyemo
          </h2>
          <p>
            Head of Department
          </p>
        </div>
        <div className='w-1/2'>
          <hr className='md:w-[200px] w-[150px]'/>
          <p className='uppercase font-bold my-3'>
            date
          </p>
        </div>
      </div>

      <div className='flex flex-row gap-10 lg:gap-50 xl:gap-100 2xl:gap-150 mt-25 lg:mt-40 2xl:mt-60'>
        <div className='w-1/2'>
          <hr className='md:w-[200px] w-[150px]'/>
          <h2 className='capitalize my-3'>
            external examiner
          </h2>
        </div>
        <div className='w-1/2'>
          <hr className='md:w-[200px] w-[150px]'/>
          <p className='uppercase font-bold my-3'>
            date
          </p>
        </div>
      </div>
    </div>
  )
}

export default Approval
