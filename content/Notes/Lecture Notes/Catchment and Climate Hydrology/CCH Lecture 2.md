---
fileClass: Base, Lecture Notes
title: 
Parents: ["[[Catchment and Climate Hydrology]]"]
Draft: 
Status: Done
Related Notes: 
Related Terminology: 
Related Courses: ["[[Catchment and Climate Hydrology]]"]
---
# Intro
Today: introduction for practical on friday. Climate and the local water balance. Intro to understanding better dynamics of streamflow. Short-term dynamics with the goal to understand what determines the long-term partitioning. Long-term average.

How plants cause streamflow to be what it is on average. Focus on rootzone, where partitioning takes place. 

We deal with the question: what is the average output?

How much evapotranspiration and what is influence of root zone?

---
# Water balance
Evaporation important, but easily underappreciated
- Invisible
- Slow

Evaporation ties water balance to energy balance

Water which evaporates will not lead to runoff. But this effect is not immediate. There is a time lag. 

## Soil moisture
Moisture in the soil. 
- All pores filled with water: saturated. Water in soil equal to porosity
- There is always some water in the soil, even in the driest conditions due to capillary forces

Metrics:
- Soil column of depth $L$ (mm). Half filled is approximately saturation, because porosity usually about 50%
- Absolute water content: S = porosity times soil depth $L$
- Ratio of wetness: between zero and one. However, you lose info on how much water is available in absolute sense
- Volumetric water content: percentage of water in volume of soil. Cannot exceed porosity. Usually indicated by $\theta$. 

Observing storage
- Gravimeter (small ring sample, weigh it, dry it in the oven, weigh again, that is how much water is in there). You can, however, never repeat the measurement again. Labour intensive, destructive. 
- TDR. Accurate, but very expensive, needs calibration. 
- Neutron probe. Used in the past. Accurate but radioactive
- Cosmic ray. Suffers from interpretation issues. 
- Groundwater wells. Accurate, cheap, but required shallow groundwater and no info about unsaturated zone. 
- Gravity field anomalies (GRACE). Coarse spatial resolution. Low frequency.
- Passive microwave. Accurate, but only shallow part of soil
- Active microwave. More accurate, higher resolution, but even shallower. 

These also vary in measurement scales. 

Scaling models:
- spacing between measurement 
- Extent (range of all measurements)
- Support: (range of single measurement)

Water in the soil can go down or up. 
- Up generally via uptake of plant roots. 
- Down: gravity pulls water down. Wants to flow through pores, but pores want to keep water in due to capillary forces. Balance between the two determines flow. If soil is wet, gravity is stronger. If dry, capillary forces stronger. Flux pulled down by gravity is [[Permeability|Hydraulic Conductivity]]. Strongly depends on amount of water in the soil (almost to the point it is a threshold process). Different soils have different grain sizes. Both hydraulic conductivity and grain size strongly influence model parameters

## Field capacity
[[Field Capacity]] is generally defined as the volumetric water content after excess water has drained away and the rate of downward movement has decreased. Serves as a practical measure for the water-holding capacity of a field soil. Water can still go below field capacity, e.g. through evaporation

Above field capacity, rapid increase in amount of water being drained. Below field capacity, nothing really happens

## Evapotranspiration
In many catchments, more water leaves the catchment via evaporation than via streamflow. Streamflow is often storage-driven, leading to faster recession rates in summer compared to winter. Many long-term changes in runoff characteristics can be attributed to changes in evaporation. Integral part of hydrological models. 

Energy associated with water phase changes. Energy needed for transition from 1kg liquid to 1kg of water vapour is a lot, 2450 KJ. 

Evaporation can occur via different processes. Difference between fores- and non-forest sites. In forest, lot of rainfall can remain on canopy and directly evaporate from there (never reaches the soil). Can account for 50% of evaporation for western-European environments. Globally, on avergae, stomata transpiration accounts for 80% of evaporation.

Globally, most of the evaoptranspiration stems from transpiration, which peaks in tropics. Bare-soil evaporation only dominates in semi-arid regions.

We are talking about ET.
- Potential ET (PET) is a representation of the environmental demand for evapotranspiration. Not actual evapotranspiration, but potential for evapotranspiration given enough water is available. Standardised ET. Actual ET is said to be potential ET when there is enough water !!!

Estimating PET
- Penman-Monteith. Strongest theoretical basis, but required most inputs and observations
- Priestley-Tailor. Robust, but no advection
- Makkink. Global rather than net radiation
- Thornthwaithe. Little input data needed, but does not consider energy balance. Only considers temperature. 

Most transport of water vapour occurs via turbulent exchange. Under certain assumptions, the vertical flux is proportional to the covariance between vertical typical wind speed and the variable of interest (temperature for H and q for ET)

$$
F \approx \overline{\rho_a} \overline{w'T'}
$$

We thus require a very high resolution to measure something each second, which we then ned to aggregate to the decade. 

# Impact of soil moisture on actual ET
At soil moisture values below critical moisture content, water uptake from plant roots can no longer satisfy PET and ET becomes supply limited. Models typically account for this by multiplying PET bya  stress factor $\beta$. 

The stress factor is typoically nonlinear, and often parameterised by a piecewise linear function of soil moisture. Below wilting point 0, fully saturated is 1, in between is linear function. 

---
# Rooting depth
Now also link to absolute storage, and therefore rooting depth. This is highly variable and uncertain, and difficult to measure. Therefore this is often a tuning paramater. Usually taken in range of 50-100 cm

Usually 150mm evaporation available more than precipitation for evaporation. Afterwards, soil moisture becomes limiting. taken as difiference between field capcacity, and critical moisture content times rooting depth

---
# Paper for today
One of first papers to analyse longer time-series soil moisture. 

Uses same formulas for drainage and ET and above, and considers these two separate.

Together, they describe how much water is 'lost'  from the system. This is the loss-functioon . Total loss per day given a typical soil profile per level of soil moisture. 

In a wet climate, soils will be at field capacity, because that's where they like to be. 

Below critical moisture, soil is also quite comfortable. In deserts. New precipitation is limited, and immediately gets evaporated. 

Thus, 2 preferred states. One in dry season and one in wet season. 

Budyko-curve. Excursions above and below critical moisture content cause actual ET to defer from potential ET. 

Looking at the long-term partitioning. It is not as simple as P - ET, as it depends on dynamics and whether soils will dry out below critical moisture content. 

