---
fileClass: Base, Concepts
title: 
Parents: ["[[Discharge]]"]
Draft: 
Status: Done
aliases: 
Related Notes: ["[[Water 1 Summary Catchments]]"]
Related Terminology: ["[[Discharge]]"]
Related Courses: ["[[Water 1]]"]
---
When the water flow in an open channel does not change in time ([[Stationary Flow]] or Steady Flow) or in space ([[Uniform Flow]]), it is possible to calculate the average velocity with the empirical **Chézy Equation**: 

$$
\bar{v}=C\sqrt{S_0 \;R_h}
$$

Where:
- $C$ is the Chézy Coefficient (m$^{1/2}$ s$^{-1}$)
- $R_h$ is the hydraulic radius (m)
- $S_0$ is the slope of the channel bed (dimensionless)

The **Chézy Coefficient** is a measure for the conductivity (the opposite of roughness) of the channel bed and banks. Roughness is caused by the sediment particles (larger particles cause more friction) on the bed, rocks, vegetation and bedforms such as underwater dunes. A high value for $C$ indicates that the river bottom and banks are smooth, which results in almost no slowing down for the flow velocity

>[!Info]
>Normally, values for the Chézy coefficient lie between 10 m$^{1/2}$ s$^{-1}$ (for small and rough channels) and 75 m$^{1/2}$ s$^{-1}$ (for large and smooth channels)

The Chézy coefficient cannot be measured, but is usually estimated from look-up tables (with large uncertainty) or computed when all other terms in equation 1.5 are measured

The **slope** is the decrease in the height of the channel bed per meter in the alongstream direction. For stationary uniform flow, this is the same as the slope of the [[Groundwater Table|Water Table]]. The unit of $S_0$ is m/m (so dimensionless). Since $S_0$ is so small, it is often given in percents or permille.

>[!Note]
>Note, however, that the Chézy equation requires the slope in a fraction, so 0.001 instead of 0.1%

The **hydraulic radius** ($R_h$) is the ratio between the cross-sectional area ($A$) and the **wetted perimeter** $P$ (in m): $$
R_h = \frac{A}{P}
$$The wetted perimeter is the part of the circumference of the cross-section which is in contact with the bed and banks. The water surface is not part of the wetted perimeter because the water does not encounter friction with the air.