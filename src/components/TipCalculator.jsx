import { useState } from 'react';
import BillInput from './BillInput';
import Output from './Output';
import Reset from './Reset';
import SelectPercentage from './SelectPercentage';

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const average = (percentage1 + percentage2) / 2;
  const total = bill + average;
  const handleBillChange = (e) => setBill(Number(e.target.value));
  const handleReset = () => {
    setBill(() => 0);
    setPercentage1(() => 0);
    setPercentage2(() => 0);
  };

  return (
    <div>
      <BillInput bill={bill} onChangeBill={handleBillChange} />
      <SelectPercentage percentage={percentage1} setPercentage={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      <Output bill={bill} average={average} total={total} />
      <Reset onReset={handleReset} />
    </div>
  );
};

export default TipCalculator;
