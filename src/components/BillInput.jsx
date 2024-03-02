const BillInput = ({ bill, onChangeBill }) => {
  return (
    <div>
      <label htmlFor='text'>How much was the bill ?</label>
      <input
        type='number'
        id='text'
        value={bill}
        onChange={onChangeBill}
        placeholder='Bill Value'
      />
    </div>
  );
};

export default BillInput;
