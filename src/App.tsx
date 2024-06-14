import { styled, Paper, Container, Grid, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';
import { GridOperationButton } from './GridOperationButton';
import { GridDigitButton } from './GridDigitButton';


const OutputContainer = styled('div')(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden"
}))

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(4),
  borderRadius: 15
}))

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [overwrite, setOverwrite] = useState(false);

  const clear = () => {
    setPrevValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true);
  };

  const percent = () => {
    if (currentValue !== "0") {
      setCurrentValue((parseFloat(currentValue) / 100).toString());
      setOverwrite(true);
    }
  };

  const calculate = () => {
    if (!prevValue || !operation) return currentValue;

    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    let result;
    switch (operation) {
      case "/":
        result = prev / curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      default:
        return currentValue;
    }
    return result.toString();
  };

  const equals = () => {
    const val = calculate();
    setCurrentValue(val);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  };

  const del = () => {
    setCurrentValue(currentValue.length === 1 ? "0" : currentValue.slice(0, -1));
    setOverwrite(true);
  };

  const selectOperation = (op: string) => {
    if (operation && !overwrite) {
      const val = calculate();
      setCurrentValue(val);
      setPrevValue(val);
    } else {
      setPrevValue(currentValue);
    }

    setOperation(op);
    setOverwrite(true);
  };

  const setDigit = (digit: string) => {
    if (overwrite) {
      setCurrentValue(digit);
      setOverwrite(false);
    } else {
      setCurrentValue(currentValue === "0" ? digit : currentValue + digit);
    }
  };  


  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <OutputContainer>
              {currentValue}
            </OutputContainer>
          </Grid>
          <Grid item container columnSpacing={1}>

            <GridDigitButton digit={"7"} enterDigit={setDigit} />
            <GridDigitButton digit={"8"} enterDigit={setDigit} />
            <GridDigitButton digit={"9"} enterDigit={setDigit} />

            <GridOperationButton operation={"*"}
              selectOperation={selectOperation}
              selectedOperation={operation} />
          </Grid>
          <Grid item container columnSpacing={1}>

            <GridDigitButton digit={"4"} enterDigit={setDigit} />
            <GridDigitButton digit={"5"} enterDigit={setDigit} />
            <GridDigitButton digit={"6"} enterDigit={setDigit} />

            <GridOperationButton operation={"-"}
              selectOperation={selectOperation}
              selectedOperation={operation} />
          </Grid>
          <Grid item container columnSpacing={1}>

            <GridDigitButton digit={"1"} enterDigit={setDigit} />
            <GridDigitButton digit={"2"} enterDigit={setDigit} />
            <GridDigitButton digit={"3"} enterDigit={setDigit} />

            <GridOperationButton operation={"+"}
              selectOperation={selectOperation}
              selectedOperation={operation} />
          </Grid>
          <Grid item container columnSpacing={1} rowSpacing={1}>

            <GridDigitButton digit={"0"} enterDigit={setDigit} xs={3} />

            <Grid item xs={6}>
              <Button fullWidth variant="contained" onClick={equals}>
                =
              </Button>
            </Grid>

            <GridOperationButton operation={"/"}
              selectOperation={selectOperation}
              selectedOperation={operation} />

            <GridOperationButton operation={"DEL"}
              selectOperation={del}
              selectedOperation={operation} />

            <GridOperationButton operation={"AC"}
              selectOperation={clear}
              selectedOperation={operation} />

            <GridOperationButton operation={"%"}
              selectOperation={percent}
              selectedOperation={operation} />

            <GridOperationButton operation={"."}
              selectOperation={selectOperation}
              selectedOperation={operation} />
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  )
}
export default App;
