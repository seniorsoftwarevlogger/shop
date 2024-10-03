export const formatVariantName = (variantName: string): string => {
  const [_title, ...name] = variantName.split(" / ");

  return name ? name.join(" - ") : "One style";
};
