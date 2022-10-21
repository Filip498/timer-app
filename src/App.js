import { useEffect, useState } from 'react';
import FormattedTime from './components/FormattedTime/FormattedTime';
import Container from './components/Container/Container';
import Button from './components/Button/Button';

const App = () => {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(null);

  useEffect(() => {
    let stopwatch = null;

    if(start) {
      stopwatch = setInterval(() => {
        setTime(preValue => preValue + 10)
      }, 10)
    } else {
      clearInterval(stopwatch);
    }

    return () => clearInterval(stopwatch)
  }, [start]);



  // reset usuwa wartość
  return (
    <Container>
      <FormattedTime time={time} />
      <Button setTime={setTime} setStart={setStart}></Button>
    </Container>
  );
}

export default App;