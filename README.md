### About

A simple react app to calculate cvss score.  
The package I used to calculate the score is [This](https://github.com/aaronmccall/cvss).  
The application is simple, so you can easily integrate this cvss calculator to your react project.  
Normally, there is only 1 component, which is calculator itself, but I wanted to split the calculator 
code to 3 components which are calculator, score and stepper components, so the code would be more simple. 
Mui library is used, to make the calculator more pretty.  

### Note
To see the score, you have to complete all the steps first,  
when you've completed the steps, the score will be automatically shown.  
There is a loader spinner icon, which will be shown until react app loads (to make things more pretty :) )  
And a snackbar, when you select an option, a snackbar will be shown to notify you which option you've selected.  



### The app screenshot
Completed the first 2 steps: 
<img width="1744" alt="Screen Shot 2022-06-15 at 15 23 07" src="https://user-images.githubusercontent.com/81488832/173833118-261b482b-36b2-4610-aef1-049381580de5.png">

Score, after calculation: 
<img width="1639" alt="Screen Shot 2022-06-15 at 15 54 46" src="https://user-images.githubusercontent.com/81488832/173833163-a4485acd-e50e-4be0-aafe-e9e927f5a81b.png">

