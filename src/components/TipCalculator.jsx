import { useState } from 'react';
import BillInput from './BillInput';
import Output from './Output';
import Reset from './Reset';
import SelectPercentage from './SelectPercentage';

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  const total = bill + tip;
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
      {tip > 0 && (
        <>
          <Output bill={bill} tip={tip} total={total} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
};

export default TipCalculator;
