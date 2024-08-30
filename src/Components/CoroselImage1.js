import corosel1 from './corosel1.jpeg';

export function CoroselImage1(){
  return(
    <>
      <div style={{ backgroundImage: `url(${corosel1})`, backgroundSize: 'cover', backgroundPosition:'center', height: '500px', width: '100%' }} />
    </>
  );
}