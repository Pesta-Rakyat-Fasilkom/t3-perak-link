export interface OptimizedImageProps {
  imageUrl: string
  alt: string
  className?: string
  fit:
    | 'contain'
    | 'cover'
    | 'fill'
    | 'inherit'
    | 'initial'
    | 'none'
    | 'revert'
    | 'scale-down'
    | 'unset'
  isRounded?: boolean | string
}
