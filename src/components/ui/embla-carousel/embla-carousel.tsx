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

type PropType = {
    slides: Book[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
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
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container space-y-4">
                    {slides.map((book, index) => (
                        <div className="embla__slide cursor-pointer flex justify-center lg:justify-end flex-col items-center" key={index}>
                            <Link to={`/reading/${book.name}`} className='book-link'>
                                <img src={book.img} className="embla__slide__number" loading='lazy' alt={book.name + ' Cover'} />
                            </Link>
                            <p className='text-base line-clamp-2 font-bold hover:text-orange-500 transtion-300 ease-in-out duration-300'>{book.name}</p>
                            <p className='text-base line-clamp-2 font-bold hover:text-orange-500 transtion-300 ease-in-out duration-300'>{book.chapters} tập</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className=" w-full lg:w-20 mx-auto mt-8">
                <div className="embla__buttons justify-items-center gap-x-4 lg:justify-center">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                {/* <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'btn btn-circle btn-xs btn-outline'.concat(
                                index === selectedIndex ? 'active bg-warning' : ''
                            )}
                        />
                    ))}
                </div> */}
            </div>
        </section>
    )
}

export default EmblaCarousel
