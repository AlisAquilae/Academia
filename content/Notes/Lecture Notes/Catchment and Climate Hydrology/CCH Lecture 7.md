---
fileClass: Base, Lecture Notes
title: 
Parents: ["[[Catchment and Climate Hydrology]]"]
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Catchment and Climate Hydrology]]"]
---
# Today
Floods, especially flood typology, as well as what causes floods. In addition, classifying floods

Floods are among the most costly and most dangerous national hazards in the world. 

Netherlands prone to floods. 

---
# Floods intro
What is a flood?
- When an overflow submerges what is usually dry (WHO)
- Rise in the water level of a stream or water body to a peak, from which the water level recedes at a slower rate (WMO)

Attention: foccus here is on river flood (coastal flooding not considered)

But what is "usual"? For practical purposes: a discharge that exceeds a pre-defined level. Some certain discharge or water level. But how to define the threshold?

There are different kinds of floods:
- Fluvial floods: river floods, lake floods, etc. Water level rises and surrounding country overflows. E/g/ through rainfall or snowmelt. 
- Pluvial floods (flash floods and surface water): too much water in one space. High intensity rainfall events. Creates a flood independent of overflowing water body

Not every flood is therefore alike.

There are also different components: direct flow (runoff) and baseflow
- Direct runoff: immediately related to the generating (rainfall) event
- Baseflow: fed to the streams by delayed pathways

Thus, for floods, direct runoff most important.

Floods are a global phenomenon, but there are similarities between what happens where and when.

---
# Climate change
More floods, and more severe foods, expected in the future. Globally, not just regionally. 

---
# Flood probabilities
FFlood probabilities form the basis for estimating design floods. Design floods are used for dimensioning dams, retention basins, infrastructure, etc.

Return period: 

$$
T = 1 / (1-p)
$$

where $p$ is a non-exceedance probability. E.g. spillway must be able to deal with a return period of once every 1000 years. 

Stochastic risk: risk of exceedance with one year: $1 - p$. Risk of exceedance within two years: $1 - p^2$.

Basic assumption: flood events are independent and homogeneous: plotting positions $pp$. Empirical probability of event $i$. However, limited to years of observation for max return period

Distribution function: tries to mimic behaviour of plotting positions by fitting a line through the observations. 

There are a lot of functions to do this: Normal, LogNormal, Gumble, Gamma, Exponential, GEV, GPD.
- Main difference: number of parameters, i.e. flexibility in the shape. More parameters means more flexibility but also more uncertainty. 

Most frequently used for AMS (annual maximum series): Generalized Extreme Value distribution (GEV) 

But how to esetimate parameters? Fitting distribution to your data. Three main approaches for this parameters estimation
1. Method of moments (simple but not robust)
2. L-Moment estimators
3. Maximum likelihood estimation

Useful also to compare different catchments

Disadvantage of AMS: only one event per year

Instead, use all flood peaks above a given threshold (= Peaks over threshold (POT))
- Statistics are similar, but some peculiarities

---
# Origin of floods
Division in three types of conditions

Atmospheric conditions
- Rainfall
- Snow
- Ice

Catchment conditions
- Soil moisture
- Debris flow
- Geology
- Steepness
- Topography


Anthropogenic conditions
- Levee failure

## Atmospheric conditions
Factors influencing floods:
- Spatial extension of rainfall events (local or widespread)
- Intensity
- Duration
- Spatial extension of snowmelt

Heavy rainfall event have a larger impact on small catchments. Snowmelt events have a larger impact on large catchments. 

Atmospheric conditions are therefore very important for floods

The Vb weather pattern is responsible for most of the major floods in Europe in the last decades. It takes up moisture from the Mediterranean and transports this in a country-clockwise movement north around the Alps. 

But there are about 100 days with Vb weather patterns in a year. Why not 100 floods per year?

## Catchment conditions
The severity of the flood events is controlled by the catchment caharceteristics
- Catchment area
- Topograhy (steepness)
- Drainage density
- Vegetation
- Geology
- Soil type and sickness
- Land use

Most important: antecedent soil moisture. How wet is the soil when it starts to rain? Influences how much water can be stored. 

Can differentiate between Hortonian overland flow (infiltration excess) and Dunne overland flow (saturation excess)

Runoff generating processes lead to either direct runoff or baseflow

## Anthropogenic

# Different kinds of floods
Special case: flash floods:
- High intensity rainfall
- Steep terrain
- Exposed bedrock or very thin rainfall

Long-lasting rainfall floods
- Spatially extensive rainfall events
- Medium uniform intensity over a long period of time
- Soil moisture increase. Saturation of the soil, more rain than soil can absorb

Snowmelt floods
- Rising temperatures
- Snow cover in the catchment
- Saturation of the soil
- Slowly rising flood hydrographs. 

Rain-on-snow floods
- High intensity rainfall
- Similar to heavy rainfall events
- Snow cover in the catchment
- Rising temperatures lead to melting snow
- Saturation of the soil and infiltration capacity exceedance



---
# Generation of floods
Flood generation depends on atmospheric and catchment conditions. However, there exist a variety of conditions that can cause floods

Different atmospheric and catchment condition combinations can lead to the same flood peak. Looking at the peaks only clouds the differences these combinations can cause.

In addition, different combinations can lead to the same flood peak. E.g. low moisture high precipitation and low precipitation high soil moisture. 

---
# Flood types (paper for today)
How can we classify floods according to our generating processes?
- Hydroclimatic perspective (sea level pressure, i.e. atmosphere)
- Hydrological perspective (hydrometeorology or catchment state)
- ???

A very simple classification: Season
- Assumption: flood processes differ in winter and summer (heavy rainfall in summer, snowmelt in winter)
- Advantage: does not require additional data
- Disadvantage: mixture processes are not considered

Hydroclimatic classification
- Classify flood event according to what is going in the atmosphere. E.g. monsoon, snowmelt, cyclone, etc.
- Disadvantage: the catchment itself is not considered

Process-based classification
- Combine atmosphere with catchment. Look at the type of rainfall event as well as catchment characteristics

Hydrograph
- Flood hydrograph fully describes the event. Different flood generating processes have different hydrograph shapes

Flood types give us useful information for what kinds of floods are common in certain regions. 