const useTitle = (company) => {
  let title;
  if (company === "disney") title = "Walt Disney";
  if (company === "dreamworks") title = "DreamWorks";
  if (company === "universal") title = "Universal";
  return { title };
};

export default useTitle;
