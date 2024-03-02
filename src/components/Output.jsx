const Output = ({ bill, tip, total }) => {
  return (
    <h3>
      You pay {total} (${bill} +${tip} tip)
    </h3>
  );
};

export default Output;
