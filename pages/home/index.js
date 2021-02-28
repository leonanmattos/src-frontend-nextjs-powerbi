import SideBar from '../../components/template/SideBar';

export default function Home() {
  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 bg-gray-200">
        <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              Vitinho
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
