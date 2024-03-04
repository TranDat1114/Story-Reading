import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './embla-arrow-button'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { Book } from '@/types/home'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type PropType = {
    slides: Book[]
    options?: EmblaOptionsType,
    title: string
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options, title } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        // const resetOrStop =
        //   autoplay.options.stopOnInteraction === false
        //     ? autoplay.reset
        //     : autoplay.stop
        // resetOrStop()
    }, [])

    // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    //     emblaApi,
    //     onNavButtonClick
    // )

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)

    return (
        <div className="flex items-center flex-col space-y-4 w-full">
            <div className='flex justify-between items-center w-full'>
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
                    >{title}</motion.p>
                </div>
                <div className="embla__buttons justify-items-center gap-x-2 md:gap-x-8 lg:justify-center">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>

            <section className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container space-y-4">
                        {slides.map((book, index) => (
                            <div className="embla__slide cursor-pointer" key={index}>
                                <Link to={`/novels/${book.path}`} className='book-link' >
                                    <img src={book.img} className="embla__slide__number object-cover object-center" loading='lazy' alt={book.name + ' Cover'} />
                                    <p className='text-center text-sm truncate font-bold hover:text-orange-500 transtion-300 ease-in-out duration-300'>{book.name}</p>
                                    <p className='text-center text-sm truncate font-bold hover:text-orange-500 transtion-300 ease-in-out duration-300'>Chương {book.lastChapter}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    )
}

export default EmblaCarousel
