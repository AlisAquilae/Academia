---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Water 2]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 2024
Related Notes: 
Related Terminology: 
Related Courses: ["[[Water 2]]"]
---
### 1.1.1 Introduction
Extreme precipitation does not always lead to extreme discharges. Soil and vegetation work as a buffer which smooths and delays the resulting discharge of the often peaky precipitation behaviour. 

The way discharge responds to precipitation depends on many factors, such as
- **The precipitation event**: how long, how intense and where in the catchment does it rain or snow?
- **The temperature**: will snow melt or not?
- **The vegetation**: how much water will be stored on the leaves after a shower? ([[Interception]] storage)
- **The Evapotranspiration**: how much water will evaporate from soil and vegetation?
- **The land surface**: does water infiltrate easily?
- **The thickness of the Unsaturated Zone**: how much water can be stored there?
- **The hydrogeology of the catchment**: how easily does water flow through the soil?
- **The slope of the land surface**: how easily does water flow over the surface and through the shallow soil layers?
- **The river itself (slope, roughness and shape of the cross-section)**: how fast will water flow through the river?
- **Human influences**: are there many weirs, hydro-power reservoirs or drinking water extractions?

Many of these factors influence each other. The evapotranspiration, for example, depends on vegetation, temperature and soil moisture content. These relationships make it a very complex system. 

>[!Note]
>
>Besides, every catchment has different dominant factors.
>
>>[!Example]
>>
>>Small catchments (e.g. the Hupsel Brook) do not have large precipitation variations, while large catchments (e.g. the Ourthe) can have large spatial precipitation variations within the catchment. 
>
>These differences in catchment characteristics lead to different discharge hydrographs, which (of course) will have an effect on the discharge peaks and baseflow, together with the required discharge capacity of the river

### 1.1.2 Rainfall-Runoff Models
Due to the complexity of catchments, weather and climate, it is not easy to predict a river's discharge response to a rain shower. In order to have some sort of forecast, we can use a certain type of hydrological model: the [[Rainfall-Runoff Model]]. Rainfall-Runoff models are a simplified representation of hydrological processes within a catchment. 

#### 1.1.2.1 Types of Rainfall-Runoff Models
There are various rainfall-runoff models which all have specific advantages and disadvantages. Which model you use completely depends on the modelling goal, your catchment (characteristics) and the available data. 

We can subdivide rainfall-runoff models in three types:
- **Black box models** have almost no physical background. Hence, the relationship between precipitation and runoff is empirical. These kind of models seek a relationship between input (precipitation and often also evapotranspiration) and output (the discharge), without using any information about the catchment or other information about hydrological processes. Black box models are simple to use, but sometimes they are too simple to simulate all important processes in a catchment. Black box models are sometimes used for flood forecasting in small catchments. 
- **Parametric Models** or parameter-based models are based on simplified representationos of catchment processes with often reservoirs, fluxes (variables that flow, such as precipitation or drainage), states (variables that do not flow, such as water level) and paramaters (which determine the relationship between variables). The structure of the model is fixed and more complex than the structure of black box models. A more complex structure results in a simulation of more processes, but this also results in more parameters. Parameters are sometimes environmental characteristics of an area (such as the [[Permeability|Conductivity]] of a soil), but some parameters are also quite abstract (such as the relative share of the quick-discharge processes). We often subdivide large catchments into smaller catchments (e.g. due to spatial variation in precipitation or soil types). We often use parametric models to study the effect of climate change or to forecast river discharges in scarcely measured catchments


>[!missing]+
>
>Insert Fig. 2.4


- **Physically-based models** are based on detailed catchment characteristics and water flow equations, such as [[Darcy's Law]]. These models are often spatially distributed, which means that the catchment is subdivided in cells, which all have their own input series and parameter values. For all these cells, the water flow equations are calculated per time step. This type of model gives more information about the processes which take place at scales that are smaller than the catchment scale. The disadvantage, however, is that these models need much more input data and parameter values than black box and parametric models. 


>[!missing]
>
>Insert Fig. 2.5


>[!Info]
>In most models a division is made between quick and slow runoff processes. Quick runoff processes are surface runoff, [[Interflow]] and water flow through macropores such as animal burrows and clay fractures. The most important slow discharge process is groundwater flow, which flows much slower than surface runoff or river discharge due to friction with soil particles

---
### 1.1.3 Surface Runoff due to Infiltration Surplus
One of the most important quick runoff processes for a model (and in real life), is [[Surface Runoff]], also called [[Surface Runoff|Overland Flow]]. Surface runoff is formed when water is not able to infiltrate into the soil: it will stay on top of the soil surface (**ponding**) and subsequently it will run off over the surface due to the local topography (and slopes). 

It is difficult to quantify the exact instant and amount of surface runoff for a catchment. That is why we often use empirical relationships based on observations / experience to determine and quantify infiltration and ponding processes. 

#### 1.1.3.1 Infiltration according to Horton
Since infiltration depends on many factors, it is not possible to set up a conceptual model based on relatively simple relationships. Therefore, people have been searching for empirical relationships to describe the mathematical processes. 

Several semi-empirical methods were developed of which [[Horton's Equation]] is one. Horton (1933) described infiltration with the following equation: 

$$
f(t)=f_\infty \, + \, (f_0 \, - \, f_\infty) \cdot e^{- \alpha \, t} \tag{1.1}
$$


Where:
- $f$ is the infiltration capacity (in L / T)
- $t$ is time (T)
- $f_\infty$ is the infiltration capacity at $t \to \infty$ 
- $\alpha$ is an empirical coefficient which depends on the soil type and the vegetation (in $T^{-1}$)

Also $f_0$ and $f_\infty$ depend on the soil type, the soil moisture and vegetation.

>[!Question]
>
>We can describe the infiltration of rainwater on clayey and sandy soils in regions with shallow groundwater tables, with Horton's equation. The following parameter values are given:
>
>For sandy soils
>- $f_\infty = 40$ mm/h
>- $f_0 = 245$ mm/h
>- $\alpha= 7$ /h
>
>For clayey soils:
>- $f_\infty = 10$ mm/h
>- $f_0 = 40$ mm/h
>- $\alpha = 4$ /h
>  
>  If it rains for 40 minutes with a constant intensity of 20 mm/h, will there be any surface runoff at the clayey and/or sandy soil? If yes, when will it start?
>  
>  
>  >[!Check]- Answer
>  >
>  >Surface runoff starts when the infiltration capacity becomes lower than the precipitation intensity. The infiltration capacity at $t = \infty$ ($f_\infty$) for sand is 40 mm/h. Hence, the infiltration capacity will never become lower than the precipitation intensity (of 20 mm/h). There will not be any surface runoff on the sandy soil. 
>  >
>  >The infiltration capacity at $t = \infty$ for the clayey soil is 10 mm/h, which is less than the precipitation intensity. Surface runoff will take place here, if the rain shower duration is sufficiently long. We can calculate when the surface runoff will take place with Horton's Equation: 
>  >
>  >$$
>  >f(t)=f_\infty \, + \, (f_0 \, - \, f_\infty) \cdot e^{- \alpha \, t}
>  >$$
>  >
>  >$$
>  >20=10+(40-10)e^{-3t_p} 
>  >$$
>  >
>  >$$
>  >t_p = \frac{\ln(\frac{20-10}{40-10})}{-3} = 0.37 \, \text{hours} = 22 \, \text{min}
>  >$$
>  >
>  >So after 22 minutes, surface runoff will take place on the clayey soil
>  

#### 1.1.3.2 Exceedance of the Infiltration Capacity
When not all water can infiltrate in the soil after a rain shower or a snow-melt period due to an exceedance of the infiltration capacity, an infiltration surplus occurs, which leads to surface runoff. We call this effect the [[Hortonian Overland Flow|Principle of Horton]] or [[Hortonian Overland Flow]]

The effect of a rain shower with an intensity that exceeds the infiltration capacity is illustrated in the following figure

>[!missing]
>
>Insert Fig. 2.6

Assume that we are dealing with a rain shower of a constant intensity (e.g. 10 mm/h) which falls on a relatively dry soil. The initial soil moisture content is displayed in the soil moisture profile at time $t_0$. Since the soil is relatively dry at the start, all precipitation will be able to infiltrate. 

The infiltrating water changes the soil moisture profile and the soil moisture will increase faster near the soil surface than deeper in the soil profile (because the water does not infiltrate fast enough). With increasing duration of the rain shower, the infiltration capacity of the soil will decrease: water will infiltrate less easily in wet soils. The curve of the infiltration capacity of the soil as a function of time, will move towards the asymptote with an equilibrium value of $f_\infty$ (or $k_{\text{sat}}$).

If the saturated conductivity of the soil is smaller than the constant precipitation intensity, we will reach a point where the infiltration capacity becomes smaller than the precipitation intensity. We call this instant, at $t_p$, the [[Ponding Time]]. From this moment onwards, water will be stored on top of the surface and subsequently it will move as surface runoff. 

Summarising the requirements to get Hortonian overland flow due to an infniltration surplus are:
- The saturated conductivity of the soil is smaller than the precipitation intensity
- The duration of the precipitation shower is larger than the ponding time. 

>[!Info]
>We often see this type of surface runoff in arid and semi-arid areas. The absence of vegetation in these areas results in compaction of the soil, which on its turn lowers the conductivity and infiltration capacity of the soil. Vegetation results in a soil structure with higher conductivity, even on soil types which normally have a low conductivity, such as clayey soils. 

>[!Note]
>The simplified situation of the figure above will not occur in reality, because the precipitation intensity of a rain shower is never constant. Surface runoff due to an infiltration surplus (Hortonian overland flow) does occur though, because during parts of the precipitation duration, the precipitation intensity can be larger than the infiltration capacity. There is also a spatial variation in the precipitation intensity and infiltration capacity. Hence, in paved areas within a catchment (e.g. streets, urban areas, etc.) ponding can occur, but these ponds infiltrate again nearby. 

---
### 1.1.4 Surface Runoff due to Soil Saturation

#### 1.1.4.1 Principle of Dunne
If the conductivity of the soil is high enough to let all water infiltrate during most rain showers (also severe ones), Horton's principles can no longer explain the formation of ponds and surface runoff. Surface runoff, however, does occur in catchments with very permeable soils and even in climates with low precipitation intensities. How is this possible? Let's look at the following figure

>[!missing]
>
>Insert Fig. 2.7

Assume again that a rain shower with a constant intensity (e.g. of 10 mm/h). This rain shower falls this time on a soil which has an infiltration capacity f $f_\infty$ (or $k_{\text{sat}}$). which remains higher than the precipitation intensity. This often occurs in relatively humid areas such as the North-Werst of Europe. At some locations in these areas,. groundwater levels are close to the surface level. These are often the valley areas close to a slope (e.g. in between mountains)  or delta regions. 

Because rainwater will infiltrate, groundwater tables will rise. This effect can even be aggrevated due to **return flow** from elevated areas (called groundwater ridging). Higher groundwater tables leas to lower storage capacities in the unsaturated zone. The unsaturated zone will be thinner: less porespace remains which can be filled with water. If this process continues, the soil will eventually be completely saturated. We call this time, $t_{\text{sat}}$, the **saturation time**. When we reach the saturation time, the soil can no longer store any precipitation water (the storage capacity is 0) and all water has to be stored on the surface. When the surface slopes (this slope can be quite small), surface runoff will take place. This process is called the [[Principle of Dunne]], because Dunne, another American hydrologist, was the first describe this phenomenon. 

The required conditions for the formation of surface runoff due to a saturation surplus, are:
- The infiltration capacity at saturation ($f_\infty$) of the soil is larger than the precipitation intensity
- The duration of the rain shower is longer than the saturation time
- Groundwater tables are shallow. 

#### 1.1.4.2 Variable Contributing Area
Since groundwater tables are shallow close to a channel, the soil will saturate more quickly closer to a channel than towards the hilltop. The longer the duration of the precipitation event, or when multiple precipitation events occur within a relatively short time span, an increasing part of the catchment will get saturated (often starting around the brook and then expanding). The part of the catchment which will become saturated and thus which contributes to the surface runoff, is called the [[Variable Contributing Area]]

The size of the saturated area determines the amount of rainwater that will reach the channels via surface runoff during a rain shower. If the catchment is wetter (so wet initial conditions), rain water will drain to the channels more quickly, and the discharge peak arrives faster at the catchment outlet. This is also why a precipitation event in summer barely results in a discharge increase, while a similar event could already lead to inundations during winter. This non-linear catchment behaviour (the same amount of precipitation does not always lead to the same amount of discharge) is one of the largest challenges in simulating rainfall-runoff processes. 

---
### 1.1.5 Baseflow
#### 1.1.5.1 Recession Curve
Even when it has not rained for some time, most rivers and brooks contain (and transport) water. This water flow is called the [[Baseflow]] and it is fed by groundwater in which rainwater from older precipitation events is stored. This storage gradually empties and this is the baseflow which flows towards the river or brook. Because groundwater flow is often a slow process, water can reach the channel even long after a rain shower. During a dry period, the baseflow will slowly decrease. The amount of baseflow and the maximum duration of baseflow depend mainly on the amount of water stored in the soil and the soil properties (e.g. aquifer thickness and [[Permeability]]). Some brooks dry up during dry periods, which happens when the groundwater tables drop below the channel bottom. 

The part of the [[Hydrograph]] that displays the drying proces of the soil and the decline in the baseflow, is called the [[Recession]]. Recession curves often have a negative exponential shape: 

$$
Q(t)=Q_0 \cdot e^{-c \, t} \tag{1.2} 
$$

where:
- $Q(t)$ is the [[Discharge]] at time $t$ after the start of the recession (in L$^3$ T$^{-1}$)
- $Q_0$ is the discharge at time 0 (at the start of the recession) in L$^3$ T$^{-1}$
- $c$ is the recession coefficient (in T$^{-1}$) 

A small $c$ results in a slowly decreasing discharge. So if $c$ is small, the supply of groundwater to the stream will take place for a longer time during dry periods

We can explain the exponential shape of the recession curve with the mass balance of the groundwater reservoir, of which we can describe the behaviour with a linear reservoir. During the recession, we can assume the groundwater recharge to be zero. Hence, due to the drainage of the groundwater, groundwater tables will slowly decline. As a result of this, the difference in [[Hydraulic Head]] between groundwater and the river, so the driving force behind the groundwater flow, will decline as well. 

>[!missing]
>
>Insert Fig. 2.11

Assume that the groundwater table is a leaking bucket. The groundwater flow will be comparable to the outflow of the bucket (the discharge $Q$) and this is linearly proportional to the water level of the bucket. A lower water level in the bucket causes slower water flow out of the bucket. Besides that, the size of the leaking point (e.g. a hole) also influences the discharge. So a large leak results in a high discharge: 

$$
Q=c^* \cdot \bar{H} \tag{1.3}
$$

With:
- $Q$ as the [[Discharge]] (in L$^3$ T$^{-1}$)
- $\bar{H}$ as the difference between the average groundwater level and the water level of the river (so the water level in the bucket) in L
- $c^*$ as a coefficient which depends on the [[Conductance]] of the soil and the average distance to the river (the size of the leak).

>[!Note]
>This equation is actually a simplified version of [[Darcy's Law]]

Discharge is also proportional (linearly) to the change of the hydraulic head over time. Compare this to the leaking bucket: how fast the water level in the bucket drops, is a measure for the discharge. This follows: 

$$
Q=-\mu A \frac{\text{d}\bar{H}}{\text{d}t} \tag{1.4} 
$$

Where:
- $\mu$ is the storage coefficient (no unit)
- $A$ is the surface area of the catchment (or the bucket). 

We use a minus sign, because a water level drop means a positive discharge. The storage coefficient is necessary, because a groundwater table decline of 1 cm does not equal to a water layer of 1 cm (because part of the soil volume is filled with soil particles). 

Now, we can state that equations 2.4 and 2.4 equal each other: 

$$
c^* \cdot \bar{H} =-\mu A \frac{\text{d}\bar{H}}{\text{d}t} \tag{1.5}  
$$


If we move the terms with $\bar{H}$ to the left hand side, we will get: 

$$
\frac{\text{d}\bar{H}}{\text{d}t} \frac{1}{\bar{H}}=-\frac{c^*}{\mu A}\tag{1.6}
$$


Followed by an integration to $t$ : 

$$
\ln \, \bar{H}=-\frac{c^*}{\mu A}+ C \tag{1.7} 
$$


With C the integration constant. So, the following holds: 

$$
\bar{H}(t)=e^C e^{-\frac{c^*}{\mu A}t} \tag{1.8}
$$


We indicate the groundwater level at the start of the recession with $\bar{H}_0$. At time $t=0$, the following holds: $\bar{H}(0) = \bar{H}_0$, and thus: 

$$
\bar{H}_t =H_0 \, e^{-\frac{c^*}{\mu A}t} \tag{1.9}
$$


If we use this in equation 2.3, and $Q_0 = c^* \cdot \bar{H}_0$, we find 

$$
Q(t) = Q_0 \, \cdot e^{-\frac{c^*}{\mu A}t} \tag{1.10} 
$$


>[!Note]
>Not all catchments have a recession curve which resembles the flow from a linear reservoir. In those cases, we need to use other mathematical equations to describe the recession curve

---
### 1.1.6 The Relation Between Storage and Discharge
In the previous sections, we gave a detailed description of surface runoff and baseflow, which mainly consists of slow groundwater flow, but these are not the only routes water can take to reach the surface water. Surface runoff often occurs in hilly areas, while flat areas often have ponding processes. These ponds infiltrate slowly. What often occurs in the Netherlands is runoff via drainpipes, clay fractures or macropores (such as animal burrows). You could see these processes as a category between surface runoff and groundwater flow. These processes are obviously faster than groundwater flow, but they are not as fast as surface runoff. 