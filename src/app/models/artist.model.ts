export class ArtistModel{
    constructor(
        public external_urls: any = {},
        public followers: any = {},
        public genres: Array<any> = [],
        public href: string = "",
        public id: string = "",
        public images: Array<any> = [],
        public name: string = "",
        public popularity: number = null,
        public type: string = "",
        public uri: string = ""
    ){ }
}