### About

A simple react app to calculate cvss score. 
The package I used to calculate the score is [This](https://github.com/aaronmccall/cvss) 
The application is simple, so you can easily integrate this cvss calculator to your react project. 
Normally, there is only 1 component, which is calculator itself, but I wanted to split the calculator code to 3 components 
which are calculator, score and stepper components, so the code would be simpler. 
Mui library is used, to make the calculator more pretty. 

### Note
There is no finish the calculation button, to see the score, you have to complete all the steps first, 
when you've completed the steps, the score will be automatically shown. 
There is a loader spinner icon, which will be shown until react app loads (to make things prettier :) and 
A snackbar, when you select an option, a snackbar will be shown to notify you which option you've selected. 



### The app screenshot
Completed the first 2 steps: 
![Screenshot](https://imgur.com/a/5UroeAd "Screenshot") 
Score, after calculation: 
![Screenshot](https://imgur.com/Y0mfUJI "Screenshot") 

