let vAny: any = 10;
let vUnknow: unknow = 10;

let s1: string = vAny;
let s2: string = vUnknow as string;

let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknow) as number;