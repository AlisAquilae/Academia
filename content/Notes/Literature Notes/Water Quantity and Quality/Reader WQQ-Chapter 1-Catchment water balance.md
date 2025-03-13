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

>[!Warning]
>This is a very introductory chapter on the [[Water Balance]]. I only note down what is important to re-emphasise, or what is new

# 1.1 Water Balance

A central principle in hydrology is that of the conservation of mass. Many of the laws and equations in hydrology are based on it. The law of conservation of mass, also known as the principle of mass or matter conservation, states that in a closed system (in the sense of a completely isolated system), the mass will remain constant over time.

Most problems in hydrology deal with flow phenomena in open rather than closed systems. Such open systems are analysed from a small control volume (also called \representative elementary volume"): a small part of the system to which physical laws can be easily applied. This results in what is termed a volumetric, or volume-wise formulation of the mathematical model. For the control volume, it also holds that no mass (water) can be created or destroyed within the volume, so any imbalance between the water entering ($Q_{\text{in}}$) and leaving ($Q_{\text{out}}$) the volume over a given time period $\Delta t$ should equal the change in storage $\Delta S$ within the volume:

$$
Q_{\text{in}} \Delta t - Q_{\text{out}}\Delta t = \Delta S
$$

Rewriting the equation to intensities rather than amounts of water, this equation reads:

$$
Q_{\text{in}} - Q_{\text{out}} = \frac{\Delta S}{\Delta t}
$$

>[!Info]
>Because water has the convenient property of being (nearly) incompressible, which means that its density is constant and not a function of pressure or temperature (unlike air), the mass balance (e.g. in kg) can also be expressed in terms of volume (e.g. m$^3$)


## 1.1.1 Catchment water balance
For any arbitrary land surface element or area, the water (mass) balance is complicated to solve because the fluxes $Q_{\text{in}}$ and $Q_{\text{out}}$ are unknown and cannot easily be observed. Therefore, hydrologists often study the water balance of land surface elements for which the fluxes $Q_{\text{in}}$ and $Q_{\text{out}}$ can be measured: catchments. A [[Catchment]] is an area where all the [[Runoff]] water converges to a single point (the [[Debouchment|Outlet]]) under the influence of gravity. When no groundwater flow over the catchment boundaries occurs, the flow at the catchment outlet is the only lateral flow. With precipitation $P$ and [[Actual Evapotranspiration|(actual) evapotranspiration]] 