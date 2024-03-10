import BookData from "@/data/books.json";
import { Book } from "@/types/home";

import "@components/ui/embla-carousel/embla.css"

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@components/ui/embla-carousel/embla-carousel";

import NewBooksUpdate from "@components/ui/booksUpdate/newBooksUpdate";
import FullBooksUpdate from "@components/ui/booksUpdate/fullBooksUpdate";
import BannerEmblaCarousel from "@components/ui/embla-carousel/banner-embla-carousel";
import Ads from "@components/ui/banner/ads";

const OPTIONS: EmblaOptionsType = { loop: true, dragFree: true, align: 'center', inViewThreshold: 0.5 }
const OPTIONSBanner: EmblaOptionsType = { loop: true, duration: 50 }

const HomePage = () => {
    const databooks: Book[] = BookData.books as Book[];

    return (
        <div className="w-full">

            <BannerEmblaCarousel slides={databooks} options={OPTIONSBanner} title="Truyện đề cử" />


            <EmblaCarousel slides={databooks} options={OPTIONS} title={"Truyện đề cử"} />
            <div className="divider">😘</div>


            <EmblaCarousel slides={databooks} options={OPTIONS} title={"Truyện yêu thích mỗi tuần"} />
            <div className="divider"></div>
            <Ads />
            <div className="divider">💖</div>
            {/* <EmblaCarousel slides={databooks} options={OPTIONS} title="Bảng xếp hạng truyện vip" />
            <div className="divider">
                💖
            </div> */}
            {/* <EmblaCarousel slides={databooks} options={OPTIONS} title="truyện HOT mới ra lò" />
            <div className="divider">
                💖
            </div> */}
            <div className="lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0 space-y-6">
                <div className="md:col-span-3 space-y-4">
                    <h1 className="text-xl md:text-2xl font-bold">Truyện mới cập nhật</h1>
                    <NewBooksUpdate />
                </div>
                <div className="space-y-4">
                    <h1 className="text-xl md:text-2xl font-bold">Truyện đã Full</h1>

                    <FullBooksUpdate />

                </div>
            </div>
            <div className="divider"></div>
            <Ads />
            <div className="divider"></div>
            <div>

            </div>
        </div>
    );
}

export default HomePage;