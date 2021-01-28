const CourseCardBody = function ({ courseDescription, children }) {
  return (
    <div className="card-body">
      <p className="card-text">{courseDescription}</p>
      {children}
    </div>
  );
};

export default CourseCardBody;