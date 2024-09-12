export function CoroselImage4() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/corosel4.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          width: '100%',
        }}
      />
    </>
  );
}
