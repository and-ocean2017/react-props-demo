import CourseComplexity from './CourseComplexity';

const CourseCardHeader = function ({ headerText, courseComplexityType }) {
  return (
    <div className="card-header d-flex justify-content-between align-items-center m-0">
      <h5>{headerText}</h5>
      <CourseComplexity courseComplexityType={courseComplexityType} />
    </div>
  );
};

export default CourseCardHeader;