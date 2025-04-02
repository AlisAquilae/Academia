---
fileClass: Base, Lecture Notes
title: 
Parents: ["[[Catchment and Climate Hydrology]]"]
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# Guest lecture
Modelling and forecasting flood and drought risk

Part 1: hydrological modelling at Deltares
Part 2: Climate scenarios Rhine and other / new applications

---
# Background
Watermanagers deal with too much, too little and too dirty water. 
- Monitor, inform and warn for dangerous events
- Develop and maintain infrastructure
- Discuss with policymakers
- Discuss with other sectors

Generally, very little mandate to influence the water using sectors

Long-term policy typical questions:
- Does the current strategy meet standards?
- Is there a risk of not achieving policy targets
- Is there a risk additional measures are required?
- Is there a risk too many measures are taken?
- Do we spend our money well?
- How robust is our current policy for the future?
- How easy is it to adapt to a different strategy?

For short-term forecasting and warning this is somewhat different
- What is the current status?
- How likely is it that a certain threshold will be exceeded? If so, what happens?
- Can I optimise my system further?
- What are possible measures I can take?
- What is the quality and performance of my forecast system?

---
# wflow_sbm
In the past, lumped model used by Rijkswaterstaat: HBV

Now, processes are split more. 

- Snow: day-degree approach
- Interception: precipitation intercepted on vegetation
- Evaporation and transpiration from different sources
- Soil represented in different layers (which are variable)
- Groundwater flow not through head differences but through kinematic approach (slope as driving force for lateral flow). Works well for coarse scale. 