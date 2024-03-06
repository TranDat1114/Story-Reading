import { SetStateAction, useState } from "react";
import { AlignJustify, ArrowLeft, ArrowRight, BookMarked, Heart, Minus, MoveDown, Plus, SendHorizonal, ThumbsUp } from "lucide-react";

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


const NovelReadingPage = () => {

    const [options, setOptions] = useState<OptionsReadPage>(
        {
            fontSize: textFonts[2], font: fontFamilies[0], color: colors[3], lineSpacing: 1.5, width: widths[2]
        }
    )

    const [comment, setComment] = useState<string>("");
    function handleChangeComment(event: { target: { value: SetStateAction<string>; }; }) {
        setComment(event.target.value);
    }

    const book = bookData.ChapterInfor as ChapterInfor;

    const bookComments = bookData.Comments as Comment[];

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
                    <button variant={"outline"} className="w-12 h-12 p-2">
                        <Heart size={24} />
                    </button>
                    <button variant={"outline"} className="w-12 h-12 p-2">
                        <BookMarked size={24} />
                    </button>
                </div>

                <Card className={`w-full py-6 border-0`}
                    style={
                        {
                            background: options.color.primaryColor,
                            maxWidth: options.width.size
                        }
                    }>
                    <CardContent className={`flex flex-col gap-4`}>
                        <div className="flex justify-between items-center">

                            <button variant={"outline"} className="flex gap-2">
                                <ArrowLeft className="w-4 h-4 align-middle block" />
                                <p className="text-sm">Chương trước</p>
                            </button>


                            <button variant={"outline"} className="flex gap-2">
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

                            <button variant={"outline"} className="flex gap-2">
                                <ArrowLeft className="w-4 h-4 align-middle block" />
                                <p className="text-sm">Chương trước</p>
                            </button>


                            <button variant={"outline"} className="flex gap-2">
                                <p className="text-sm">Chương sau</p>
                                <ArrowRight className="w-4 h-4 align-middle block" />
                            </button>
                        </div>
                    </CardFooter>
                </Card>

                {/* change color button */}
                <div className="sticky top-28 z-10 hidden lg:block h-full">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="w-12 h-12 p-2 rounded-full" variant={"outline"}>
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
                                {/* <div>
                                    <button variant={"outline"} onClick={() => onClick(-1)} className="w-8 h-8">
                                        <MinusIcon />
                                    </button>
                                    <span className="text-sm">{text}</span>
                                    <button variant={"outline"} onClick={() => onClick(1)} className="w-8 h-8">
                                        <PlusIcon />
                                    </button>
                                </div> */}
                                <div>
                                    <span>Giãn dòng</span>
                                    <div className="flex justify-between w-full gap-4 items-center">
                                        <button variant={"outline"} onClick={() => minusLineSpacing()} className="w-8 h-8 p-2">
                                            <Minus />

                                        </button>
                                        <span className="text-sm">{options.lineSpacing * 100}%</span>
                                        <button variant={"outline"} onClick={() => plusLineSpacing()} className="w-8 h-8 p-2">
                                            <Plus />
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <span>Chiều rộng</span>
                                    <div className="flex justify-between w-full gap-4 items-center">
                                        <button variant={"outline"} onClick={() => minusWidth()} className="w-8 h-8 p-2">
                                            <Minus />
                                        </button>
                                        <span className="text-sm">{options.width.size}</span>
                                        <button variant={"outline"} onClick={() => plusWidth()} className="w-8 h-8 p-2">
                                            <Plus />
                                        </button>
                                    </div>
                                </div>


                                <div>
                                    <span>Cỡ chữ</span>
                                    <div className="flex justify-between w-full gap-4 items-center">
                                        <button variant={"outline"} onClick={() => minusFontSize()} className="w-8 h-8 p-2">
                                            <Minus />
                                        </button>
                                        <span className="text-sm">{options.fontSize.size}</span>
                                        <button variant={"outline"} onClick={() => plusFontSize()} className="w-8 h-8 p-2">
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
                    </DropdownMenu>

                    {/* <button variant={"ghost"} onClick={() => changeColor("#cbe1cb", "#000000")} className="bg-[#cbe1cb]">
                    Change color
                </button>
                <button variant={"ghost"} onClick={() => changeColor("#ebcaca", "#000000")} className="bg-[#ebcaca]">
                    Change color
                </button> */}


                </div>
            </div>
            <div className="container">
                <Card className="w-full shadow-lg">
                    <CardHeader>
                        <CardTitle>Bình luận</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-row w-full items-center justify-between gap-4">
                            <div className="rounded-full h-24 w-24">
                                <Avatar>
                                    <AvatarImage className="rounded-full" src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="relative w-full h-full">
                                <textarea onChange={(e) => handleChangeComment(e)} value={comment} className="w-full h-24 border-2 border-solid p-4 border-black/25 rounded-md" placeholder="Viết bình luận của bạn ở đây" />
                                <button onClick={() => {
                                    alert("Bạn đã gửi bình luận thành công\n" + comment)
                                }} className="absolute top-1/2 -translate-y-1/2 right-5"><SendHorizonal /></button>

                            </div>
                        </div>

                        <Separator className="my-4" />

                        <div className="flex flex-col gap-6">
                            {
                                bookComments.map((comment, index) => (
                                    <div key={index} className="flex lg:flex-row flex-col gap-4">
                                        <div className="h-16 w-16 lg:h-24 lg:w-24">
                                            <Avatar>
                                                <AvatarImage className="rounded-full border p-2 " src={comment.Image} alt={`@${comment.UserName}`} />
                                                <AvatarFallback className="rounded-full h-16 w-16 lg:h-24 lg:w-24 p-2">{`@${comment.UserName}`}</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        {/* comment */}
                                        <div className="flex flex-col gap-2 w-full">
                                            <p className="text-lg font-semibold">{comment.UserName}</p>
                                            <div className="flex flex-row gap-4 justify-start">
                                                <p className="text-xs text-foreground/50">{comment.Date}</p>
                                                <p className="text-xs text-foreground/50">Chương {comment.Chapter}</p>
                                            </div>
                                            <div className="text-sm">
                                                {
                                                    comment.Content.map((content, index) => (
                                                        <p key={index}>
                                                            {content}
                                                        </p>
                                                    ))
                                                }

                                            </div>
                                            <div className="flex lg:flex-row flex-col gap-8 justify-start lg:items-center">
                                                <div className="w-full lg:min-w-36">
                                                    {comment?.Replies ? (
                                                        <div> <p className="flex gap-2 items-center ">
                                                            Xem {comment.Replies?.length} câu trả lời <MoveDown size={12} />
                                                        </p></div>
                                                    ) : <></>
                                                    }


                                                </div>
                                                <div className="flex flex-row justify-between w-full items-center">
                                                    <div className="flex flex-row gap-2 items-center">
                                                        <button variant={"outline"} className="flex flex-row gap-2">
                                                            <ThumbsUp size={16} /> 24
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button variant={"outline"}>Trả lời</button>
                                                    </div>
                                                    <div>
                                                        <button variant={"outline"}>Báo xấu</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div>
                                                        {
                                                            comment.Replies?.map((reply, index) => (
                                                                <div className="" key={index}>
                                                                    {reply.Content.map((rep, index) => (
                                                                        <p key={index}>
                                                                            {rep}
                                                                        </p>
                                                                    ))

                                                                    }
                                                                </div>
                                                            ))
                                                        }
                                                    </div> */}
                                    </div>
                                ))
                            }

                            <Separator className="my-4" />

                            <div className="w-full flex justify-center items-center">
                                <button variant={"outline"}>Xem thêm bình luận</button>
                            </div>
                        </div>

                    </CardContent>
                </Card>
            </div>
        </div >

        // <div className="flex flex-col gap-2 md:px-14 relative ">
        //     <div className="fixed right-0 rounded-lg h-20  bg-background border">
        //         {/* Thêm các thành phần navbar khác ở đây nếu cần */}
        //     </div>
        //     <div className="chapter flex justify-between items-center py-2">
        //         <div className="pre-chapter flex items-center text-black/50">
        //             <ArrowLeft className="w-4 h-4 align-middle block mr-2 md:translate-y-0.5" />
        //             <p className="font-medium text-base md:text-2xl">Chương trước</p>
        //         </div>
        //         <div className="last-chapter flex items-center">
        //             <p className="font-medium text-base mr-2 md:text-2xl">Chương sau</p>
        //             <ArrowRight className="w-4 h-4 align-middle block md:translate-y-0.5" />
        //         </div>
        //     </div>
        //     <div className="divider border-t border-solid border-t-black/25 py-2"></div>
        //     <div className="info space-y-3">
        //         <div className="chapter-title text-2xl text-black/75 font-normal md:text-5xl md:font-serif">
        //             <p>{DemoData[0].newChapter}</p>
        //         </div>
        //         <div className="book-title text-sm text-black/65 font-normal flex items-center md:text-3xl">
        //             <Book className="w-4 h-4 block align-middle mr-3 md:translate-y-0.5" />
        //             <p>{DemoData[0].title}</p>
        //         </div>
        //         <div className="grid grid-cols-12 gap-2">
        //             <div className="author col-span-4 text-sm text-black/65 flex items-center w-full md:text-2xl md:col-span-8">
        //                 <BookHeart className="w-4 h-4 block align-middle mr-2" />
        //                 <p className="truncate">{DemoData[0].author}</p>
        //             </div>
        //             <div className="text-counter col-span-4 text-center text-black/65 flex justify-center items-center md:text-2xl md:col-span-2">
        //                 <ALargeSmall className="w-4 h-4 block align-middle mr-2 md:translate-y-0.5" />
        //                 <p className="truncate">12 chữ</p>
        //             </div>
        //             <div className="reaction col-span-4 text-right text-black/65 flex items-center justify-center md:text-2xl md:col-span-2">
        //                 <Heart className="w-4 h-4 block align-middle mr-2 md:translate-y-0.5" />
        //                 <p className="truncate">{DemoData[0].reaction} cảm xúc</p>
        //             </div>
        //         </div>
        //         <div className="timeline-update flex items-center italic text-black/65 md:text-xl">
        //             <Clock className="w-4 h-4 block align-middle mr-2" />
        //             <p>{DemoData[0].updateDate}</p>
        //         </div>
        //     </div>
        //     <div className="pt-6 flex-wrap flex items-center justify-start max-w-prose pb-10 md:max-w-full">
        //         <p className={`${fontSize.text} ${font} text-foreground`}>
        //             {DemoData[0].describe}
        //         </p>
        //     </div>
        //     <div className="divider border-t-2 border-solid border-black/30"></div>
        //     <div className="suggest-books pt-6">
        //         <p>
        //             Đọc thêm những câu chuyện hấp dẫn khác&nbsp;
        //             <Link to={"/"} className="text-blue-500 hover:underline">tại đây.</Link>
        //         </p>
        //     </div>
        //     <div>
        //         <div className="p-4 px-28">
        //             <div className="flex items-center justify-between">
        //                 <div className="start">
        //                     <Star className="w-6 h-6 block align-middle" />
        //                 </div>
        //                 <div className="flower">
        //                     <Flower2 className="w-6 h-6 block align-middle" />
        //                 </div>
        //                 <div className="gift">
        //                     <Gift className="w-6 h-6 block align-middle" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="footer border-t border-solid border-black/25">
        //         <div className="flex items-center justify-between p-4">
        //             <div className="pre-chapter flex items-center text-black/50">
        //                 <ArrowLeft className="w-4 h-4 align-middle block mr-2 md:translate-y-0.5" />
        //                 <p className="font-medium text-base md:text-2xl">Chương trước</p>
        //             </div>
        //             <div className="alert flex items-center">
        //                 <AlertCircle className="w-4 h-4 align-middle block mr-2" />
        //             </div>
        //             <div className="last-chapter flex items-center">
        //                 <p className="font-medium text-base mr-2 md:text-2xl">Chương sau</p>
        //                 <ArrowRight className="w-4 h-4 align-middle block md:translate-y-0.5" />
        //             </div>
        //         </div>
        //     </div>
        //     <div className="img">
        //         <AspectRatio ratio={16 / 9}>
        //             <img className="h-auto w-full object-cover object-center"
        //                 src="https://static.cdnno.com/storage/topbox/d38e53dc47be5859d93c263e8fe6db99.jpg"
        //                 alt="background" />
        //         </AspectRatio>
        //     </div>

        //     <div className="sticky bottom-3 flex items-center justify-between bg-background border p-2 px-4 rounded-lg md:hidden">
        //         <Dialog>
        //             <DialogTrigger asChild>
        //                 <div className="list-chapter">
        //                     <AlignJustify className="w-6 h-6 block align-middle" />
        //                 </div>
        //             </DialogTrigger>
        //             <DialogContent className="sm:max-w-[425px]">
        //                 <DialogHeader>
        //                     <DialogTitle>Danh sách chương</DialogTitle>
        //                 </DialogHeader>
        //                 <Table>
        //                     <TableHeader>
        //                         <TableRow>
        //                             <TableHead className="w-[100px]">Chương</TableHead>
        //                             <TableHead className="text-left">Tên chương</TableHead>
        //                         </TableRow>
        //                     </TableHeader>
        //                     <TableBody>
        //                         {DemoData.map((data, index) => (
        //                             <TableRow key={index}>
        //                                 <TableCell className="font-normal">Chương {data.currentChapter}</TableCell>
        //                                 <TableCell className="font-normal">
        //                                     {data.newChapter}
        //                                     <span className="text-black/50 ml-2 text-xs italic">{data.updateDate}</span>
        //                                 </TableCell>
        //                             </TableRow>
        //                         ))}
        //                     </TableBody>

        //                 </Table>
        //             </DialogContent>
        //         </Dialog>
        //         <Dialog>
        //             <DialogTrigger asChild>
        //                 <div className="settings">
        //                     <Settings className="w-6 h-6 block align-middle" />
        //                 </div>
        //             </DialogTrigger>
        //             <DialogContent className="sm:max-w-[425px]">
        //                 <DialogHeader>
        //                     <DialogTitle className="text-left">Cài đặt</DialogTitle>
        //                 </DialogHeader>
        //                 <div className="pt-3 space-y-5">
        //                     <div className="grid grid-cols-3">
        //                         <div className="flex justify-start">
        //                             <Palette className="w-4 h-4 block align-middle mr-2 translate-y-1" />
        //                             <p className="font-normal">Màu nền</p>
        //                         </div>
        //                         <div className="flex flex-wrap items-center justify-between col-span-2 mx-8">
        //                             <div className="rounded-full border-2 border-solid border-red-200 bg-red-100 w-10 h-10"></div>
        //                             <div className="rounded-full border-2 border-solid border-yellow-200 bg-yellow-100 w-10 h-10"></div>
        //                             <div className="rounded-full border-2 border-solid border-green-200 bg-green-100 w-10 h-10"></div>
        //                             <div className="w-full flex justify-between mt-3">
        //                                 <div className="rounded-full border-2 border-solid border-blue-200 bg-blue-100 w-10 h-10"></div>
        //                                 <div className="rounded-full border-2 border-solid border-yellow-600/45 bg-yellow-600/25 w-10 h-10"></div>
        //                                 <div className="rounded-full border-2 border-solid border-purple-200 bg-purple-100 w-10 h-10"></div>
        //                             </div>
        //                             <div className="w-full flex items-center mt-3">
        //                                 <div className="rounded-full border-2 border-solid border-black bg-black w-10 h-10"></div>
        //                                 <div className="rounded-full border-2 border-solid border-gray-200 bg-gray-100 w-10 h-10 ml-6"></div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="grid grid-cols-3 items-center">
        //                         <div className="flex justify-start">
        //                             <CaseUpper className="w-4 h-4 block align-middle mr-2 translate-y-1" />
        //                             <p className="font-normal">Font chữ</p>
        //                         </div>
        //                         <div className="flex items-center justify-center col-span-2">
        //                             <Select onValueChange={handleFontChange}>
        //                                 <SelectTrigger className="w-full">
        //                                     <SelectValue placeholder="Chọn font chữ" />
        //                                 </SelectTrigger>
        //                                 <SelectContent>
        //                                     <SelectGroup>
        //                                         <SelectItem value="palatino">Palatino Linotype</SelectItem>
        //                                         <SelectItem value="roboto">Roboto</SelectItem>
        //                                     </SelectGroup>
        //                                 </SelectContent>
        //                             </Select>
        //                         </div>
        //                     </div>
        //                     <div className="grid grid-cols-3 items-center">
        //                         <div className="flex justify-start">
        //                             <CaseSensitive className="w-4 h-4 block align-middle mr-2 translate-y-1" />
        //                             <p className="font-normal">Cỡ chữ</p>
        //                         </div>
        //                         <div className="flex items-center justify-center col-span-2">
        //                             <Drawer>
        //                                 <DrawerTrigger asChild>
        //                                     <button variant="outline">{`${text}px`}</button>
        //                                 </DrawerTrigger>
        //                                 <DrawerContent>
        //                                     <div className="mx-auto w-full max-w-sm pb-4">
        //                                         <DrawerHeader>
        //                                             <DrawerTitle>Cỡ chữ</DrawerTitle>
        //                                         </DrawerHeader>
        //                                         <div className="p-4 pb-0">
        //                                             <div className="flex items-center justify-center space-x-2">
        //                                                 <button
        //                                                     variant="outline"
        //                                                     size="icon"
        //                                                     className="h-8 w-8 shrink-0 rounded-full"
        //                                                     onClick={() => onClick(-1)}
        //                                                     disabled={text <= textFont[0].fontSize}
        //                                                 >
        //                                                     <MinusIcon className="h-4 w-4" />
        //                                                     <span className="sr-only">Giảm</span>
        //                                                 </button>
        //                                                 <div className="flex-1 text-center">
        //                                                     <div className="text-7xl font-bold tracking-tighter">
        //                                                         {text}
        //                                                     </div>
        //                                                 </div>
        //                                                 <button
        //                                                     variant="outline"
        //                                                     size="icon"
        //                                                     className="h-8 w-8 shrink-0 rounded-full"
        //                                                     onClick={() => onClick(1)}
        //                                                     disabled={text >= textFont[textFont.length - 1].fontSize}
        //                                                 >
        //                                                     <PlusIcon className="h-4 w-4" />
        //                                                     <span className="sr-only">Tăng</span>
        //                                                 </button>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </DrawerContent>
        //                             </Drawer>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </DialogContent>
        //         </Dialog>
        //         <div className="like">
        //             <Heart className="w-6 h-6 block align-middle" />
        //         </div>
        //         <div className="bookmark">
        //             <Bookmark className="w-6 h-6 block align-middle" />
        //         </div>
        //         <div className="list-chapter">
        //             <MessageCircleMore className="w-6 h-6 block align-middle" />
        //         </div>
        //     </div>
        // </div>
    );
}

export default NovelReadingPage;