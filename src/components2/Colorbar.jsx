export default function Colorbar(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.setColor('white');
        }}
        style={{ backgroundColor: 'white', borderRadius: '20px', height: '15px' }}
      ></button>
      <button
        onClick={() => {
          props.setColor('red');
        }}
        style={{ backgroundColor: 'red', borderRadius: '20px', height: '15px' }}
      ></button>
      <button
        onClick={() => {
          props.setColor('green');
        }}
        style={{ backgroundColor: 'green', borderRadius: '20px', height: '15px' }}
      ></button>
      <button
        onClick={() => {
          props.setColor('pink');
        }}
        style={{ backgroundColor: 'pink', borderRadius: '20px', height: '15px', marginBottom: '20px' }}
      ></button>
    </div>
  );
}
