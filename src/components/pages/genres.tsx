import BookData from "@/data/books.json"
import { Book } from "@/types/home";

import "@components/ui/embla-carousel/embla.css"
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@components/ui/embla-carousel/embla-carousel";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
const OPTIONS: EmblaOptionsType = { loop: true }

const GenrePage = () => {
  

    const databooks: Book[] = BookData.books;

    const startedRef = useRef<HTMLDivElement>(null);
    const scrollToElement = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
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
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Top 10 Unlock All-time" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Top 10 Unlock Tuần" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Những Truyện Tranh Phổ Biến" />
            <div className="divider"></div>
            <div className="hero bg-base-200 my-4 p-4">
                <div className="hero-content flex-col lg:flex-row gap-x-12 ">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperset.com%2Fw%2Ffull%2F1%2F3%2F5%2F233024.jpg&f=1&nofb=1&ipt=d89273e1af2d743b5b5d218b7ee35ce1b957913c29bcb8502c71c87198d69aeb&ipo=images" className="shadow-2xl max-w-xl rounded-lg bg-transparent w-full" />
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold capitalize">Truyện phổ biến trong tuần!</h1>
                        <p className="py-6">Khám phá những câu truyện phổ biến và hay nhất trong tuần tại đây.</p>
                        <button className="btn btn-info btn-outline" onClick={() => scrollToElement(startedRef)}>
                            <a className="link link-hover gap-2 flex items-center">
                                <p>Xem ngay tại đây</p>
                                <ArrowRight size={16} className="block align-middle" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
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
            <div className="hero bg-base-200 my-4 p-4">
                <div className="hero-content flex-col lg:flex-row gap-x-12 ">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperset.com%2Fw%2Ffull%2F1%2F3%2F5%2F233024.jpg&f=1&nofb=1&ipt=d89273e1af2d743b5b5d218b7ee35ce1b957913c29bcb8502c71c87198d69aeb&ipo=images" className="shadow-2xl max-w-xl rounded-lg bg-transparent w-full" />
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold capitalize">Truyện phổ biến nhất trong ngày!</h1>
                        <p className="py-6">Khám phá những câu truyện phổ biến và hay nhất trong ngày tại đây.</p>
                        <button className="btn btn-info btn-outline" onClick={() => scrollToElement(startedRef)}>
                            <a className="link link-hover gap-2 flex items-center" href="/rankings">
                                <p>Xem ngay tại đây</p>
                                <ArrowRight size={16} className="block align-middle" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
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
            <div className="hero bg-base-200 my-4 p-4">
                <div className="hero-content flex-col lg:flex-row gap-x-12 ">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperset.com%2Fw%2Ffull%2F1%2F3%2F5%2F233024.jpg&f=1&nofb=1&ipt=d89273e1af2d743b5b5d218b7ee35ce1b957913c29bcb8502c71c87198d69aeb&ipo=images" className="shadow-2xl max-w-xl rounded-lg bg-transparent w-full" />
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold capitalize">Truyện phổ biến nhất trong năm!</h1>
                        <p className="py-6">Khám phá những câu truyện phổ biến và hay nhất trong năm tại đây.</p>
                        <button className="btn btn-info btn-outline" onClick={() => scrollToElement(startedRef)}>
                            <a className="link link-hover gap-2 flex items-center" href="/rankings">
                                <p>Xem ngay tại đây</p>
                                <ArrowRight size={16} className="block align-middle" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện khoa học viễn tưởng" />
            <div className="divider"></div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Truyện võ thuật" />
            <div className="divider"></div>
            <div className="pb-4">
                <div className="w-full space-y-4">
                    <p className="font-semibold text-xl">Truyện chữ</p>
                    <p>Đọc truyện tranh hay nhất, đa dạng thể loại: truyện tranh ngôn tình, truyện tranh đam mỹ, truyện tranh cổ trang...</p>
                </div>
            </div>
        </div>
    );
}

export default GenrePage;