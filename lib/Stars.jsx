const Stars = () => {
  const stars = Array.from({ length: 100 }, (_, index) => {
    const isOdd = index % 2 === 0;

    // Random position and size
    const top = Math.random() * 100; // percentage of viewport height
    const left = Math.random() * 100; // percentage of viewport width
    const size = Math.random() * 2 + 1; // size between 1px and 3px

    const className = isOdd ? "dot bright floating" : "dot slow-twinkle drifting";

    const style = {
      position: 'absolute',
      top: `${top}vh`,
      left: `${left}vw`,
      width: `${size}px`,
      height: `${size}px`,
    };

    return <div key={index} className={className} style={style}></div>;
  });

  return <div className="dots-background dotsBackground" style={{ position: 'relative', width: '100vw', height: '100vh' }}>{stars}</div>;
};


export default Stars;