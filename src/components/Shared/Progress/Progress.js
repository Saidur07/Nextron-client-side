import ProgressBar from "@badrap/bar-of-progress";
const bar = () => {
  const progress = new ProgressBar({
    size: 4,
    color: "#0080FF",
    className: "z-50",
    delay: "200",
  });
  progress.start();
  setTimeout(() => {
    progress.finish();
  }, 800);
};
export default bar;
