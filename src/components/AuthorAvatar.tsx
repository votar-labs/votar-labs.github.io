import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface AuthorAvatarProps {
  name: string
  src?: string
  className?: string
}

export function AuthorAvatar({ name, src, className }: AuthorAvatarProps) {
  return (
    <Avatar className={cn("h-6 w-6", className)}>
      <AvatarImage src={src || "https://github.com/shadcn.png"} alt={name} />
      <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
  )
}
