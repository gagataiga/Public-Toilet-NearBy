export interface TagsProps{
  tags:number[]
  setTags: React.Dispatch<React.SetStateAction<number[]>>
}

export interface TagProps {
  tagKey:number
  label: string
  isSelected: boolean
  onToggle: (label:number) => void
}

export interface RatingProps{
  ratingValue: number | null
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

export interface PostPictureProps{
  image: File | null
  setImage: React.Dispatch<React.SetStateAction<File | null>>
}

export interface CostProps{
  toiletFee: string
  setToiletFee: (value: React.SetStateAction<string>) => void
}

export interface CommentProps { 
  comment: string
  setComment: React.Dispatch<React.SetStateAction<string>>
}

export interface Post{
  tags: string[]
  ratingValue: number
  imageURL: string
  toiletFee: string
  comment: string
}