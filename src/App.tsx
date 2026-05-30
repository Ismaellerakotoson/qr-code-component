import "./App.css";
import { QRCodeSVG } from "qrcode.react";

function App() {
  return (
    <div className="flex background-color min-h-screen text-black items-center justify-center">
      <div className="blackground-white p-4 rounded-xl max-width min-width">
        <div className="bg-blue-500 flex items-center justify-center p-10 rounded-xl">
          <div className="p-8">
            <QRCodeSVG value="https://frontendmentor.io" 
            fgColor="#FFFFFF"
            bgColor="transparent"/>
          </div>
        </div>
        <div className="text-center mt-5">
          <div className="font-bold mb-3">
            <h1 className="title-color max-w-xs">Improve your front-end skills by building projects</h1>
          </div>
          <div className="text-sm font-normal">
            <p className="text-color max-w-xs">
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
