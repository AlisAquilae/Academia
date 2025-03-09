---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Catchment and Climate Hydrology]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Catchment and Climate Hydrology]]"]
---
# Abstract
The purpose of this paper is to describe hydrology to a scientifically-literate audience of non-hydrologists and to highlight its evolution over the last 30 years from a field focused on engineering problems at the scale of the small watershed to one dealing with global-scale issues which demand a geophysical perspective. The Ralph M. Parsons Laboratory at MIT has been one of the leaders of this evolution, and the illustrations presented of things that (some) hydrologists do are drawn primarily from recent work done there. These include: introduction of the concept of _hydrologic scale_ along with its definition, significance and estimation; the sub-grid scale parametrization of precipitation and vegetation in atmospheric GCMs; precipitation recycling; and completion of the land surface-atmosphere feedback loop for moisture at climatic time scales.

---
# 1. Definition and historical perspective
Formally, hydrology deals with the occurrence, distribution, circulation, and properties of water. The field grew up out of concern for water as both a necessity of life and a possible hazard; its central application is forecasting water availability and hazardousness. 

As we perceive it today, hydrology is a geoscience whose scientific basis lies in the physics, chemistry, and biology of what we call the ‘hydrologic cycle’. The hydrologic cycle, illustrated in Fig. 3, is a global geophysical process that circulates a fairly constant stock of water among the various components of the earth system. It is an endless sequence of evaporation (from both land and ocean) vapor transport in the atmosphere, condensation, precipitation, and liquid flow on and within the earth’s crust which serves, because of phase changes along the way, to redistribute heat as well as water mass on human time scales both locally and globally. Figure 4 shows the cycle in the more clinical form that is useful in discussing fundamental principles.

![[Pasted image 20250309143201.png]]
![[Pasted image 20250309143214.png]]

Imagine the cartoon of Fig. 4 as a vertical column of atmosphere and soil; it is a one-dimensional representation of the continental hydrologic system. Water enters and leaves the column horizontally, as atmospheric moisture flux (with net inflow, $Q$) and as land surface and groundwater runoff, $R_s$ and $R_g$. respectively (with the net outflow $R$). Water is exchanged vertically between the atmosphere and land surface by the fluxes: precipitation, $P$, and [[Evapotranspiration]], $E$, the latter consisting of evaporation from bare soil or other solid and water surfaces, plus transpiration from the stomata of vegetation. The moisture contents of the atmosphere and of the soil are indicated by the respective state variables, $W$ and $S$. Dividing by the column along the horizontal dashed lines, we can isolate the land surface and for it write a statement of conservation of water mass that simply requires the difference between inflow and outflow in a given time interval, $\Delta t$, to produce an equal change in internal moisture storage. That is, 
$$
\text{precipitation} - \text{evapotranspiration} - \text{runoff} = \text{storage change}
$$

or mathematically,

$$
P-E-R = \Delta S \tag{1}
$$

Equation 1 is called the [[Water Balance]] equation. It is one of the two fundamental equations of hydrology, the other being the similarly derived energy balance equation, and is the only equation (albeit in various guises) that is used in this paper. These two governing equations are coupled strongly through the appearance in each of the evapotranspiration or its [[Latent Heat Flux|Latent heat]] equivalent. 

Until the mid-l 900s hydrology was largely an empirical adjunct of hydraulic and agricultural engineering and was dominated by the practical need to forecast the local response of the land surface (i.e. flood, drought, crop productivity) to the local atmospheric forcing (i.e. precipitation and net radiation). In these activities the land surface was decoupled from the atmosphere along the horizontal dashed lines of Fig. 4, implying $P$ independent of $E$. This was done intuitively because interest lay in small geographic scales, although no other way was known; the terrestrial part of the system was seen as a simple cascade with cause ($P$) leading directly to effect ($R$).