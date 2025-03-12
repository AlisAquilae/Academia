---
fileClass: Base, Summaries
title: 
Parents: ["[[Catchment and Climate Hydrology]]"]
Draft: 
Status: In Progress
Related Notes: ["[[Albertson & Kiely (2001)-On the structure of soil moisture time series]]", "[[CCH Lecture 2]]"]
Related Terminology: 
Related Courses: ["[[Catchment and Climate Hydrology]]"]
---
# Introduction
The temporal structure of soil moisture is a key feature of hydrologic interactions with climate. The effects are bi-directional: vegetation and soils, through their controls on transpiration and drainage, leave a distinct imprint on the temporal structure of soil moisture; and, over long time periods, the governing role that soil moisture plays on the partitioning of energy at the land surface manifests itself as a regional regulation on climate. Soil moisture and its evaporation are therefore integral in predicting the water and energy fluxes across the land surface. 

---
# Evapotranspiration

Although evapotranspiration is not the first thing we think of when setting up a water balance, it is highly important. In many catchments, more water leaves the catchment via evaporation than via streamflow. Streamflow is often storage-driven, leading to faster recession rates in summer than in winter. Meanwhile, evaporation continues year-round. It therefore accounts for many long-term changes in runoff characteristics. 

When we are talking about evapotranspiration (ET), it is necessary to differentiate between [[Actual Evapotranspiration]] (AET) and [[Potential Evapotranspiration]] (PET). PET is a representation of the environmental demand for evapotranspiration. It represents the ET for a standardised soil, given standardised conditions, and, importantly, given ample water availability. Actual ET is equal to PET if, in reality, enough water is available. Where this is not the case, AET differs from PET. It is very difficult to calculate AET, which is why we often work with PET instead. 

>[!Info]
>There are different ways to estimate PET:
>- Penman-Monteith: Has the strongest theoretical basis, but requires the most observations as inputs, and is therefore difficult to implement
>- Priestley-Tailor: Is a significantly easier yet robust method, but has as a downside that it does not include [[Advection]].
>- Makkink: Similarly robust, but looks at global radiation rather than net radiation
>- Thornthwaithe. Easy and little input data needed, but does not consider the energy balance (it is only a function of temperature)

>[!Info]
>Most transport of water vapour occurs via turbulent exchange. This is often approximated using the [[Eddy Covariance]], which states that, under certain assumptions, the vertical flux of moisture is proportional to the covariance between the vertical typical wind speed and the variable of interest (temperature for $H$ and $q$ for ET). Although this is our best-approximation at present, the eddy covariance has to be measured at the time-scale of seconds. This makes it very difficult to find patterns in evapotranspiration which, we know, is a process that differs in the order of months to years.


---
# Dynamics between soil moisture and evapotranspiration
We previously saw that soil moisture evaporation is an important process for the water and energy balances. [[Soil Moisture]] refers to the water present in the [[Unsaturated Zone]] of the soil, caught between soil particles. When all pores are filled with water, the soil becomes 'saturated', and therefore part of the [[Saturated Zone]]. Even in the driest conditions, however, there is always some soil moisture present. This is caused by capillary forces, gluing the water to the soil particles. 

>[!Important]
>In saturated conditions, the amount of water present in the soil is equal to the [[Porosity]]. In practice, porosity is usually about 50%

One important metric for the amount of water present in a soil is the [[Volumetric Water Content]] ($\theta$). This refers to the percentage of water in the total volume of the soil (i.e. including the soil particles). Logically, therefore, the volumetric water content can never exceed the porosity.

>[!Info]
>Similar to evapotranspiration, we have various tools to find the amount of soil moisture present in a soil:
>- Gravimeter: Take a small ring sample, weigh it, evaporate the water in an oven, and weigh the sample again. The difference in weight is the amount of water that was present. This is a cheap and simple method, but samples cannot be repeatedly analysed
>- TDR: Accurate, but very expensive. 
>- Neutron probe: Commonly used in the past. Accurate but slightly radioactive
>- Cosmic ray: Suffers from interpretation issues
>- GRACE: Satelite-based observations. Very coarse spatial resolution and low frequency, but very accurate
>- Passive microwave. Highly accurate, but can only investigate a small top-section of the soil
>- Active microwave: Even more accurate than passive microwave, but also even more shallow

Whereas the upwards movement of soil water occurs mainly due to plant uptake, water is pulled down by gravity. Water wants to flow down, but is bound to soil particles by capillary forces. If the soil is wetter, gravity is stronger, and there is more downwards movement of soil water. If the soil is drier, the capillary forces are stronger, and water cannot leave the soil. The flux of the gravity-induced downward movement of water is there fore highly dependent on the amount of water already in the soil. This flux is equal to the [[Permeability|Hydraulic Conductivity]]. 

>[!Note]
>Different soils have different grain sized. Both the hydraulic conductivity and the grain size strongly influence model parameters

After all excess water has been drained away, and only the water that is bound to soil particles by capillary forces remains, the remaining water in the soil is called the [[Field Capacity]] ($\theta_{\text{FC}}$). This serves as a practical  measure for the water-holding capacity of a field of soil. 

>[!Important]
>That is not to say that the level of water cannot decrease below field capacity. Rather, this is the maximum level gravity can decrease the water level to. Other processes, like evaporation, can decrease the amount of water further. 


---
# Importance of soil moisture for evapotranspiration
The relation between the volumetric water content ($\theta$) and unsaturated conductivity $k$ can de described by a power-law:

$$
k(\theta) = k_{\text{sat}} \left(\theta / \theta_{\text{sat}} \right)^{2b+3}
$$

where $k_{\text{sat}}$, $\theta_{\text{sat}}$ and $b$ are soil hydraulic properties which differ for every soil type. This is used by [[Albertson & Kiely (2001)-On the structure of soil moisture time series|Albertson & Kiely (2011)]] as well, though in a slightly different form:

$$
q_{rz} = K(\theta_{rz}) = K_{\text{sat}}\left( \frac{\theta_{rz}}{\theta_{rz,max}} \right)^{2b+3}
$$

where $q_{rz}$ is the unit head gradient [[Darcy's Law]] 