"use client"


import React from "react"

const getButtonClasses = (variant = "default", size = "default") => {
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    hero: "bg-gradient-hero text-white shadow-hero hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300",
    "hero-outline": "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300",
  }
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }
  
  return `${baseClasses} ${variants[variant] || variants.default} ${sizes[size] || sizes.default}`
}

const Button = React.forwardRef(({ className, variant, size, children, ...props }, ref) => {
  const buttonClasses = getButtonClasses(variant, size)
  const finalClasses = className ? `${buttonClasses} ${className}` : buttonClasses
  
  return (
    <button
      className={finalClasses}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

// Legacy exports for backward compatibility
const buttonVariants = (props) => getButtonClasses(props?.variant, props?.size)

export { Button, buttonVariants }