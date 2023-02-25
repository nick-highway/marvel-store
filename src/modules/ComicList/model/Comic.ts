export default interface IComic {
    title: string,
    description: string,
    thumbnail: { path: string, extension: string },
    images: string[]
}