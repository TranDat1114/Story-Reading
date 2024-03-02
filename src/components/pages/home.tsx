
import BookData from "@/data/books.json"
import { Book } from "@/types/home";

import "@components/ui/embla-carousel/embla.css"

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@components/ui/embla-carousel/embla-carousel";
import { motion } from "framer-motion";

import React, { useRef } from 'react';
import { Heart } from "lucide-react";

const OPTIONS: EmblaOptionsType = { loop: true }

const HomePage = () => {
    const databooks: Book[] = BookData.books;

    const startedRef = useRef<HTMLDivElement>(null);
    const scrollToElement = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className="w-full">
            <div className="hero rounded-box relative bg-[url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.zerochan.net%2FDoraemon.full.610553.jpg&f=1&nofb=1&ipt=eeeac466b9cf271b2ac48e9f55c928bd67162d9b8fab38b8405299a47bfc00a5&ipo=images')] my-4">
                <div className="hero-overlay bg-opacity-80 backdrop-blur-sm rounded-box"></div>
                <div className="hero-content flex-col lg:flex-row lg:gap-x-8 w-full justify-evenly">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.zerochan.net%2FDoraemon.full.610553.jpg&f=1&nofb=1&ipt=eeeac466b9cf271b2ac48e9f55c928bd67162d9b8fab38b8405299a47bfc00a5&ipo=images" className="shadow-2xl w-full max-w-xl rounded-lg bg-transparent object-cover max-h-96" />

                    <div className="lg:w-1/2">
                        <div className="prose my-8">
                            <h1 className="text-primary text-center lg:text-start">Doraemon truyện chữ</h1>
                            <h4 className="text-white line-clamp-4">Trang web đọc truyện này cung cấp một trải nghiệm độc đáo và thú vị cho độc giả, với bộ sưu tập đa dạng của các thể loại truyện, từ hài hước đến kinh điển.</h4>
                        </div>
                        <div className="flex gap-x-4 justify-center lg:justify-start">
                            <button className="btn btn-primary btn-md" onClick={() => scrollToElement(startedRef)}>Bắt đầu nào</button>
                            <button className="btn btn-primary btn-md" onClick={() => scrollToElement(startedRef)}><Heart/> Yêu thích</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center flex-col lg:items-start space-y-4" ref={startedRef}>
                <div className="flex items-center gap-x-2 hover:text-orange-500 transition-all duration-300 ease-in-out">
                    <motion.p className="capitalize text-2xl hover:text-orange-500 font-bold cursor-pointer"
                        whileHover={{
                            scale: 1.2,
                            transition: {
                                duration: 1,
                                ease: "easeInOut"
                            },
                        }}
                        onHoverStart={() => { }}
                        onHoverEnd={() => { }}
                    >Những truyện tranh phổ biến</motion.p>
                </div>
                <EmblaCarousel slides={databooks} options={OPTIONS} />
            </div>
            <div className="divider"></div>
            <div className="h-32 container m-auto prose">
                <h1 className="text-center">
                    Quảng cáo ở đây
                </h1>
            </div>
            <div className="divider"></div>
            <div className="flex items-center flex-col lg:items-start space-y-4">
                <motion.p className="capitalize text-2xl hover:text-orange-500 font-bold cursor-pointer"
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
                💖
            </div>
            <div className="flex items-center flex-col lg:items-start space-y-4">
                <div className="flex items-center gap-x-2 hover:text-orange-500 transition-all duration-300 ease-in-out">
                    <motion.p className="capitalize text-2xl hover:text-orange-500 font-bold cursor-pointer"
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
            <div className="divider"></div>
            <div className="h-32 container m-auto prose">
                <h1 className="text-center">
                    Quảng cáo ở đây
                </h1>
            </div>
        </div>
    );
}

export default HomePage;