---
fileClass: Base, Lecture Notes
title: 
Parents: 
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# Today
Today: recession-based modelling. Modelling the catchment and looking at it as a system, but from the dynamics of the outflow. What do we measure at the outlet and what can we say usnig these measurements about the catchment as a whole.

- Intro to streamflow recession analysis
- "doing hydrology backward"
- Inference of ET and snowmelt from streamflow

Today, not the root zone but the system as a whole.

This model we are going to discuss does not include a root zone and therefore works best in wet conditions (left side of Budyko curve).

System output, not natural variability, etc.

Main tool: recession analysis

---
# Recession analysis
We observe an exponential-like decay. This reflects a linear reservoir. 

Using a recession analysis, you can learn a lot about your system. 

Everyday you have ET. This declines with declining storage. If you know amount of ET and how fast it can decay in your system, you can estimate storage. 

Today, we are going to be talking about the simplest model imaginable for this case. No auxiliary variables, only the main fluxes in and out of the catchment using a very elegant and simple equation. If this does the job, you don't need more complexity (remember Occam's Razor!!!)

Today: relation between what comes in (climate signal)  and the release, nothing about what happens in between.

The idea is that there is a direct relationship between root zone dynamics and runoff at the catchment outlet. 

Recession is much faster during summer when potential ET is high. Recession is decay of streamflow

Today: typical headwater catchment. 

---
# Kirchner (paper for today)
Did observations and studied hydrographs. 

At the moment that precipitation peaks, so does streamflow peak. At the moment rainfall peaks, storage in the catchment is highest and streamflow is highest. 

He posed that discharge in the stream is solely caused on the amount of water stored in the catchment. 

There are many regions where this is not true, but in some cases it might be. There might be pipeflow, connection between surface-subsurface flow, groundwater flow, baseflow. All of this is somehow assimed to be included in the assumption.

If discharge is a result of storage, then the inverse is true as well: storage causes discharge. Discharge therefore predicts storage. 

Now we assume precipitation and evapotranspiration to be much smaller than discharge. This way, we can measure the sensitivity of discharge to changes in storage by looking at discharge alone, disregarding the storage term entirely. 

Binning of data points necessary beccause some measurements might be negative due to errors, which poses problems when using a log-transform. 

The storage level is arbitrary. It is only found by investigating the discharge sensitivity, and does not relate to absolute numbers. 

How can we use this? We want to simulate relation between rainfall and runoff. Starting from the water balance, we now have a sensitivity function. With some mathematics, we can come up with a formula that relates the change in discharge over time using the discharge only. 

This is our rainfall-runoff model. 

We also assume ET = PET (goes under the wet conditions)