const CourseComplexity = function ({ courseComplexityType }) {
  const studentTypeClass = ["badge", "badge-pill"];

  if (courseComplexityType === "Beginner")
    studentTypeClass.push("badge-primary");
  else if (courseComplexityType === "Intermediate")
    studentTypeClass.push(" badge-warning");

  return (
    <span className={studentTypeClass.join(" ")}>{courseComplexityType}</span>
  );
};


export default CourseComplexity;