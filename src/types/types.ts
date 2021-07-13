export type BearItemType = {
    id: string
    name: string
    description: string
    abv: number
    image_url: string
}
export type FilterByAbvType = 'none' | 'up' | 'down';