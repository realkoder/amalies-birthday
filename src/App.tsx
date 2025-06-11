import { useEffect, useState } from "react";
import "./App.css";
import { ImgFixedSize } from "./components/image-atoms/img-fixed-size";
import { EmojiRain } from "./components/emoji-rain-effect";
import { ImageRain } from "./components/image-rain-effect";
import { BirtdayImageDisplayer } from "./components/birthday-image-displayer.tsx";

function App() {
  const [showEmojiRain, setShowEmojiRain] = useState(false);
  const [showImageRain, setShowImageRain] = useState(false);
  const [counterToAction, setCounterToAction] = useState(0);

  useEffect(() => {
    if (counterToAction > 5) {
      setCounterToAction(0);
    }
  }, [counterToAction]);

  return (
    <div className="bg-gradient-birthday w-screen min-h-screen">
      {showEmojiRain && <EmojiRain emoji="🎁 🥳" count={150} />}
      {showImageRain && (
        <ImageRain imageSrc="pubmed-article.png" imageSize={150} />
      )}
      <header className="flex flex-col items-center gap-9 p-4">
        <ImgFixedSize imgSrc="amalie-portrait.png" imgEffectSrc="amalie.png" />
        <p
          className="text-5xl text-center font-bold text-white drop-shadow-lg"
          onClick={() => {
            setShowEmojiRain(true);
            setTimeout(() => setShowEmojiRain(false), 10000);
          }}
        >
          TIllYKKE SØSTER AMALIEEE !!
        </p>
        <p
          className="text-2xl text-white italic"
          onClick={() => {
            setShowEmojiRain(true);
            setTimeout(() => setShowEmojiRain(false), 10000);
          }}
        >
          Hjerteligt tillykke med din fødselsdag malle! - du skal fandme ikke
          snydes for en website
        </p>
        {counterToAction > 0 && counterToAction <= 5 && (
          <p className="text-2xl text-white italic">
            KLIK LIDT MERE:{" "}
            {counterToAction - 5 === 0 ? "WOIUHHHH" : 5 - counterToAction} LIGE
            OM LIDT ER DET COOL
          </p>
        )}

        {counterToAction === 5 && (
          <a
            href="https://emmerys.dk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex border-2 rounded-2xl p-2 flex-col items-center gap-2 group"
          >
            <img
              src="pubmed-article.png"
              alt="Nike Logo"
              className="w-32 h-32 object-cover rounded-full border-4 border-green-400 shadow-lg animate-spin-slow group-hover:scale-110 transition"
            />
            <span className="text-lg font-bold text-green-800 underline group-hover:text-blue-600 transition">
              Det er altså ret cool med egen PUBMED artikel 🏆 og måske du kan
              gætte din gave
            </span>
          </a>
        )}
      </header>

      <div className="flex flex-wrap justify-center gap-4">
        <img
          src="https://t4.ftcdn.net/jpg/04/88/00/61/360_F_488006153_uUMXZ7NXwrMJFhjt8vGWam00usSiegBn.jpg"
          alt="Sporty girl running"
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
          onClick={() => setCounterToAction((cur) => (cur += 1))}
        />
        <img
          src="https://sind.dk/files/styles/open_graph/public/media/image/Foredragsholder%20-%20Amalie%20B%C3%B8ving%20Thiel%20Christensen.jpg?itok=sBdBkaCd"
          alt="Fresh outdoors"
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
          onClick={() => {
            setShowImageRain(true);
            setTimeout(() => setShowImageRain(false), 10000);
          }}
        />
        <img
          src="https://images.vexels.com/media/users/3/198434/raw/095340abdb1df674f6914c6af6448a26-physiotherapie-line-icon-pack.jpg"
          alt="Sporty celebration"
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
          onClick={() => setCounterToAction((cur) => (cur += 1))}
        />
      </div>

      <BirtdayImageDisplayer />

      <main className="flex items-center justify-center"></main>
    </div>
  );
}

export default App;
