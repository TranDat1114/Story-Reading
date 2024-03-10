import React, { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { Book } from '@/types/home';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { DotButton, useDotButton } from './embla-dot-button';

type PropType = {
    slides: Book[];
    options?: EmblaOptionsType;
    title: string;
};

const BannerEmblaCarousel: React.FC<PropType> = React.memo((props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;
        const resetOrStop =
            (autoplay.options as AutoplayOptionsType).stopOnInteraction === false
                ? (autoplay.reset as () => void)
                : (autoplay.stop as () => void);
        resetOrStop();
    }, []);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onNavButtonClick
    );

    return (
        <div className="flex items-center flex-col space-y-4 w-full">
            <section className="banner-embla">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex banner-embla-container w-screen">
                        {slides.map((book, index) => (
                            <React.Fragment key={index}>
                                <Link to={`/novels/${book.path}`} className="embla__slide cursor-pointer">
                                    <div className="hero rounded-box relative w-full">
                                        <img src={book.img} className="absolute w-full h-full object-cover rounded-box" alt={book.name} />
                                        <div className="hero-overlay bg-opacity-80 backdrop-blur-sm rounded-box"></div>
                                        <div className="hero-content flex-col lg:flex-row lg:gap-x-8 w-full justify-evenly">
                                            <img src={book.img} className="shadow-2xl w-[265px] rounded-lg bg-transparent object-cover h-96" alt={book.name} />
                                            <div className="lg:w-1/2">
                                                <div className="prose my-8">
                                                    <h1 className="text-primary text-center lg:text-start">Truyện chữ</h1>
                                                    <h4 className="text-white line-clamp-4">Trang web đọc truyện này cung cấp một trải nghiệm độc đáo và thú vị cho độc giả, với bộ sưu tập đa dạng của các thể loại truyện, từ hài hước đến kinh điển.</h4>
                                                </div>
                                                <div className="flex gap-x-4 justify-center lg:justify-start">
                                                    <button className="btn btn-primary btn-md">Đọc ngay</button>
                                                    <button className="btn btn-primary btn-md"><Heart /> Yêu thích</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className="embla__dots space-x-2">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={'badge badge-outline badge-xs '.concat(
                                    index === selectedIndex ? 'active bg-warning' : ''
                                )}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
});

export default BannerEmblaCarousel;
