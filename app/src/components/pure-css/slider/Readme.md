## Image Slider With Parallax Effect

This is inspired by a [YouTube Tutorial](https://youtu.be/PkADl0HubMY?si=bNKHYJmiN3LB-tuj) where they recreated an award winning sliding animation with minimum lines of code as possible.
I tried to implement this in react.

### Overview

This React component creates an interactive image slider with a parallax effect. When you drag the images horizontally, they smoothly translate, and their object positions adjust to create a parallax scrolling effect. This effect is achieved using the Web Animations API.

### How it Works

We have a slider-container div, an image-track div and the images. The images are placed horizontally on the image-track. And whenever the user clicks and drags the mouse over the container, the image will have to move and also their object position will change for the parallax effect to happen.
so we have a "percentage" state which tracks the mouse movement. For that we have to start from when user CLICKS the mouse, and track how much they DRAGGED the mouse. Also track when the mouse is UP.
we have states to track them too "mouseDownAt".
Also to continue scrolling from where they left, we also have a prevPercentage state.
But how does the movement and parallax effect happen?
Its simple!! we change the corresponding style according to the percentage state
For the image-track:

```
       style={{transform: `translate(${percentage}%, -50%)`}}
```

And for the images (parallax effect) :

```
   style={{objectPosition: `${percentage + 100}% 50%`}}
```

But to make the transition more smooth, we used the Web Animations API using useRef
We give the trackRef to the image-track div and imagesRef to images

```
  useEffect(() => {
    trackRef.current.animate(
      {
        transform: `translate(${percentage}%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    imagesRef.current.forEach((img) => {
      img.animate(
        {
          objectPosition: `${percentage + 100}% 50%`,
        },
        { duration: 1200, fill: "forwards" }
      );
    });
  }, [percentage]);
```

### How to use?

If you liked this, feel free to use this component in your own project..
Just copy both the component and the css in your project and and import it where you want to use it.

```
<Slider images={images} />
```

Don't forget to pass the Array of images!!

Thank you..!!
