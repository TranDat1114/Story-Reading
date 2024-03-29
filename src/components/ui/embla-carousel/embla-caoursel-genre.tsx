import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '@/components/ui/embla-carousel/embla-arrow-button'
import useEmblaCarousel from 'embla-carousel-react'
import { Book } from '@/types/home'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type PropType = {
    slides: Book[]
    options?: EmblaOptionsType
    title: string
}

const EmblaCarouselGenere: React.FC<PropType> = (props) => {
    const { slides, options, title } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div className="flex items-center flex-col space-y-4 w-full">
            <div className='flex justify-between items-center w-full'>
                <div className="flex items-center gap-x-2 hover:text-orange-500 transition-all duration-300 ease-in-out">
                    <motion.p className="capitalize text-lg md:text-2xl hover:text-orange-500 font-bold cursor-pointer"
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
                                    <img src={book.img} className="embla__slide__number object-cover object-center w-full" loading='lazy' alt={book.name + ' Cover'} />
                                    <p className='text-center text-xs md:text-sm truncate hover:text-orange-500 transtion-300 ease-in-out duration-300'>{book.name}</p>
                                    <p className='text-center text-xs md:text-sm truncate hover:text-orange-500 transtion-300 ease-in-out duration-300'>Chương {book.lastChapter}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EmblaCarouselGenere
