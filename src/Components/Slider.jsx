import React, { useState, useEffect } from 'react';

function SliderComponent() {
    
  const themes = [
    {
      name: 'Theme 1',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
      height: '600px',
      width: '800px',
      buttonStyle: {
        backgroundColor: 'bg-gray-500',
        textColor: 'text-white',
        fontFamily: 'Georgia, Arial, Helvetica',
      },
    },
    {
      name: 'Theme 2',
      imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      height: '700px',
      width: '1000px',
      buttonStyle: {
        backgroundColor: 'bg-blue-500',
        textColor: 'text-white',
        fontFamily: 'Georgia, Arial, Helvetica',
      },
    },
    {
      name: 'Theme 3',
      imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      height: '1500px',
      width: '100%',
      buttonStyle: {
        backgroundColor: 'bg-red-500',
        textColor: 'text-white',
        fontFamily: 'Georgia, Arial, Helvetica',
      },
    },
  ];

  const [themeIndex, setThemeIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  const currentTheme = themes[themeIndex];

  const moveToPreviousTheme = () => {
    const previousIndex = themeIndex === 0 ? themes.length - 1 : themeIndex - 1;
    setThemeIndex(previousIndex);
    setImageOpacity(0);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setImageOpacity(1);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [themeIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveToPreviousTheme();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [themeIndex]);

  const containerStyles = {
    position: 'relative',
    textAlign: 'center',
  };

  const imageStyles = {
    width: '100%',
    opacity: imageOpacity,
    transition: 'opacity 0.5s',
  };

  const buttonStyles = {
    position: 'absolute',
    left: '50%',
    top: '65%',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
    borderRadius: '10px',
    cursor: 'pointer',
    ...currentTheme.buttonStyle, 
  };

  return (
    <div className="text-center">
      <div className="" style={containerStyles}>
        <img
          src={currentTheme.imageUrl}
          alt={currentTheme.name}
          className="w-full"
          style={imageStyles}
          key={currentTheme.imageUrl}
        />
        <button
          onClick={moveToPreviousTheme}
          style={buttonStyles}
        >
           Explore Now
        </button>
      </div>
    </div>
  );
}

export default SliderComponent;
