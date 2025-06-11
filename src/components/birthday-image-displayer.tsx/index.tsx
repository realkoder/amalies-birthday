import { ImgFixedSize } from "../image-atoms/img-fixed-size";

export function BirtdayImageDisplayer() {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <div className="grid grid-cols-2 gap-4">
        <ImgFixedSize imgSrc="amalie-håret-ud.png" imgEffectSrc="amalie-hangloose.png" />
        <ImgFixedSize imgSrc="klinik-amalie.png"  imgEffectSrc="pubmed-article.png" />
        <ImgFixedSize imgSrc="amalie-dyr.png"  imgEffectSrc="pubmed-article.png" />
        <ImgFixedSize imgSrc="amalie-entertainer.png"  imgEffectSrc="amalie-hangloose.png" />
      </div>
    </div>
  );
}
