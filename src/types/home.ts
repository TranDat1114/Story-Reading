interface Category {
    name: string;
}



interface Chapter {
    title: string,
    content: string,
    nextChapter: string | null,
    prevChapter: string | null,
    released: string,
    path: string,
    desc: string,
    views: number,
    likes: number,
    rating: string,

}

interface Book {
    img: string,
    name: string,
    path: string,
    chapters: Chapter[],
    status: string,
    released: string,
    desc: string,
    views: number,
    likes: number,
    author: string,
    rating: string,
    lastChapter: string;
    categories: Category[];
    timeReleased: number;
}

export type { Book, Category, Chapter }