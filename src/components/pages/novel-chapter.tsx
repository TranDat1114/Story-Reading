// import { useParams } from "react-router-dom";
import bookData from "@/data/books.json";
import { Book } from "@/types/home";
// import { useEffect, useState } from "react";
// import { Chapter } from "@/types/home";

import { ArrowLeft, ArrowRight, BookMarked, Bookmark, Heart, Menu, Minus, Plus } from "lucide-react";
import { SetStateAction, useState } from "react";
import { useParams } from "react-router-dom";




interface ChapterParams {
    novelName: string;
    chapterName: string;
    [key: string]: string | undefined;
}


interface textFont {
    index: number,
    text: string | "text-base" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl",
    size: number | 16 | 18 | 20 | 24 | 30
}

export interface ChapterInfor {
    Title: string;
    Author: string;
    Date: string;
    Status: string;
    Description: string;
    ChapterContent: string[];
}

export interface Comment {
    CommentID: string;
    UserID: string;
    UserName: string;
    Date: string;
    Chapter: string;
    Image: string;
    Content: string[];
    Replies?: Comment[];
}

export interface Publisher {
    name: string;
    url: string;
}

interface color {
    primaryColor: string | "#cbe1cb" | "#ebcaca" | "#333333" | "#ffffff",
    textColor: string | "#000000" | "#ffffff",
}

interface width {
    index: number,
    size: "65ch" | "576px" | "672px" | "768px" | "896px" | "1024px"

}

const widths: width[] = [
    { index: 0, size: "576px" },
    { index: 1, size: "65ch" },
    { index: 2, size: "672px" },
    { index: 3, size: "768px" },
    { index: 4, size: "896px" },
    { index: 5, size: "1024px" }
]

const textFonts: textFont[] = [
    { index: 0, text: "text-base", size: 16 },
    { index: 1, text: "text-lg", size: 18 },
    { index: 2, text: "text-xl", size: 20 },
    { index: 3, text: "text-2xl", size: 24 },
    { index: 4, text: "text-3xl", size: 30 }
]

const colors: color[] = [
    { primaryColor: "#cbe1cb", textColor: "#000000" },
    { primaryColor: "#ebcaca", textColor: "#000000" },
    { primaryColor: "#333333", textColor: "#ffffff" },
    { primaryColor: "#ffffff", textColor: "#000000" }
]

const fontFamilies: string[] = [
    "system-ui",
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
]

interface OptionsReadPage {
    fontSize: textFont,
    font: string | "system-ui" | "serif" | "sans-serif" | "monospace" | "cursive" | "fantasy",
    color: color,
    lineSpacing: number | 1 | 1.25 | 1.5 | 1.75 | 2,
    width: width,
}


const NovelChapterPage = () => {
    const { novelName, chapterName } = useParams<ChapterParams>();

    const book = bookData.books.find(book => book.path === novelName) as Book;
    const bookChapter = book.chapters.find(chapter => chapter.title === chapterName);

    const [options, setOptions] = useState<OptionsReadPage>(
        {
            fontSize: textFonts[2], font: fontFamilies[0], color: colors[3], lineSpacing: 1.5, width: widths[2]
        }
    )

    const [comment, setComment] = useState<string>("");
    function handleChangeComment(event: { target: { value: SetStateAction<string>; }; }) {
        setComment(event.target.value);
    }

    // const book = bookData.ChapterInfor as ChapterInfor;

    // const bookComments = bookData.Comments as Comment[];

    //when onclick, the background color will be changed to the color of the book
    const changeColor = (primaryColor: string | "#cbe1cb" | "#ebcaca" | "#333333" | "#ffffff", textColor: string | "#ffffff" | "#000000") => {

        setOptions({
            ...options,
            color: { primaryColor: primaryColor, textColor: textColor }
        });
    }

    const plusLineSpacing = () => {
        if (options.lineSpacing < 2) {
            setOptions({
                ...options,
                lineSpacing: options.lineSpacing + 0.25
            });
        }
    }

    const minusLineSpacing = () => {
        if (options.lineSpacing > 1) {
            setOptions({
                ...options,
                lineSpacing: options.lineSpacing - 0.25
            });
        }
    }

    const minusWidth = () => {
        if (options.width.index > 0) {
            setOptions({
                ...options,
                width: widths[options.width.index - 1]
            });
        }
    }

    const plusWidth = () => {

        if (options.width.index < 4) {
            setOptions({
                ...options,
                width: widths[options.width.index + 1]
            });
        }
    }

    const minusFontSize = () => {
        if (options.fontSize.index > 0) {
            setOptions({
                ...options,
                fontSize: textFonts[options.fontSize.index - 1]
            });
        }


    }

    const plusFontSize = () => {
        if (options.fontSize.index < 4) {
            setOptions({
                ...options,
                fontSize: textFonts[options.fontSize.index + 1]
            });

        }
    }

    const changeFont = (font: string) => {
        setOptions({
            ...options,
            font: font
        });
    }

    return (
        <div className="flex justify-center relative gap-x-4 w-full p-8"
            style={
                {
                    background: options.color.primaryColor + "B3",
                  
                }
            }
        >
            <div className="flex flex-col gap-2 sticky top-20 h-full"

            >
                <div className="btn btn-square btn-md btn-outline "
                    style={
                        {
                            color: options.color.textColor
                        }
                    }>
                    <Heart size={24} className="fill-red-500" />
                </div>
                <div className="btn btn-square btn-md btn-outline"
                    style={
                        {
                            color: options.color.textColor
                        }
                    }>
                    <Bookmark size={24} className="fill-current" />
                </div>
            </div>
            <div className="p-8 rounded-box" style={
                {
                    background: options.color.primaryColor
                }
            }>
                <div className="prose prose-lg text-primary-content"
                style={
                    {
                        maxWidth: options.width.size
                    }
                }>
                    <p style={
                        {
                            fontSize: options.fontSize.size + "px",
                            fontFamily: options.font,
                            lineHeight: options.lineSpacing,
                            color: options.color.textColor
                        }
                    }>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius ut perspiciatis corrupti ratione, illo adipisci eligendi commodi atque quisquam aspernatur exercitationem dolorem distinctio tenetur eaque aut voluptates amet! Repudiandae assumenda, necessitatibus sapiente consequatur maiores architecto ratione similique tempore perferendis, in nesciunt cupiditate harum dolorum totam reprehenderit quia magnam molestias. Consectetur repellendus excepturi totam quo culpa rem laudantium corporis aut accusamus praesentium. Quae non magni harum, repudiandae aspernatur eveniet. Nobis, ipsa iste aut voluptatem quidem aliquid, provident modi animi mollitia exercitationem molestias. Impedit sit, ipsum cupiditate magnam alias provident maiores sequi deleniti quod molestias! Neque minima molestias quos dolorem? A, placeat rerum minus praesentium deleniti nostrum. Nam illum cupiditate reiciendis voluptatum ipsam consequatur iure quibusdam deserunt et aspernatur nemo culpa voluptatibus itaque facere in eligendi dolorum ab similique, nostrum amet nulla, explicabo porro commodi repudiandae? Corrupti quis quae incidunt minima rerum corporis, exercitationem modi ad quos distinctio dolorem velit hic in omnis a fugit quasi illo qui explicabo, ducimus commodi quam? Placeat assumenda optio veniam beatae blanditiis eaque deleniti, repudiandae voluptatum libero. Tempore perferendis possimus, est praesentium dolor tenetur quis reprehenderit nemo accusamus distinctio expedita dolore commodi minus soluta quam consequuntur non, similique rerum animi repudiandae ea fugiat consectetur obcaecati.
                    </p>
                </div>
            </div>
            <div className="dropdown sticky top-20 h-full">
                <div tabIndex={0} role="button" className="btn btn-circle btn-outline"
                    style={
                        {
                            color: options.color.textColor
                        }
                    }>
                    <Menu size={24} />
                </div>
                <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 \ text-primary-content shadow-lg"
                    style={
                        {
                            background: options.color.primaryColor
                        }
                    }
                >
                    <div className="card-body"
                        style={
                            {
                                color: options.color.textColor
                            }
                        }>
                        <h3 className="card-title">Cài đặt hiển thị</h3>
                        <p>Chọn nhanh</p>
                        <div>
                            <span>Màu</span>
                            <div className="flex flex-wrap justify-between w-full gap-4">
                                {
                                    colors.map((color, index) => (
                                        <button key={index} onClick={() => changeColor(color.primaryColor, color.textColor)} className={`w-8 h-8  rounded-sm border shadow-sm`}
                                            style={
                                                {
                                                    background: color.primaryColor
                                                }

                                            }
                                        >
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <span>Giãn dòng</span>
                            <div className="flex justify-between w-full gap-4 items-center">
                                <button onClick={() => minusLineSpacing()} className="w-8 h-8 p-2">
                                    <Minus />

                                </button>
                                <span className="text-sm">{options.lineSpacing * 100}%</span>
                                <button onClick={() => plusLineSpacing()} className="w-8 h-8 p-2">
                                    <Plus />
                                </button>
                            </div>
                        </div>

                        <div>
                            <span>Chiều rộng</span>
                            <div className="flex justify-between w-full gap-4 items-center">
                                <button onClick={() => minusWidth()} className="w-8 h-8 p-2">
                                    <Minus />
                                </button>
                                <span className="text-sm">{options.width.size}</span>
                                <button onClick={() => plusWidth()} className="w-8 h-8 p-2">
                                    <Plus />
                                </button>
                            </div>
                        </div>


                        <div>
                            <span>Cỡ chữ</span>
                            <div className="flex justify-between w-full gap-4 items-center">
                                <button onClick={() => minusFontSize()} className="w-8 h-8 p-2">
                                    <Minus />
                                </button>
                                <span className="text-sm">{options.fontSize.size}</span>
                                <button onClick={() => plusFontSize()} className="w-8 h-8 p-2">
                                    <Plus />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default NovelChapterPage;