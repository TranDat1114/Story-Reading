interface Category {
    name: string;
}

interface newChapter{
    name: string,
    img : string,
    views: number,
    likes: number,
    rating: string,
    released: string,
}


interface Book {
    img: string,
    name: string,
    chapters: number,
    desc: string,
    views: number,
    likes: number,
    author: string,
    rating: string,
    categories: Category[];
    nameChapters: newChapter[];
}

export type { Book, Category, newChapter }