---
fileClass: Base, Lecture Notes
title: 
Parents: ["[[Advanced Hydrological Systems Analysis]]"]
Draft: 
Status: In Progress
Related Notes: 
Related Terminology: 
Related Courses: ["[[Advanced Hydrological Systems Analysis]]"]
---
# Introduction
Yesterday, we left off with trying to identify the right timestep when finding the numerical solution. 

As long as timestep numerical is smaller than timestep of input variability and timestep of the system.

>[!Important]
>Tnum should be (much) smaller than Tin


What happens with variable input and more than one frequency? If Tnum in between Tin 1 and Tin 2, the solution is not very good. Tnum smaller than Tin 1 and Tin 2, only then good match

>[!Important]
>Tnum should be smaller than the smallest Tin


We will not always need to take a small timestep which takes into account all the details. In this case, we average over some longer length. E.g. moving average, used as input for your model. This performs decently for larger seasonal variation, for example, but ignores the details. 