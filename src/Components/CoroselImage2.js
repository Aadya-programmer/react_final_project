export function CoroselImage2() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/corosel2.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          width: '100%',
        }}
      />
    </>
  );
}
