
import './Curriculum.css';

type Props = {
  children: JSX.Element | JSX.Element[];
}

function Curriculum(props: Props) {
  return (
    <div>
      <main className='container'>
        <div className="grid">{props.children}</div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default Curriculum;
