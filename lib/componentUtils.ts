// interface DdssCustomProps {

// }
// export function filterCustomProps(props: DdssCustomProps) {
//   const nativeDivProps: (keyof React.HTMLAttributes<HTMLDivElement>)[] = [
//     "children",
//     "className",
//     "id",
//     "style",
//     "onClick",
//     "onMouseEnter",
//     "onMouseLeave",
//     "onFocus",
//     "onBlur",
//     "tabIndex",
//     "role",
//     "title",
//   ];

//   return Object.keys(props).reduce(
//     (customProps, key) => {
//       if (
//         !nativeDivProps.includes(
//           key as keyof React.HTMLAttributes<HTMLDivElement>,
//         )
//       ) {
//         const kebabKey = `ddss-${key
//           .replace(/([a-z])([A-Z])/g, "$1-$2")
//           .toLowerCase()}`;
//         customProps[kebabKey] = props[key as keyof typeof props];
//       }
//       return customProps;
//     },
//     {} as Record<string, string | undefined>,
//   );
// }
