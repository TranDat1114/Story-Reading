import BookData from "@/data/books.json";
import { Book } from "@/types/home";

import "@components/ui/embla-carousel/embla.css"

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@components/ui/embla-carousel/embla-carousel";

import NewBooksUpdate from "../ui/booksUpdate/newBooksUpdate";
import FullBooksUpdate from "../ui/booksUpdate/fullBooksUpdate";
import BannerEmblaCarousel from "../ui/embla-carousel/banner-embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true }

const HomePage = () => {
    const databooks: Book[] = BookData.books as Book[];

    return (
        <div className="w-full">
            {/* <div className="hero rounded-box relative my-4">
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.zerochan.net%2FDoraemon.full.610553.jpg&f=1&nofb=1&ipt=eeeac466b9cf271b2ac48e9f55c928bd67162d9b8fab38b8405299a47bfc00a5&ipo=images" className="absolute  w-full h-full object-cover rounded-box" ></img>
                <div className="hero-overlay bg-opacity-80 backdrop-blur-sm rounded-box"></div>
                <div className="hero-content flex-col lg:flex-row lg:gap-x-8 w-full justify-evenly">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.zerochan.net%2FDoraemon.full.610553.jpg&f=1&nofb=1&ipt=eeeac466b9cf271b2ac48e9f55c928bd67162d9b8fab38b8405299a47bfc00a5&ipo=images" className="shadow-2xl max-w-xl rounded-lg bg-transparent object-cover max-h-96" />
                    <div className="lg:w-1/2">
                        <div className="prose my-8">
                            <h1 className="text-primary text-center lg:text-start">Truyện chữ</h1>
                            <h4 className="text-white line-clamp-4">Trang web đọc truyện này cung cấp một trải nghiệm độc đáo và thú vị cho độc giả, với bộ sưu tập đa dạng của các thể loại truyện, từ hài hước đến kinh điển.</h4>
                        </div>
                        <div className="flex gap-x-4 justify-center lg:justify-start">
                            <button className="btn btn-primary btn-md" onClick={() => scrollToElement(startedRef)}>Bắt đầu nào</button>
                            <button className="btn btn-primary btn-md" onClick={() => scrollToElement(startedRef)}><Heart /> Yêu thích</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <BannerEmblaCarousel slides={databooks} options={OPTIONS} title="Truyện đề cử" />

            <div className="divider" >

            </div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title={"Truyện đề cử"} />
            <div className="divider">😘</div>
            <div className="h-32 container m-auto prose">
                <h1 className="text-center">
                    Quảng cáo ở đây
                </h1>
            </div>
            <div className="divider"></div>

            <EmblaCarousel slides={databooks} options={OPTIONS} title={"Truyện yêu thích mỗi tuần"} />
            <div className="divider">
                💖
            </div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="Bảng xếp hạng truyện vip" />
            <div className="divider">
                💖
            </div>
            <EmblaCarousel slides={databooks} options={OPTIONS} title="truyện HOT mới ra lò" />
            <div className="divider">
                💖
            </div>
            <div className="md:grid md:grid-cols-4">
                <div className="md:col-span-3 space-y-4">
                    <h1 className="text-xl md:text-2xl font-bold">Truyện mới cập nhật</h1>
                    <div className="border border-solid border-[#f1f2f3] rounded-lg p-4">
                        <NewBooksUpdate />
                    </div>
                </div>
                <div className="space-y-4">
                    <h1 className="text-xl md:text-2xl font-bold">Truyện đã Full</h1>
                    <div className="border border-solid border-[#f1f2f3] rounded-lg p-4">
                        <FullBooksUpdate />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;