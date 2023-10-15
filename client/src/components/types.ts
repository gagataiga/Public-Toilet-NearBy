export interface MapProps{
  isPost:boolean
}

export interface NavigatorProps{
  distance: number
  duration: number
  steps: NavStep[]
  routes: any
  setRoutes: React.Dispatch<React.SetStateAction<any>>
  setSteps: React.Dispatch<React.SetStateAction<NavStep[]>>
}

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

export interface NavStep {
  distance: number;
  duration: number;
  type: number;
  instruction: string;
  name: string;
  way_points: [number, number];
}

