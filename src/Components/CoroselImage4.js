import corosel4 from './corosel4.jpeg';

export function CoroselImage4(){
  return(
    <>
      <div style={{ backgroundImage: `url(${corosel4})`, backgroundSize: 'cover',backgroundPosition:'center', height: '500px', width: '100%' }} />
    </>
  );
}