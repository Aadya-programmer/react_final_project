import corosel2 from './corosel2.jpeg';

export function CoroselImage2(){
  return(
    <>
      <div style={{ backgroundImage: `url(${corosel2})`, backgroundSize: 'cover',backgroundPosition:'center', height: '500px', width: '100%' }} />
    </>
  );
}