import * as React from "react";

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Slot = React.forwardRef<HTMLElement, SlotProps>(({ children, ...props }, ref) => {
  if (!children) {
    return null;
  }

  const child = React.Children.only(children) as React.ReactElement;
  
  return React.cloneElement(child, {
    ...props,
    ...child.props,
    ref: ref ? ref : child.props.ref || null,
  });
});

Slot.displayName = "Slot";

export { Slot };