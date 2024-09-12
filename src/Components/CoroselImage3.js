export function CoroselImage3() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/corosel3.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          width: '100%',
        }}
      />
    </>
  );
}
