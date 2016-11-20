export class MusicStuffModel{
    constructor(
        public img: string = '',
        public name: string = '',
        public subName: Array<any> = [],
        public song: boolean = false
    ){ }
}