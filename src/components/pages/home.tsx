import { useMemo, lazy, Suspense } from "react";
import BookData from "@/data/books.json";
import { Book } from "@/types/home";

import "@components/ui/embla-carousel/embla.css";

import { EmblaOptionsType } from "embla-carousel";

const EmblaCarousel = lazy(() => import("@components/ui/embla-carousel/embla-carousel"));
const NewBooksUpdate = lazy(() => import("@components/ui/booksUpdate/newBooksUpdate"));
const FullBooksUpdate = lazy(() => import("@components/ui/booksUpdate/fullBooksUpdate"));
const BannerEmblaCarousel = lazy(() => import("@components/ui/embla-carousel/banner-embla-carousel"));
const Ads = lazy(() => import("@components/ui/banner/ads"));
const LoadingSpinner = lazy(() => import("@components/pages/loading"));

const HomePage = () => {
    const databooks: Book[] = useMemo(() => BookData.books as Book[], []);

    const OPTIONS: EmblaOptionsType = useMemo(
        () => ({ loop: true, dragFree: true, align: 'center', inViewThreshold: 0.5 }),
        []
    );

    const OPTIONSBanner: EmblaOptionsType = useMemo(
        () => ({ loop: true, duration: 50 }),
        []
    );

    return (
        <div className="w-full">
            <Suspense fallback={<LoadingSpinner />}>
                <BannerEmblaCarousel slides={databooks} options={OPTIONSBanner} title="Truyện đề cử" />

                <EmblaCarousel slides={databooks} options={OPTIONS} title={"Truyện đề cử"} />
                <div className="divider">😘</div>

                <EmblaCarousel slides={databooks} options={OPTIONS} title={"Truyện yêu thích mỗi tuần"} />
                <div className="divider"></div>
                <Ads />
                <div className="divider">💖</div>

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
                <div></div>
            </Suspense>
        </div>
    );
};

export default HomePage;
