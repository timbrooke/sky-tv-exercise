# Spring Heeled Jack

## Introduction

Inspired by Sky TVs Penny Dreadfuls, games like the Room and other gothic horror
I thought it would be fun to place the facial recognition in a Victorian setting.

## Technologies

I found two Open Source projects that were good for face tracking:

### Face-API.js

JavaScript API for face detection and face recognition in the browser implemented on top of the tensorflow.js core API
It's good at tracking the head, identifying facial landmarks and recognizing facial expressions.

[website](https://justadudewhohacks.github.io/face-api.js/docs/index.html)

### Jeeliz

JavaScript librairies that bring real-time computer vision to web developers. They can detect and track a face, 
recognize expressions or detect 3D objects.

## Web Technology
This site was built using Create-React-App.
So it's a React based website.

[website](https://jeeliz.com/)

## Folders

The project follows the usual structure for Create React App.
* public contains data and images
    * data - trained neural net (from Jeeliz)
    * faceapi - trained neural nets 
    * images - pictures for the app
* src - contains the code
    * apps (Jeeliz Apps)
    * components - react components
    * dist - Jeeliz libraries
    * helpers - Jeeliz helper libraries
    * libs - threejs
    * pages - the website pages
    * store - data store and context for menu
    * utils - functional parts of the code
        * CircularBuffer.js - circular buffer to smooth data
        * Jumper.js - navigation helpers
        * video.js - video handling and initiating neural nets
    

### src folder


