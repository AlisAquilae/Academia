---
fileClass: Base, Concepts
title: 
Parents: ["[[Water 1 Summary Catchments]]", "[[Streamflow]]"]
Draft: 
Status: To Revisit
aliases: 
Related Notes: ["[[Water 1 Summary Catchments]]"]
Related Terminology: ["[[Streamflow]]", "[[Chézy Equation]]"]
Related Courses: ["[[Water 1]]"]
---
The **Discharge** ($Q$ in m$^3$s$^{-1}$) of a river is the volume of water that passes the cross-sectional area ($A$ in m$^2$) of the river in a certain time period. The discharge is high when the cross-sectional area is large and when the flow velocity ($v$ in m$\cdot$s$^{-1}$) is high: 

$$
Q=\bar{v} \cdot A
$$


>[!Note]
>The line above the $v$ indicates that this is the average flow velocity of the cross-sectional area. Averaging is necessary because the flow velocity of water is lower closer to the banks, where friction slows the water down.

The average velocity of water flow in an open channel can be calculated empirically using the [[Chézy Equation]]. By filling the Chézy equation into the equation above, we get the following: 

$$
Q=\bar{v} \;\cdot A=C \; A \sqrt{S_0 \; R_h}
$$



>[!Question]
>What is the discharge of a brook of 4 m in width and a depth of 50 cmn, with a slope of 0.2% and a Chézy coefficient of 8 m$^{1/2}$ s$^{-1}$?
>
>>[!Check]- Answer
>>
>>Compute each of the terms in the Chézy equation
>>
>>The surface area of the cross-sectional area: $A= 4 \cdot 0.5 = 2$ m$^2$
>>
>>The wetted perimeter: $P=0.5 + 4 + 0.5 = 5$ m
>>
>>The hydraulic radius: $R = \frac{A}{P} - \frac{2}{5} = 0.4$ m
>>
>>The slope: $S_0 = \frac{0.2}{100} = 0.002$
>>
>>The flow velocity: $v=C\sqrt{S_0 \cdot R_h} = 8 \sqrt{0.002 \cdot 0.04} = 0.23$ m s$^{-1}$
>>
>>The discharge: $Q=v\cdot A=0.23\cdot 2=0.46$ m$^{1/2}$ s$^{-1}$

When we speak of 'discharge', we usually refer to the flow of surface water. Discharge is also often used interchangeably with the term [[Streamflow]]. However, discharge is also used in other parts, such as for groundwater. When it comes to groundwater discharge, this can be calculated using [[Darcy's Law]].