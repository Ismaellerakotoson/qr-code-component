import "./App.css";
import grcodeimg from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="flex background-color min-h-screen text-black items-center justify-center">
      <div className="bg-white p-4 rounded-xl max-w-xs">
        <div className=" flex items-center justify-center">
          <img src={grcodeimg} alt="QrCodeImg" className="rounded-xl"/>
        </div>
        <div className="text-center mt-6">
          <div className=" mb-4">
            <h1 className="title-color max-w-[30ch] mx-auto font-bold text-2xl">
              Improve your front-end skills by building projects
            </h1>
          </div>
          <div className="text-sm mb-7">
            <p className="text-color max-w-[25ch] mx-auto font-normal">
              Scan the QR-code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
