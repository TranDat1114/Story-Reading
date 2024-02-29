
import BookData from "@/data/books.json"
import { Book } from "@/types/home";

import "@components/ui/embla-carousel/embla.css"

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@components/ui/embla-carousel/embla-carousel";
import { motion } from "framer-motion";

const OPTIONS: EmblaOptionsType = { loop: true }

const HomePage = () => {

    const databooks: Book[] = BookData.books;
    return (
        <div className="w-full">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="h-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Truyện Tranh Mới!</h1>
                        <p className="py-6">Trang web đọc truyện này cung cấp một trải nghiệm độc đáo và thú vị cho độc giả, với bộ sưu tập đa dạng của các thể loại truyện, từ hài hước đến kinh điển.</p>
                        <button className="btn btn-primary">Bắt đầu nào</button>
                    </div>
                </div>
            </div>
            <div className="w-full mt-12 flex justify-center">
                <p className="text-2xl font-bold cursor-pointer">Những truyện tranh phổ biến</p>
            </div>
            <div className="w-full pt-4">
                <EmblaCarousel slides={databooks} options={OPTIONS} />
            </div>
            <div className="divider"></div>
            <div className="flex items-center flex-col space-y-4">
                <motion.p className="capitalize text-2xl hover:text-orange-500 font-bold cursor-pointer justify-start"
                    whileHover={{
                        scale: 1.2,
                        transition: {
                            duration: 1,
                            ease: "easeInOut"
                        },
                    }}
                    onHoverStart={() => { }}
                    onHoverEnd={() => { }}
                >Tập mới - xem ngay</motion.p>
                <EmblaCarousel slides={databooks} options={OPTIONS} />
            </div>
            <div className="divider">
            </div>
            <div className="flex items-center flex-col space-y-4">
                <div className="flex items-center gap-x-2 hover:text-orange-500 transition-all duration-300 ease-in-out">
                    <motion.p className="capitalize text-2xl hover:text-orange-500 font-bold cursor-pointer justify-start"
                        whileHover={{
                            scale: 1.2,
                            transition: {
                                duration: 1,
                                ease: "easeInOut"
                            },
                        }}
                        onHoverStart={() => { }}
                        onHoverEnd={() => { }}
                    >Truyện thanh xuân</motion.p>
                </div>
                <EmblaCarousel slides={databooks} options={OPTIONS} />
            </div>
        </div>
    );
}

export default HomePage;