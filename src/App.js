import CardComponent from './components/CardComponent';

const App = function () {
  return (
    <div>
      <h4 className="mt-4 text-center">Course Library</h4>
      <CardComponent
        headerText="React.js"
        courseComplexityType="Beginner"
        courseDescription="A beginner friendly course of React.js Library"
      />
      <CardComponent
        headerText="JavaScript.js"
        courseComplexityType="Intermediate"
        courseDescription="Vanilla JavaScript course for professionals."
      />
    </div>
  );
};

export default App;