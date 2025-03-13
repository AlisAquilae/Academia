---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Water Quantity and Quality]]"]
Draft: 
Status: Done
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Water Quantity and Quality]]"]
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
For any arbitrary land surface element or area, the water (mass) balance is complicated to solve because the fluxes $Q_{\text{in}}$ and $Q_{\text{out}}$ are unknown and cannot easily be observed. Therefore, hydrologists often study the water balance of land surface elements for which the fluxes $Q_{\text{in}}$ and $Q_{\text{out}}$ can be measured: catchments. A [[Catchment]] is an area where all the [[Runoff]] water converges to a single point (the [[Debouchment|Outlet]]) under the influence of gravity. When no groundwater flow over the catchment boundaries occurs, the flow at the catchment outlet is the only lateral flow. With precipitation $P$ and [[Actual Evapotranspiration|(actual) evapotranspiration]] $ET_{\text{act}}$ as the only fluxes at the land surface, the simplified catchment water balance reads:

$$
P - ET_{\text{act}} - Q_{\text{out}} = \frac{\Delta S}{\Delta t}
$$


>[!Note]
>In reality, when all water balance elements in this equation are measured independently, the water balance often does not close. This is usually caused by measurement errors or neglected water balance terms. Reducing the non-closure of water balance residual still poses a challenge for hydrologists. 


## 1.1.2 Water balance elements
The fluxes that determine the water balance of most catchments are precipitation, evapotranspiration, and runoff (streamflow). These fluxes are fundamentally different for several reasons:
- Precipitation typically occurs in (relatively) short events. The occurrence of precipitation is linked with the large scale synoptic weather situation. The intensity can vary over a wide range, but at the catchment scale, instantaneous precipitation intensities are typically much larger than intensities of evapotranspiration or runoff
- Evapotranspiration is not only strongly related to the availability of water, but also to that of energy. Therefore the evapotranspiration intensity closely follows the solar cycle, resulting in strong diurnal and seasonal cycles. Spatial variability in land use and soil moisture can cause large variations in evapotranspiration rates. 
- Runoff or discharge from a catchment is strongly controlled by the amount of subsurface water storage in the catchment. Directly after a precipitation event, water can also be transported to the outlet over the land surface or via macropores. An important difference between $Q$ and the other water balance terms ($P$, $ET_{\text{act}}$ and $\Delta S / \Delta t$) is that $Q$ is measured as an area-integrated value at the outlet (in L$^3$ T$^{-1}$), while $P$ and $P$, $ET_{\text{act}}$ and $\Delta S / \Delta t$ are usually obtained from point-measurements (in L T$^{-1}$)
- Storage change can be seen as the effect of the other water balance terms. Because the time scales and timing of these are different, the amount of water stored in the catchment changes. However, storage itself also affects $ET_{\text{act}}$ (available soil moisture) and $Q$ (groundwater as driving force for subsurface runoff). This illustrates that the water balance fluxes influence each other and form a complex system with feedback cycles. 

In the next chapters we will deal with each of these fluxes in more detail, from precipitation (chapter 2), to evapotranspiration (chapter 3), and finally runoff (chapter 4). In chapter 5 these aspects will come together when we will deal with rainfall-runoff modeling.

