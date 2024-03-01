
import BookData from "@/data/books.json"
import { Book } from "@/types/home";

import "@components/ui/embla-carousel/embla.css"

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@components/ui/embla-carousel/embla-carousel";
import { motion } from "framer-motion";

import React, { useRef } from 'react';

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
            <div className="hero bg-base-200 my-4 p-4">
                <div className="hero-content flex-col lg:flex-row gap-x-12 ">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperset.com%2Fw%2Ffull%2F1%2F3%2F5%2F233024.jpg&f=1&nofb=1&ipt=d89273e1af2d743b5b5d218b7ee35ce1b957913c29bcb8502c71c87198d69aeb&ipo=images" className="shadow-2xl max-w-xl rounded-lg bg-transparent w-full" />

                    <div>
                        <h1 className="text-5xl font-bold">Truyện Tranh Mới!</h1>
                        <p className="py-6">Trang web đọc truyện này cung cấp một trải nghiệm độc đáo và thú vị cho độc giả, với bộ sưu tập đa dạng của các thể loại truyện, từ hài hước đến kinh điển.</p>
                        <button className="btn btn-primary" onClick={() => scrollToElement(startedRef)}>Bắt đầu nào</button>
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
            <div className="h-56 container m-auto prose">
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
            <div className="h-56 container m-auto prose">
                <h1 className="text-center">
                    Quảng cáo ở đây
                </h1>
            </div>
        </div>
    );
}

export default HomePage;