---
fileClass: Base, Literature Notes
title: 
Parents: 
Draft: 
Status: 
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# Abstract
Water fluxes in catchments are controlled by physical processes and material properties that are complex, heterogeneous, and poorly characterized by direct measurement. As a result, parsimonious theories of catchment hydrology remain elusive. Here I describe how one class of catchments (those in which discharge is determined by the volume of water in storage) can be characterized as simple first-order nonlinear dynamical systems, and I show that the form of their governing equations can be inferred directly from measurements of streamflow fluctuations. I illustrate this approach using data from the headwaters of the Severn and Wye rivers at Plynlimon in mid-Wales. This approach leads to quantitative estimates of catchment dynamic storage, recession time scales, and sensitivity to antecedent moisture, suggesting that it is useful for catchment characterization. It also yields a first-order nonlinear differential equation that can be used to directly simulate the streamflow hydrograph from precipitation and evapotranspiration time series. This single-equation rainfall-runoff model predicts streamflow at Plynlimon as accurately as other models that are much more highly parameterized. It can also be analytically inverted; thus, it can be used to “do hydrology backward,” that is, to infer time series of whole-catchment precipitation directly from fluctuations in streamflow. At Plynlimon, precipitation rates inferred from streamflow fluctuations agree with rain gauge measurements as closely as two rain gauges in each catchment agree with each other. These inferred precipitation rates are not calibrated to precipitation measurements in any way, making them a strong test of the underlying theory. The same approach can be used to estimate whole-catchment evapotranspiration rates during rainless periods. At Plynlimon, evapotranspiration rates inferred from streamflow fluctuations exhibit seasonal and diurnal cycles that agree semiquantitatively with Penman-Monteith estimates. Thus, streamflow hydrographs may be useful for reconstructing precipitation and evapotranspiration records where direct measurements are unavailable, unreliable, or unrepresentative at the scale of the landscape.

---
# 1. Introduction
The spatial heterogeneity and process complexity of subsurface flow imply that any feasible hydrological model will necessarily involve substantial simplifications and generalizations. The essential question for hydrologists is which simplifications and generalizations are the right ones. 

Physically based rainfall-runoff models attempt to link catchment behavior with measurable properties of the landscape, but many properties controlling subsurface flow are only measurable at scales that are many orders of magnitude smaller than the catchment itself. Thus, although it seems obvious that catchment models should be “physically based,” it seems less obvious how those models should be based on physics. It is currently unclear whether this upscaling premise is correct, or whether the effective large-scale governing equations for these heterogeneous systems are different in form, not just different in the parameters, from the equations that describe the small-scale physics.

This observation raises the question of how we can identify the right constitutive equations to describe the macroscopic behavior of these complex heterogeneous systems.

Here I show that, if the catchment can be represented by a single storage element in which discharge is a function of storage alone, the form of this storage-discharge function can be estimated from analysis of streamflow fluctuations. In contrast to conventional methods of recession analysis, this approach does not specify the functional form of the storage-discharge relationship a priori, instead determining it directly from data. Using this approach, one can construct a first-order nonlinear differential equation linking precipitation, evapotranspiration, and discharge, with no need to account explicitly for changes in storage; these are instead inferred from the resulting changes in discharge. This single equation allows one to predict streamflow hydrographs from precipitation and evapotranspiration time series. It can also be inverted, allowing one to use streamflow fluctuations to infer precipitation and evapotranspiration rates at whole-catchment scale.

---
# 2. Field site and data (==Skipped==)


---
# 3. Catchment hydrology as a first-order dynamical system
This analysis begins, as most catchment-scale hydrological models do, with the conservation-of-mass equation

$$
\frac{\mathrm{d}S}{\mathrm{d}t} = P - E - Q \tag{1}
$$

where
- $S$ is the volume of water stored in the catchment, measured in units of depth (e.g. mm of water)
- $P$ is the rate of precipitation in units of depth per time (e.g. mm of water per hour)
- $E$ is the rate of [[Evapotranspiration]] in units of depth per time (e.g. mm of water per hour)
- $Q$ is the [[Discharge]] in units of depth per time (e.g. mm of water per hour)

$P$, $Q$, $E$ and $S$ are understood to be functions of time, and are understood to be averaged over the whole catchment.

Application of Equation 1 should take account of how its individual terms are measured, and the spatial scales over which such measurements are applicable. Of the four terms in Equation 1, only discharge is an aggregated measurement for the entire catchment. Therefore the analysis presented here explores what one can learn about catchment processes from fluctuations in streamflow, without assuming that measurements of precipitation or evapotranspiration are spatially representative. The analysis also makes no use of direct measurements of changes in storage, because they are often unavailable.

This analysis makes the fundamental assumption that this discharge in the stream, $Q$, depends solely on the amount of water stored in the catchment, $S$. That is, the analysis assumer that there is some storage-discharge function $f