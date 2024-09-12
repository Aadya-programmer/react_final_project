export function CoroselImage1() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/corosel1.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          width: '100%',
        }}
      />
    </>
  );
}
