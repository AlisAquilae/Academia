---
fileClass: Base, Theories
title: 
Parents: ["[[Water 1 Summary Groundwater]]", "[[Discharge]]", "[[Hydraulic Head]]", "[[Two-Dimensional Discharge]]"]
Draft: 
Status: To Revisit
aliases: 
Authors: Darcy
Related Notes: ["[[Water 1 Summary Groundwater]]"]
Related Terminology: ["[[Flux Density]]", "[[Two-Dimensional Discharge]]", "[[Conductance]]", "[[Permeability]]"]
Related Courses: ["[[Water 1]]"]
---
**Darcy's Law** is arguably the most important equation for groundwater hydrology. It is used to calculate the amount of water flow through a soil, both in the horizontal and vertical direction and both through aquifers and aquitards. 

## Darcy's Law for Horizontal Flow

![[Pasted image 20240222221229.jpg]]

The figure above shows a confined aquifer with 4 piezometers. The [[Hydraulic Head]] is higher (longer water column) in the 2 piezometers at the back ($H_2$) than in the 2 piezometers at the front ($H_1$), so water will flow from the back to the front. There is no difference between the front left and front right piezometer (and between the back left and back right ones), so no water will flow from left to right or from right to left. 

The volume of water flowing out of the aquifer at the front in a certain amount of time is the [[Discharge]] (also called Groundwater Discharge, $Q$ in m$^3$/d). The discharge is used to determine how many m$^3$ are transported through an aquifer, for example to determine if there is enough water available for groundwater extraction.

The discharge is computed as 

$$
Q=KDB \, \frac{\Delta H}{L}
$$

Where
- $K$ is the [[Permeability|Conductivity]]
- $D$ is soil layer depth
- $B$ is soil layer width
- $H$ is the [[Hydraulic Head]]
- $L$ is the distance in the flow direction

The formula reads as follows. If the conductivity ($K$) is high, water can flow through the ground easily, leading to a higher discharge. A thicker aquifer ($D$)  or wider strip of land considered ($B$, perpendicular to the flow direction) leads to a larger cross-section through which water can flow, leading to a higher discharge. 

>[!Note]
>
>There are many cases where the conductivity and thickness of an aquifer are unknown, while the [[Conductance]] $kD$ could be measured. Therefore, the separate values for $k$ and $D$ are often replaced with the combination $kD$

>[!Question]
>
>The hydraulic heads measured in an aquifer are 125 and 123 m a.s.m.l., measured in piezometers that are 90 m apart. The conductance is 500 m$^2$/d. What is the discharge for a 40-m-wide part of the aquifer?
>
>>[!Check]- Answer
>>
>>$$
>>Q=kDB \, \frac{\Delta H}{\Delta x}=500 \times 40 \times \frac{125-123}{90}=444 \, \text{m}^3 \, \text{d}^{-1}  
>>$$
>>

Because $B \cdot D$ is the same as the area $A$, the formula can be rewritten as 

$$
Q = KA \frac{h_1 - h_1}{L}
$$

In addition, to indicate that water flows from high to low hydraulic head, we add a negative sign in front. Finally, we replace the fixed length with a length interval $\Delta L$. This leads to

$$
Q = -KA \frac{dh}{dl}
$$

Here, $\frac{\Delta H}{\Delta L}$ is the **Hydraulic Head Gradient** and gives the decrease in hydraulic head ($H$) over a certain distance in the flow direction ($L$). Since hydraulic head differences are the cause of flow, a large gradient leads to a large discharge.

The flow can also be considered per unit of width. Then the discharge $Q$ is divided by $B$ and reduced from three dimensions (discharge is in m$^3$/d) to two, and called the [[Two-Dimensional Discharge]]. This quantity is useful when the vertical cross-section is similar for a longer distance (for example flow under a long dam) or when the water balance approach is used to compute flow magnitude (this will be explained later). It is computed as 

$$
\frac{Q}{B} =-KD \, \frac{\Delta H}{\Delta L}
$$


>[!Question]
>Give the 2-dimensional discharge for the previous question
>
>>[!Check]- Answer
>>
>>$$
>>\frac{q}{B}=-KD \, \frac{\Delta H}{\Delta x} =500 \times \frac{125 - 123}{90}=11 \, \text{m}^2 \, \text{d}^{-1}
>>$$
>>

The flow can also be considered per unit of area. Then the discharge $Q$ is divided by both $B$ and $D$( in other words, $A$), thereby being reduced from 3 dimensions to 1, and is called the [[Flux Density]] ($q$, in m/d). The flux density is not the same as the flow velocity since part of the soil is occupied by soil particles (which will be explained later). The flux density is computed as 

$$
\frac{Q}{A}= q=-K \, \frac{\Delta H}{\Delta L}
$$


>[!Question]
>The aquifer of the previous questions is 12 m thick. Give the flux density
>
>>[!Check]- Answer
>>
>>$$
>>KD = K \cdot D \to K = \frac{KD}{D} = \frac{500}{12} = 42 \, \text{m} \, \text{d}^{-1} 
>>$$
>>
>>$$
>>q=-K \, \frac{\Delta H}{\Delta L} =42 \times \frac{125-123}{90}=0.93 \, \text{m} \, \text{d}^{-1} 
>>$$
>>

Now, combining the equation above with the formulas for [[Permeability|Conductivity]] (and its components), we get

$$
\frac{Q}{A} = q = -K \frac{dh}{dl} = \frac{Cd^2 \rho g}{\mu} \frac{dh}{dl}
$$

It is important to remember that the [[Flux Density]] is not the true, microscopic velocity of the water moving along winding flowpaths within the soil or rock. Instead, by dividing the specific discharge by the fraction of open space (in other words, [[Effective Porosity]], $n_e$) through which groundwater flows across a given sectional area, this provides an average measure of groundwater velocity such that 

$$
\frac{Q}{An_e} = \frac{q}{n_e} = \bar{v}
$$

where $\bar{v}$ is the average linear velocity


---
## 14.3 Darcy's Law for Vertical Flow
Darcy's Law can also be used for vertical flow, for example to compute infiltration or seepage flux densities through aquitards. The flux density through the aquitard can be computed with the equation for flux density. Since the hydraulic heads are measured above and below the aquitard, the distance $\Delta x$ equals the thickness of the layer $D$ in this case. Since aquitards are often characterised by their [[Resistance]] ($c$), Equations 10.2 and 14.3 are often combined to 

$$
v=\frac{\Delta H}{c}
$$

Vertical flux densities related to seepage or infiltration can easily be compared to other fluxes in mm/d, such as precipitation and evapotranspiration, and used in a water balance. The discharge and two-dimensional discharge are not used for vertical flow in practice, but they could be computed in a similar way.

>[!Question]
>There is vertical flow across a resistance layer with a resistance of 200 d. The water level in piezometer A is 105 cm below sea level. The water level in piezometer B is 120 cm below sea level. Derive the direction and compute the magnitude of this flux
>
>>[!Check]- Answer
>>
>>The hydraulic head is higher below the layer (-105 > -120), resulting in upward flow (seepage)
>>
>>$$
>>v=\frac{\Delta H}{c} = \frac{1.20 - 1.05}{200}=0.00075 \, \text{m} \, \text{d}^{-1} = 0.75 \, \text{mm} \, \text{d}^{-1}
>>$$
>>
