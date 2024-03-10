import BookData from "@/data/books.json"
import { Book } from "@/types/home";

import { EmblaOptionsType } from "embla-carousel";

import "@components/ui/embla-carousel/embla.css"
import EmblaCarousel from "@components/ui/embla-carousel/embla-carousel";
import EmblaCarouselGenere from "@components/ui/embla-carousel/embla-caoursel-genre";

// import { ArrowRight } from "lucide-react";
// import { useRef } from "react";
// import BannerEmblaCarousel from "../ui/embla-carousel/banner-embla-carousel";
const OPTIONS: EmblaOptionsType = { loop: true }
const optionsGenere: EmblaOptionsType = { loop: true, align: 'start', dragFree: true }

const GenrePage = () => {


    const databooks: Book[] = BookData.books;

    // const startedRef = useRef<HTMLDivElement>(null);
    // const scrollToElement = (ref: React.RefObject<HTMLDivElement>) => {
    //     if (ref && ref.current) {
    //         ref.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };
    return (
        <div className="space-y-4">
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Chương Mới - Xem Ngay!" />
            <div className="divider"></div>
            <div className="h-56 container m-auto prose">
                <h1 className="text-center">
                    Quảng cáo ở đây
                </h1>
            </div>
            <div className="divider"></div>
            <EmblaCarouselGenere slides={databooks} options={optionsGenere} title="Truyện lãng mạn" />
            <div className="divider"></div>
            <EmblaCarouselGenere slides={databooks} options={optionsGenere} title="Truyện hành động" />
            <div className="divider"></div>
            <EmblaCarouselGenere slides={databooks} options={optionsGenere} title="Truyện phiêu lưu" />
            <div className="divider"></div>
            <EmblaCarouselGenere slides={databooks} options={optionsGenere} title="Truyện bí ẩn" />
            <div className="divider"></div>
            <EmblaCarouselGenere slides={databooks} options={optionsGenere} title="Truyện kinh dị" />
            <div className="divider"></div>
            <EmblaCarouselGenere slides={databooks} options={optionsGenere} title="Truyện hài hước" />
            <div className="divider"></div>
            <EmblaCarouselGenere slides={databooks} options={optionsGenere} title="Truyện lịch sử" />
            <div className="divider"></div>
            {/* <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Top 10 Unlock All-time" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Top 10 Unlock Tuần" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Những Truyện Tranh Phổ Biến" />
            <div className="divider"></div>
            <BannerEmblaCarousel slides={databooks} options={OPTIONS} title="Truyện đề cử" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện lãng mạn" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện hành động" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện phiêu lưu" />
            <div className="divider"></div>
            <div className="h-56 container m-auto prose">
                <h1 className="text-center">
                    Quảng cáo ở đây
                </h1>
            </div>
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện lãng mạn" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện kịch tích" />
            <div className="divider"></div>
            <BannerEmblaCarousel slides={databooks} options={OPTIONS} title="Truyện đề cử" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện kịch" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện lịch sử" />
            <div className="divider"></div>
            <div className="h-56 container m-auto prose">
                <h1 className="text-center">
                    Quảng cáo ở đây
                </h1>
            </div>
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện siêu nhân" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện học đường" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện đời thường" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện tâm lý" />
            <div className="divider"></div>
            <BannerEmblaCarousel slides={databooks} options={OPTIONS} title="Truyện đề cử" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện khoa học viễn tưởng" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện võ thuật" />
            <div className="divider"></div> */}
            <div className="pb-4">
                <div className="w-full space-y-4">
                    <p className="font-semibold text-xl">Truyện chữ</p>
                    <p>Đọc truyện tranh hay nhất, đa dạng thể loại: truyện hành động, truyện kinh dị, truyện hài hước...</p>
                </div>
            </div>
        </div>
    );
}

export default GenrePage;