export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <div className='bg-white shadow-lg rounded-2xl p-8 max-w-md text-center'>
        <h1 className='text-3xl font-bold text-blue-600 mb-4'>
          Deployed on AWS
        </h1>
        <p className='text-gray-600'>
          This Next.js app is running on AWS infrastructure.
        </p>
        <p className='text-gray-500 mt-2'>By Anuj</p>
        <div className='mt-6'>
          <button className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
