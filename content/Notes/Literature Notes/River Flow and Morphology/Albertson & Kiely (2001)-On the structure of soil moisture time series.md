---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Catchment and Climate Hydrology]]"]
Draft: 
Status: Done
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# Abstract
Root-zone soil moisture is addressed as a key variable controlling surface water and energy balances. Particular focus is applied to the soil moisture controls on wet-end drainage and dry-end transpiration, and the integrated effects of these controls on the structure of soil moisture time series. Analysis is centered on data collected during a pair of field experiments, where a site in Virginia (USA) provides evidence of dynamics under dry conditions and a site in Cork (Ireland) captures dynamics under wet conditions. It is demonstrated that drainage processes (controlled by the saturated hydraulic conductivity) determine the magnitude of soil moisture at the start of the drying process and hence affect uniformly the entire distribution of soil moisture, from wet to dry. Therefore, stationary bias between predicted and measured soil moisture can be evidence of a bias in the saturated conductivity. In contrast to this, the dry-end soil controls on transpiration affect predominantly the dry-end of the soil moisture distribution, as subsequent storms act to reset the system and remove the memory of the dry state. Hence, analysis of departure between predicted and measured soil moisture that is local to the dry-end can guide estimation of the soil moisture level at which transpiration becomes limited by water availability. The temporal statistics of soil moisture are shown to exhibit threshold response to the specification of saturated conductivity in land surface models. Finally, we demonstrate the relative influences of saturated conductivity and precipitation intensity on the structural features of the root-zone soil moisture distribution.

---
# Introduction
The temporal structure of soil moisture is a key feature of hydrologic interactions with climate. The effects are bi-directional: vegetation and soils, through their controls on transpiration and drainage, leave a distinct imprint on the temporal structure of soil moisture; and, over long time periods, the governing role that soil moisture plays on the partitioning of energy at the land surface manifests itself as a regional regulation on climate.

The need to predict the evolution of land surface moisture and temperature states through the course of an atmospheric forecasting model run led to the advent of land surface models (LSMs), also referred to as soil–vegetation–atmosphere-transfer (SVAT) models. The models have enjoyed extensive application as tools in operational meteorological forecasting models, operational hydrological forecasting models, and studies of the interaction between land surfaces and atmospheric properties.

Interesting aspects of these emerging uses relate to increasing spatial coverage and greater temporal range. These aspects demand that a model be capable of handling very different hydrologic regimes, both spatially, as found in a large forecasting model domain that might include both arid and humid regions, and temporally, as long integrations demand that runoff and drainage processes be treated robustly, such that long-term mass balances are satisfied. Here we find several issues
- Early LSM structures did not universally include drainage processes. This was not an immediate problem, perhaps, for several day weather forecasts, but it is clearly unacceptable for long time integrations
- Furthermore, there is a gap between the necessary distributed applications using largely uncertain parameter sets and validation studies based on a single, heavily instrumented site.
- The assessments of model performance have yielded mixed results, even at well-instrumented sites. 

There does appear to be reason for hope for success through focused attention on key processes and perhaps a simplification rather than a further complication of model structure.

>[!Important]
>Hence, we can conclude that: (i) accurate prediction of soil moisture time series is necessary to predict water and energy fluxes across the land surface, (ii) the root-zone soil moisture is most critical over vegetated regions, (iii) the dominant sources of errors in predicting time series of soil moisture are dry-end controls on evapotranspiration and wet-end controls on drainage, and (iv) there is need for approaches to identify parameters describing these functional controls for distributed areas with minimal field data.


We seek here to demonstrate the unique impacts of these key processes, drainage and transpiration, on structural features of root-zone soil moisture time series. By understanding the connection between each process and the structural features that it affects, we explore means to quantify the functional controls (parameters) on dry-end transpiration and wet-end drainage. We accomplish this using experimental field data analyzed in the context of a simple and general model structure. This provides isolation and study of impacts from individual processes. In particular, we explore soil moisture time series from field measurements at a relatively dry North American site and from a relatively wet European site.

---
# Objectives
The general objectives of this paper are: (i) to illustrate the impact of transpiration and drainage controls on the structure of soil moisture time series, and (ii) to demonstrate, from a joint comparative analysis of measured and modeled soil moisture time series, a framework for identifying the functional control of soil moisture status on evapotranspiration and drainage loses.


---
# Conclusions
Much of the disparity in water and energy balance calculations across land surface models (or SVAT models) have been shown to be due to differences among models in their assumed relationships relating drainage to soil moisture and relating transpiration to soil moisture. Through the analysis of soil moisture data sets from two field experiments and the use of a simple model of root-zone soil moisture evolution, we demonstrated distinctly different impacts to the structure of soil moisture from drainage than from water-limitation on transpiration.

From analysis of a data set collected under relatively wet conditions (Cork, Ireland) we demonstrated that a bias in the estimated saturated conductivity induced a stationary bias in the predicted soil moisture time series. We conclude that a relatively stationary bias in predicted soil moisture time series (compared to measured values) can be considered evidence of a bias in the assumed value of $K_{\text{sat}}$. Consequently, minimisation of the bias provides a simple means of estimating $K_{\text{sat}}$.

The relatively dry hydrometeorological conditions of the Virginia data set provided an opportunity to explore water-stress effects on transpiration. We demonstrated that changes in the assumed moisture content at which transpiration becomes limiting affect predominantly the dry-end of the soil moisture distribution. This is due to the tendency of rainfall events to remove memory of the antecedent dry state. Hence, focused analysis of a localized dry-end departure of predicted soil moisture time series from the measured series provides the means to identify the moisture state at which transpiration becomes limiting. Biases in the limit value lead to changes in the variance of soil moisture, which will likely translate into artificially high or low temporal variances in latent and sensible heat exchanges to the atmosphere.