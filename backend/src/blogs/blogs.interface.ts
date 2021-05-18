export interface Blog{
    title:  string;// string is shorthand for {type: string}
    author: string;
    image: string;
    description:   string;
    comments: Comment[];
    date: number;
    published: Published;
    meta: {
      votes: number;
        favs: number;
    }
}

export enum Published{
    'draft',
    'published',
    'archived',
    'pending'
}

export interface Comment{
    body: string;
    date: Date;
}