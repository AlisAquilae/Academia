---
fileClass: Base, Summaries
title: 
Parents: 
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# 1. Rainfall-Runoff Processes
## 1.1 Introduction
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

---
## 1.2 Rainfall-Runoff Models
Due to the complexity of catchments, weather and climate, it is not easy to predict a river's discharge response to a rain shower. In order to have some sort of forecast, we can use a certain type of hydrological model: the [[Rainfall-Runoff Model]]. Rainfall-Runoff models are a simplified representation of hydrological processes within a catchment. 

### 1.2.1 Types of Rainfall-Runoff Models
There are various rainfall-runoff models which all have specific advantages and disadvantages. Which model you use completely depends on the modelling goal, your catchment (characteristics) and the available data. 

We can subdivide rainfall-runoff models in three types:
- **Black box models** have almost no physical background. Hence, the relationship between precipitation and runoff is empirical. These kind of models seek a relationship between input (precipitation and often also evapotranspiration) and output (the discharge), without using any information about the catchment or other information about hydrological processes. Black box models are simple to use, but sometimes they are too simple to simulate all important processes in a catchment. Black box models are sometimes used for flood forecasting in small catchments. 

![[20240227_131138.jpg]]

- **Parametric Models** or parameter-based models are based on simplified representations of catchment processes with often reservoirs, fluxes (variables that flow, such as precipitation or drainage), states (variables that do not flow, such as water level) and paramaters (which determine the relationship between variables). The structure of the model is fixed and more complex than the structure of black box models. A more complex structure results in a simulation of more processes, but this also results in more parameters. Parameters are sometimes environmental characteristics of an area (such as the [[Permeability|Conductivity]] of a soil), but some parameters are also quite abstract (such as the relative share of the quick-discharge processes). We often subdivide large catchments into smaller catchments (e.g. due to spatial variation in precipitation or soil types). We often use parametric models to study the effect of climate change or to forecast river discharges in scarcely measured catchments

![[20240227_131145.jpg]]

- **Physically-based models** are based on detailed catchment characteristics and water flow equations, such as [[Darcy's Law]]. These models are often spatially distributed, which means that the catchment is subdivided in cells, which all have their own input series and parameter values. For all these cells, the water flow equations are calculated per time step. This type of model gives more information about the processes which take place at scales that are smaller than the catchment scale. The disadvantage, however, is that these models need much more input data and parameter values than black box and parametric models. 

![[20240227_131215.jpg]]

>[!Info]
>In most models a division is made between quick and slow runoff processes. Quick runoff processes are surface runoff, [[Interflow]] and water flow through macropores such as animal burrows and clay fractures. The most important slow discharge process is groundwater flow, which flows much slower than surface runoff or river discharge due to friction with soil particles

---
## 1.3 Surface Runoff due to Infiltration Surplus
One of the most important quick runoff processes for a model (and in real life), is [[Surface Runoff]], also called [[Surface Runoff|Overland Flow]]. Surface runoff is formed when water is not able to infiltrate into the soil: it will stay on top of the soil surface (**ponding**) and subsequently it will run off over the surface due to the local topography (and slopes). 

It is difficult to quantify the exact instant and amount of surface runoff for a catchment. That is why we often use empirical relationships based on observations / experience to determine and quantify infiltration and ponding processes. 

### 1.3.1 Infiltration According to Horton
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

#### 