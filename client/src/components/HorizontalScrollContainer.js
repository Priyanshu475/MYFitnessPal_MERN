import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const HorizontalScrollContainer = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="horizontal-scroll-container">
      <div className="scroll-container" ref={containerRef}>
        <Link to='/user/learn/chest'>
          <img alt='' className='image1' />
        </Link>
        <Link to="/user/learn/shoulders" >
        <img alt='' className='image3' />
        </Link>
        <Link to="/user/learn/arms">
        <img alt='' className='image4' />
        </Link>
        <Link to="/user/learn/legs">
        <img alt='' className='image5' />
        </Link>
        <Link to="/user/learn/back" >
        <img alt='' className='image2' />
        </Link>
        <Link to="/user/learn/core">
        <img alt='' className='image6' />
        </Link>
      </div>
      <div className="scroll-buttons">
        <button className="scroll-button" onClick={scrollLeft}>
          {'<'}
        </button>
        <button className="scroll-button" onClick={scrollRight}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default HorizontalScrollContainer;
