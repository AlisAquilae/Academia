---
fileClass: Base, Lecture Notes
title: 
Parents: ["[[River Flow and Morphology]]"]
Draft: 
Status: In Progress
Related Notes: 
Related Terminology: 
Related Courses: ["[[River Flow and Morphology]]"]
---
# Intro
previously:
- Mass and velocity balances. It is all about bookkeeping
- Mass: we also have to account for external fluxes. Increase in mass at the control-volume means rising water level
- Momentum: external force is usually $F$ (friction). Bed slope is main driving force of momentum

Friction slope can be seen as a measure resistance over a measure of length. For a uniform river, the friction slope is equal to the bed slope.

---
# Today
- Compare the dynamic flow regimes in various rivers
- Understand steady water surface profiles along the river. 


---
# Dimensionless form
Writing into a dimensionless form. We put typical numbers with an overline, such as mean discharge.  To get dimensionless form, divide the discharge by the mean discharge

$$
Q* = \frac{Q}{\overline{Q}}
$$

$Q*$ is always of the order 1. 

We do this for all the other variables as well. The difficult thing is what to choose for the typical values. 

- $\overline{Q} = Qe(\overline a)$: mean water depth, take the equilibrium discharge at this mean water depth as typical discharge
- $\overline{A} = A(\overline{a})$ area of mean water depth
- $\overline{Sf}$ = $S_o$
- 

>[!Warning]
>See book for typical values


We substitute the dimensionla variables for their non-dimensional counterparts.

friction slope is already dimensionless, so we do not need to remove its dimensions

The Froude number in front of the dimensionless momentum balance shows how the response of the flow relates to its drivers (i.e. the forces)

For large Froude numbers, the inertial terms dont matter much anymore. 

Also, if you want to downscale your flow problem, you have to make sure that the Froude number in the model and in reality is the same. Then the other terms will automatically be correct. 

---
# ???
Stationary equation (assuming constant horizontal flow) leads to classification of stationary profiles

First classification: So - Sf = 0: equilibrium or normal water level. Depth does not change. Here Chezy's law applies

So - Sf > 0: then the water level is larger than the normal depth
So - Sf < 0: then the water level is smaller than the normal depth


First calculate normal water level using Chezy or Manning, then compare with actual water level. 

- $1 - Fr^2 = 0$ or $FR = 1$, critical water depth (will generate problems)
- $1 - Fr^2 > 0$ or $Fr < 1$: subcritical flow, relatively deep, slow flow (stromend water)
- $1-Fr^2 < 0$ or $Fr > 1$: supercritical flow, relatively shallow, fast flow (schietend water)

If normal level higher than critical level, normal flow is subcritical. Mild slope. If normal level is equal or lower than critical level, normal flow is supercritical. Steep slope. 

We calculate normal depth, critical depth, and evaluate whether the fraction between the two is above or below 1.

All this results in 12 different water surface level profiles. 

>[!Warning]
>See slides!!!

