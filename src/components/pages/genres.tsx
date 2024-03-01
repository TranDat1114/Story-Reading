import BookData from "@/data/books.json"
import { Book } from "@/types/home";

import "@components/ui/embla-carousel/embla.css"
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@components/ui/embla-carousel/embla-carousel";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const OPTIONS: EmblaOptionsType = { loop: true }

const GenrePage = () => {
    const { genresName } = useParams();

    const databooks: Book[] = BookData.books;

    const startedRef = useRef<HTMLDivElement>(null);
    const scrollToElement = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>
            {genresName}
            <div className="flex items-center flex-col lg:items-start space-y-4">
                <div className="flex items-center gap-x-2 hover:text-orange-500 transition-all duration-300 ease-in-out">
                    <p className="capitalize text-2xl hover:text-orange-500 font-bold cursor-pointer">chương mới - xem ngay!</p>
                </div>
                <EmblaCarousel slides={databooks} options={OPTIONS} />
            </div>
            <div className="divider"></div>
            <div className="h-56 container m-auto prose">
                <h1 className="text-center">
                    Quảng cáo ở đây
                </h1>
            </div>
            <div className="divider"></div>
            <div className="flex items-center flex-col lg:items-start space-y-4">
                <div className="flex items-center gap-x-2 hover:text-orange-500 transition-all duration-300 ease-in-out">
                    <p className="capitalize text-2xl hover:text-orange-500 font-bold cursor-pointer">top 10 unlock all-time</p>
                </div>
                <EmblaCarousel slides={databooks} options={OPTIONS} />
            </div>
            <div className="divider"></div>
            <div className="flex items-center flex-col lg:items-start space-y-4">
                <div className="flex items-center gap-x-2 hover:text-orange-500 transition-all duration-300 ease-in-out">
                    <p className="capitalize text-2xl hover:text-orange-500 font-bold cursor-pointer">top 10 unlock tuần</p>
                </div>
                <EmblaCarousel slides={databooks} options={OPTIONS} />
            </div>
            <div className="divider"></div>
            <div className="flex items-center flex-col lg:items-start space-y-4">
                <div className="flex items-center gap-x-2 hover:text-orange-500 transition-all duration-300 ease-in-out">
                    <p className="capitalize text-2xl hover:text-orange-500 font-bold cursor-pointer">Những truyện tranh phổ biến</p>
                </div>
                <EmblaCarousel slides={databooks} options={OPTIONS} />
            </div>
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
            <div className="flex items-center flex-col lg:items-start space-y-4">
                <div className="flex items-center gap-x-2 hover:text-orange-500 transition-all duration-300 ease-in-out">
                    <p className="capitalize text-2xl hover:text-orange-500 font-bold cursor-pointer">Truyện lãng mạn</p>
                </div>
                <EmblaCarousel slides={databooks} options={OPTIONS} />
            </div>
            <div className="flex items-center flex-col lg:items-start space-y-4">
                <div className="flex items-center gap-x-2 hover:text-orange-500 transition-all duration-300 ease-in-out">
                    <p className="capitalize text-2xl hover:text-orange-500 font-bold cursor-pointer">Truyện hành động</p>
                </div>
                <EmblaCarousel slides={databooks} options={OPTIONS} />
            </div>
            <div className="flex items-center flex-col lg:items-start space-y-4">
                <div className="flex items-center gap-x-2 hover:text-orange-500 transition-all duration-300 ease-in-out">
                    <p className="capitalize text-2xl hover:text-orange-500 font-bold cursor-pointer">Truyện phiêu lưu</p>
                </div>
                <EmblaCarousel slides={databooks} options={OPTIONS} />
            </div>
            <div className="flex items-center flex-col lg:items-start space-y-4">
                <div className="flex items-center gap-x-2 hover:text-orange-500 transition-all duration-300 ease-in-out">
                    <p className="capitalize text-2xl hover:text-orange-500 font-bold cursor-pointer">Truyện bí ẩn</p>
                </div>
                <EmblaCarousel slides={databooks} options={OPTIONS} />
            </div>
        </div>
    );
}

export default GenrePage;