---
fileClass: Base, Concepts
title: 
Parents: ["[[Water 1 Summary Groundwater]]", "[[Elevation Head]]", "[[Pressure Head]]"]
Draft: 
Status: Done
aliases: 
Related Notes: ["[[Water 1 Summary Groundwater]]"]
Related Terminology: ["[[Pressure Head]]", "[[Elevation Head]]"]
Related Courses: ["[[Water 1]]"]
---
Groundwater droplets experience forces that may push them in a certain direction. The forces originate from differences in energy between different locations. In hydrology and hydraulics, these energies are usually measured as the length of a water column that would lead to the same [[Potentiële Energie|Potential Energy]]. The total energy of a droplet is called the **Potential** and the corresponding water column height is called the **Hydraulic Head** ($H$ in m). The hydraulic head consists of 2 components: the [[Elevation Head]] ($z$ in m) and the [[Pressure Head]] ($h$ in m): 

$$
H=z+h
$$


![[Pasted image 20240222214335.jpg]]

Water flows from the reservoir with the highest water level (and therefore the highest hydraulic head $H$) to the reservoir with the lowest water level. As the water level difference becomes smaller, the flow velocity will decrease. The same happens with groundwater flow. Water flows from the ground towards a river when the groundwater level is higher than the river water level ($H$ is higher in the ground). The groundwater will flow towards and into the river, so the groundwater level will slowly drop unless this water is compensated by water percolating from the soil surface (originating from precipitation. During prolonged dry periods, the groundwater levels (and $H$) will keep decreasing, and the flow towards the river will decrease or even reverse. 

![[Pasted image 20240222214515.jpg]]

>[!Question]
>2 piezometers are placed with their filters in 2 aquifers divided by an aquitard. The filter of the piezometer in the top aquifer is located at 3 m a.m.s.l and the water level in the tube is at 4 m a.m.s.l.. The filter of the piezometer in the bottom aquifer is located at 3 m below a.m.s.l. and the water level in the tube is at 5 m a.m.s.l.. Give the flow direction (upward or downward) and compute the pressure head at both aquifers
>
>>[!Check]- Answer
>>
>>The hydraulic head at the filter in the bottom aquifer is higher (5m) than in the top aquifer (4m), indicating upward flow (seepage)
>>
>>$H=h+z$, so $h=H-z$. 
>>
>>For the top piezometer: $h=4-3=1$ m. For the bottom piezometer: $h=5 --3 = 8$ m. 
>>
>>Hence, the pressure in the aquifer near the filter of the bottom piezometer is higher, which is both caused by the pressure of the water column on top and by the pressure resulting from the seepage flux.

Spatial variations in hydraulic head are visualised using [[Equipotential Lines]]