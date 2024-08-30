import corosel3 from './corosel3.jpeg';

export function CoroselImage3(){
  return(
    <>
      <div style={{ backgroundImage: `url(${corosel3})`, backgroundSize: 'cover',backgroundPosition:'center', height: '500px', width: '100%' }} />
    </>
  );
}