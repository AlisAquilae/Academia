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
Observation error

Be careful with data. Look for errors. Imagine how these propagate into your analysis. And always discuss the uncertainties in your analysis

3 types of errors:
- missing water balance components
- Precipitation observations: error propagation
- Discharge observations: rating curves
- Examining discharge time series: error or artifact?

---
# Missing water balance terms
Always first set up the water balance.

E.g.
- In: precipitation, discharge, snowmelt
- Out: discharge, percolation, evapotranspiration

Always define this. Which terms are important, which do you need to measure?

Most people assume the water balance to simply be P - ET - Q = $\Delta s$ . Other flows are assumed not to be as important. However:
- Intercatchment groundwater flow (across boundaries). Important in areas with complex geology or permeable soils. Never measured and difficult to estimate. Can be estimated using 
  - Budyko curve (plot discharge / P, look for catchments which lie off the Budyko curve)
  - Compare discharge simulation from model to observation. Rerun by adding or removing groundwater
  - AET estimates. Most rainfall-runoff models are water balance conservative. Usually, model inputs are P and ETpot, and calibrate to Qobs. Model can only change ETpot to ETact. However, if IGF-inflow is ignored, ET is reduced too much. Solution: compare ETact computed from water balance with "observed"

---
# Precipitation observations: Error propagation
If you're looking at flood forecasts, precipitation is most uncertain and affects discharge the most.

One of most common methods to observe precipitation is using radar. Problems:
- Dome over antenna getting wetter
- Undershooting and overshooting the clouds
- If you're far away, the strength of the beam becomes less and less
- Topography (something being in the way)
- Big rainfall event can also block rainfall behind it

However, you can correct for them using statistical filters and physical correlations, or compare and combine using raingauges

We can identify 3 errors:
- Bias: amplified when propagated through the hydrological system
- Timing errors: attenuated when propagated through the hydrological system
- Seasonally-varying errors: affect dynamic of simulated catchment water balance. 