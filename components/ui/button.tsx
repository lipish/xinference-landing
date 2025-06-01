import * as React from "react"
import { Slot } from "./slot"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" 
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const baseClass = "inline-flex items-center justify-center rounded-md font-medium transition-colors"
    
    const variants = {
      default: "bg-xinference-blue text-white hover:bg-xinference-darkblue",
      outline: "border border-xinference-blue/50 bg-white text-xinference-blue hover:bg-xinference-blue/10",
      ghost: "text-gray-700 hover:bg-gray-100"
    }
    
    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-8 px-3 text-xs", 
      lg: "h-12 px-6 text-base"
    }
    
    const classes = [baseClass, variants[variant], sizes[size], className].join(" ")
    
    const Comp = asChild ? Slot : "button"
    return <Comp className={classes} ref={ref} {...props} />
  }
)
