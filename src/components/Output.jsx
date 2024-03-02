const Output = ({ bill, average, total }) => {
  return (
    <h3>
      You pay {total} (${bill} +${average} tip)
    </h3>
  );
};

export default Output;
