export interface TagsProps{
  tags:string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}

export interface TagProps {
  label: string
  isSelected: boolean
  onToggle: (label:string) => void
}

export interface RatingProps{
  ratingValue: number | null
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

export interface PostPictureProps{
  image: FileList | null
  setImage: React.Dispatch<React.SetStateAction<FileList | null>>
}

export interface CostProps{
  toiletFee: string
  setToiletFee: (value: React.SetStateAction<string>) => void
}

export interface CommentProps { 
  comment: string
  setComment: React.Dispatch<React.SetStateAction<string>>
}