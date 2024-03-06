// import { useParams } from "react-router-dom";
// import bookData from "@/data/books.json";
// import { useEffect, useState } from "react";
// import { Chapter } from "@/types/home";

import { BookMarked, Heart } from "lucide-react";
import { SetStateAction, useState } from "react";
import { useParams } from "react-router-dom";


interface ChapterParams {
    novelName: string;
    chapterNumber: string;
}

interface ChapterParams {
    novelName: string;
    chapterNumber: string;
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
    const { novelName, chapterNumber } = useParams<ChapterParams>();

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
        <div className="prose mx-auto">
            <h1>Đang được phát triển</h1>
            <h2>{novelName}</h2>
            <div className="w-full py-6 mt-8 flex flex-col gap-8 " style={
                {
                    background: options.color.primaryColor + "B3"
                }
            }>
                <div className="relative m-auto flex justify-center gap-4 w-full" style={
                    {
                        maxWidth: options.width.size + 200
                    }
                }>
                    <div className="sticky top-28 h-full hidden lg:flex flex-col gap-4">
                        <button className="w-12 h-12 p-2">
                            <Heart size={24} />
                        </button>
                        <button className="w-12 h-12 p-2">
                            <BookMarked size={24} />
                        </button>
                    </div>

                    {/* <Card className={`w-full py-6 border-0`}
                        style={
                            {
                                background: options.color.primaryColor,
                                maxWidth: options.width.size
                            }
                        }>
                        <CardContent className={`flex flex-col gap-4`}>
                            <div className="flex justify-between items-center">

                                <button className="flex gap-2">
                                    <ArrowLeft className="w-4 h-4 align-middle block" />
                                    <p className="text-sm">Chương trước</p>
                                </button>


                                <button className="flex gap-2">
                                    <p className="text-sm">Chương sau</p>
                                    <ArrowRight className="w-4 h-4 align-middle block" />
                                </button>
                            </div>

                            <div className="my-8">
                                <p className={`text-3xl font-semibold my-4`} style={
                                    {
                                        color: options.color.textColor
                                    }
                                }>
                                    {book.Title}
                                </p>
                                <div className="flex flex-col md:flex-row justify-start md:items-end gap-8 w-full" style={
                                    {
                                        color: options.color.textColor
                                    }}>
                                    <div className="flex flex-row justify-start gap-2 items-center">
                                        <span className="text-sm">Tác giả: </span>
                                        <span className="text-sm">{book.Author}</span>
                                    </div>
                                    <div className="flex flex-row justify-start gap-2 items-center">
                                        <span className="text-sm">Ngày đăng: </span>
                                        <span className="text-sm">{book.Date}</span>
                                    </div>
                                    <div className="flex flex-row justify-start gap-2 items-center">
                                        <span className="text-sm">Trạng thái: </span>
                                        <span className="text-sm">{book.Status}</span>
                                    </div>
                                </div>

                            </div>

                            <div style={
                                {
                                    fontSize: options.fontSize.size + "px",
                                    fontFamily: options.font,
                                    lineHeight: options.lineSpacing,
                                    color: options.color.textColor
                                }
                            }>
                                {book.ChapterContent.map((content, index) => (
                                    <div key={index}>
                                        <p >{content}</p>
                                        <br />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center gap-4 w-full lg:justify-end">
                            <div className="flex justify-between gap-4 items-center">

                                <button className="flex gap-2">
                                    <ArrowLeft className="w-4 h-4 align-middle block" />
                                    <p className="text-sm">Chương trước</p>
                                </button>


                                <button className="flex gap-2">
                                    <p className="text-sm">Chương sau</p>
                                    <ArrowRight className="w-4 h-4 align-middle block" />
                                </button>
                            </div>
                        </CardFooter>
                    </Card> */}

                    {/* change color button */}
                    <div className="sticky top-28 z-10 hidden lg:block h-full">
                        {/* <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="w-12 h-12 p-2 rounded-full" >
                                    <AlignJustify size={24} />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64 p-4">
                                <DropdownMenuLabel>Cài đặt hiển thị</DropdownMenuLabel>
                                <DropdownMenuLabel>Chọn nhanh</DropdownMenuLabel>
                                <DropdownMenuLabel className="bg-background flex flex-col gap-4">
                                    <div>
                                        <span>Màu</span>
                                        <div className="flex flex-wrap justify-between w-full gap-4">
                                            {
                                                colors.map((color, index) => (
                                                    <button key={index} onClick={() => changeColor(color.primaryColor, color.textColor)} className={`w-8 h-8 bg-[${color.primaryColor}] rounded-sm border shadow-sm`}>
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
                                    <div>
                                        <span>Kiểu chữ</span>

                                        <Select onValueChange={(value) => changeFont(value)}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Chọn font chữ" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {
                                                        fontFamilies.map((font, index) => (
                                                            <SelectItem key={index} value={font}>{font}</SelectItem>
                                                        ))
                                                    }
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>

                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />

                            </DropdownMenuContent>
                        </DropdownMenu> */}

                        {/* <button variant={"ghost"} onClick={() => changeColor("#cbe1cb", "#000000")} className="bg-[#cbe1cb]">
                    Change color
                </button>
                <button variant={"ghost"} onClick={() => changeColor("#ebcaca", "#000000")} className="bg-[#ebcaca]">
                    Change color
                </button> */}


                    </div>
                </div>
                <div className="container">

                </div>
            </div >
        </div>
    );
}
export default NovelChapterPage;