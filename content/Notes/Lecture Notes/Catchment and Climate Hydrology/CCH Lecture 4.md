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
Runoff processes. What is known from a process POV? What do we know about how water flows from rainfall to how it ends up in the stream?
- History of and current challenges in runoff hydrology
- Knowledge of various related concepts
- ???

Focus on complexity and variability of natural system. 

---
# Runoff pathways
Rainfall reaches surface
- If saturated, saturation overland flow
- Percolation into regolith, leaidng to subsurface flow
- Precolation into bedrock or aquifer, leading to subsurface flow


# History
## Horton
Birth of modern Hydrology (catchment Hydrology): Horton. Relation between rainfall and runoff

Concept of infiltration capacity was derived from decades of observations at Horton laboratory. Observations in soil samples made Horton come up with the theory that most streamflow is infiltration excess runoff.

There is some kind of initial infiltration rate. Depends only on time. Infiltration capacity/rate decreases until it reaches some equilibrium infultration rate, which you can sustain for a longer time. If rain above this infiltration rate, you get infiltration excess overland flow. This water cannot infiltrate and will end up in a stream. Soil becomes a limiting factor. Also matches amount of water in a stream and the timing. 

This became a very famous model, and is still found today. However, it has been proven to be completely wrong. Yet it is our starting point. 

## Variable source area concept
Rather than saying Horton were wrong, they assume that not all streamflow is runoff form overland flow. Rather, all flow is subsurface flow unless there is evidence to believe otherwise. 

They came up with a variable source area concept. Rather than infiltration being limited, you might get quick runoff but only from saturated parts of the landscape. The rest is groundwater flow.

There are a couple of things still very wrong with this. Layered rainfall and subsurface flow can be questioned, as well as the thought that the deeper you go down into the soil, the faster the water will flow. This is really wrong. If you follow this model, there is a large capacity for water to be transported deeper into the profile. If a catchment dries out in the top layer, the catchment will keep on generating flow untill all the water is gone. 

What is right is the idea of channel expansion, which is still useful. 

## Dunne and Black (early 1970s): Variable source area concept
First mapped which part of the soil is saturated. There is a strong seasonal shift in saturated areas, they found, they found. If any rain falls directly on saturated area, will lead to rapid response. Strong dynamics in source area of a catchment. 

Important for one of the models we will use in the practicals

Variable source area concept developed by previous examples, in the same, humid climate. There is, however, some kind of relation to climate, topography and vegetation. 

If soil is dry, Hortonian overland flow still can hold. If humid climate and dense vegetation, variable source area concept holds. 

## Role of topographic convergence
Saturation develops often in local topographic convergence areas, where subsurface flow from a larger area is forced to the surface, leading to a strong increase in stormflow. 

## Groundwater ridging
There's other processes as well. Not all catchment needs to respond to rainfall for the response in the stream to be significant. Ratio rainfall to streamflow is often only 20%. Even if few percent of catchment area is saturated, can still be significant.

Groundwater ridging. Capillar fringe part of soil above the groundwater table where you have neegative pressure but still complete saturation. Depending on soil type, you have a few cm up to 20 cm of full saturation above groundwater table. 

Why is this relevant? Based on groundwater table, you might exaggerate the amount of water the soil can store. Any rainfall that can infiltrate will push this capillary fringe to above the surface, leading to overland flow. This is stronger in fine soils than in coarse soils. 

This can lead to a groundwater ridge. During precipitation, because of rise of groundwater close to the stream, you get a local bulge in groundwater table. Water will flow to the stream as well as away from the stream, due to a local maximum in water table. 

## Transmissivity feedback
Rapid response of the groundwater outflow to infiltration may be explained by a large increase in the hydraulic conductivity of the soil towards to ground surface. This is called the transmissivity feedback. Explains the large nonlinearity in nature.

Explained by less compaction, more organic matter, more biological activity. Leads to higher transmissivity in top layer. 

Once groundwater table is deeper down, conductivity is low, and response to rainfall is a lot slower. Thus very opposite to  variable source area conceptual model. 

Transmissivity feedback: the wetter the system, the higher the capacity to transport water. 

### Sidenote
Fill and spill hypothesis: first fill small holes in the bedrock before it can spill over to the next hole, leading to a time lag in response. Also likely explains limited response of subsurface flow to precipitation (only 20% of precipitation as runoff).


---
# Tracers in hydrology
Evidence we have seen so far only looks at water levels, runoff, timing of flows, amount of water. But there is more info we can use. Different concentrations, transport of chemicals, etc. If you want to know more about flow routes, you should look at characteristics of the water.

Knowledge of flow routes, residence times essentyial for model conceptualisation and validation

Use of tracers: low background concentration characteristic, detectable in low concentrations, not subject to sorption, fractionation, colatisation or other chemical reactions. 

Tracers can be natural or artificial.

Types of tracers: chemical, isotopes, dna, diatoms (groups of algae)

Most prominent tracers: geochemical tracers: silica, chloride, calcium. Depending on where you are, different tracers are relevant. 
- Silica: useful for residence times
- Chloride: useful close to the coast

## Paper for today: Kirchner (2006)
Look at response of flow to rainfall using chloride as a tracer. 

Result: higher rainfall means higher streamflow (makes sense)

However, chloride concentration is quite variable. Depending on type of rainfall, chloride concentration varies. If you look at chloride concentration in the stream, the chloride concentration is almost constant. Thus, by looking at concentrations, you can falsify some of the theories we have been talking about. This is not compatible with observation of Horton. 

Catchment acts as a big buffer, smooths out the concentration of chloride. 

There is some seasonality, and some response to certain high precipitation events, but otherwise chloride concentration almost constant. This can also be if the water is really well mixed and has a long residence time. 

Also did some explorations on which concepts of travel times match his observations. Advection-dispersion, ganna distribution, exponential distribution. Only the gamma distribution is able to reasonable describe the chloride concentration.

Travel time is therefore very nonlinear with a very thick tail. Part of water resides very short time, and then a very flat tail. Most of the water ending up in the stream has been there for a long time.

Catchment is not just a box with rainfall water. There is a long time lag between the reaction of surface water to precipitation. 

This is also why we still have a nitrate crisis here in the Netherlands, because it takes a long time for all the nitrate to wash away. 

## The double paradox of stream cgemistry (Kirchner, 2006)
Rapid mobilisation of old water. In many small catchments, streamflow responds promptly to rainfall inputs, but fluctuations in tracers are often strongly damped. This indicates that storm flow in these catchments is mostly 'old' water

2nd paradox: variable chemical composition in water.

Explanation (in part): concentrations vary in depth in general, due to difference in transmissivity between deep and shallow groundwater. Explains different chemical composition. 

## Simple mixing models
Differentiate new (with tracer) from old (without tracer)  water, compose their time series cumulatively as well as individually, and find out what the ratio new-old water is in hydrograph

Assumptions: characteristic concentrations for different sources and concentrations constant in space and time (for storm duration).

More complex: End-Member Mixing Analysis (EMMA): extends the simple mixing model by looking at precipitation, soil water and ground water. Now do the same trick for the system, as long as you have 2 tracers. If the combination of these tracers is different in the system, you can decompose the hydrograph again.

Nowadays, because of new technologies, we can study this for high resolutions in time and for many tracers at once. 

## Isotopes
Advantage over tracers: An isotope is not an addition to the water, but the water itself. It is a property of the water. This is useful in hydrology because you get fractionation. One isotope might be slightly easier to evaporate. The ratio between these isotopes can explain where the water comes from. 

You always look at deviation from the global meteoric water line. 