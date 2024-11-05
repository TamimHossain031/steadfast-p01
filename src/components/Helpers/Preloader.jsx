import load from '/preloader.gif';
export default function Preloader() {
  return (
    <>
      <div className="w-dvw h-dvh z-[1000] absolute top-0 left-0 bg-bgDark2 grid place-content-center">
        <img src={load} alt="preloader" />
      </div>
    </>
  );
}
