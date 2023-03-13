export default interface Comic {
    id: number,
    title: string,
    description: string,
    thumbnail: { path: string, extension: string },
    images: string[]
}