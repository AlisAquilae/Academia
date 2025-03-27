---
fileClass: Base, Lecture Notes
title: 
Parents: ["[[Catchment and Climate Hydrology]]"]
Draft: 
Status: Done
Related Notes: 
Related Terminology: 
Related Courses: 
---
# Intro
Today is about lowland hydrology.
- Differences between mountainous catchments and lowlands catchments: differences in landscape, hydrological processes and consequences for rainfall-runoff modelling
- Effect of shallow groundwater on land-surface interactions and rainfall-runoff processes
- Hydrological modelling in lowland catchments

---
# Introducing lowland catchments
There is not one definition, but the areas where hydrological processes are influenced by shallow groundwater is commonly used as definition

Distinction between freely-draining and polders

Freely draining
- There is some slope
- Drained by brooks
- Brooks have natural origin

Polder
- Flat
- Water discharged by pumps
- Man-made channels

This is not so black and white: there are freely-draining areas with highly modified brooks. Similarly polders have microtopography

Difference between the two can also be observed from the drainage network. 

Polders can be seen as catchments to, as there is hierarchy between channels, and an outlet at the pumping station.

There are also similarities
- Limited slope (enen in freely draining areas)
- Often located in river deltas
- Shallow groundwater
- Agriculturally productive (often clay layers with much organic content)
- Attractive for settlement

This all leads to challenges
- Floods
- Climate change
- Land use change
- Water quality deterioration
- Land subsidence (especially in peaty areas)
- Increasing demand for information (want to know what water challenges to expect)

For all this we need tools. Commonly used:
- Surface-water based: MIKE-SHE, HEC-RAS, SOBEK
- Soil-column based: HYDRUS, SWAP
- Groundwater-based: MODFLOW
- Combinations: SHE, HydroGeosphere, SIMGRO, NHI

These are all "physically-based". Based on what you measure in reality. There are also other model types: empirical models (input, output, try to match them in some way, black-box models, machine-learning models) and conceptual (parametric) models (somewhere in-between the two)


Advantages of parametric models
- Fewer measurements
- Smaller risk of overparameterisation than physically-based models
- More practical and faster

Disadvantages of parametric models
- Physically-based closer to reality
- More difficult to apply to different locations. 
- Uncertainty is (relatively) higher (though physically-based models is still uncertain)
- Needs more calibration

Model choice depends on the aim of the study, catchment characteristics and data availability

Examples of parametric models
- HBV
- PDM
- SWAT
- Sacramento model

These have in common that they have "reservoirs", and fluxes from one reservoir to the other

Until 2013, complex, spatially distributed models for lowland catchments, or simple, parametric models for sloping catchments. To fill this gap: WALRUS Model
# Groundwater-unsaturated zone coupling




# Wetness-dependent routing