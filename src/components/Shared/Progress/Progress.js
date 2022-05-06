import ProgressBar from "@badrap/bar-of-progress";
const bar = () => {
  const progress = new ProgressBar({
    size: 4,
    color: "#0080FF",
    className: "z-50",
    delay: "100",
  });
  progress.start();
  setTimeout(() => {
    progress.finish();
  }, 500);
};
export default bar;
