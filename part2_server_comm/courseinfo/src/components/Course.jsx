const Header = (props) => <h2>{props.course}</h2>

const Content = ({parts}) => (
  <div>
    {parts.map(part =>
      <Part part={part} key={part.id} />
    )}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

// Text according to the pic as of 20/8/2026
const Total = (props) => <b><p>total of {props.total} exercises</p></b>

const Course = ({name, parts}) =>
  <div>
    <Header course={name} />
    <Content parts={parts} />
    <Total
      total={ parts.reduce((iter_val, part) => iter_val + part.exercises, 0) } />
  </div>

export default Course