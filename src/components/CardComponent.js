import CourseCardHeader from './CourseCardHeader';
import CourseCardBody from "./CourseCardBody";
import BuyButtonComponent from "./BuyButtonComponent";

const CardComponent = function ( {
  headerText,
  courseComplexityType,
  courseDescription,
}) {
  return (
    <div className="card m-4">
      <CourseCardHeader
        headerText={headerText}
        courseComplexityType={courseComplexityType}
      />
      <CourseCardBody courseDescription={courseDescription}>
        <BuyButtonComponent />
      </CourseCardBody>
    </div>
  );
};

export default CardComponent;