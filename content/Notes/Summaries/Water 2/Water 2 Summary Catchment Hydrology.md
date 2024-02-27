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

### 1.3.2 Exceedance of Infiltration Capacity
When not all water can infiltrate in the soil after a rain shower or a snow-melt period due to an exceedance of the infiltration capacity, an infiltration surplus occurs, which leads to surface runoff. We call this effect the [[Infiltration Excess Overland Flow|Horton Overland Flow]] or [[Infiltration Excess Overland Flow]]

The effect of a rain shower with an intensity that exceeds the infiltration capacity is illustrated in the following figure

![[20240227_133001.jpg]]

Assume that we are dealing with a rain shower of a constant intensity (e.g. 10 mm/h) which falls on a relatively dry soil. The initial soil moisture content is displayed in the soil moisture profile at time $t_0$. Since the soil is relatively dry at the start, all precipitation will be able to infiltrate. 

The infiltrating water changes the soil moisture profile and the soil moisture will increase faster near the soil surface than deeper in the soil profile (because the water does not infiltrate fast enough). With increasing duration of the rain shower, the infiltration capacity of the soil will decrease: water will infiltrate less easily in wet soils. The curve of the infiltration capacity of the soil as a function of time, will move towards the asymptote with an equilibrium value of $f_\infty$ (or $k_{\text{sat}}$, [[Saturated Hydraulic Conductivity]]). 

If the saturated conductivity of the soil is smaller than the constant precipitation intensity, we will reach a point where the infiltration capacity becomes smaller than the precipitation intensity. We call this instant, at $t_p$, the [[Ponding Time]]. From this moment onwards, water will be stored on top of the surface and subsequently it will move as surface runoff. 

>[!Important]
>Summarising the requirements to get Horton overland flow due to an infiltration surplus are:
>- The saturated conductivity of the soil is smaller than the precipitation intensity
>- The duration of the precipitation shower is larger than the ponding time. 

>[!Info]
>We often see this type of surface runoff in arid and semi-arid areas. The absence of vegetation in these areas results in compaction of the soil, which on its turn lowers the conductivity and infiltration capacity of the soil. Vegetation results in a soil structure with higher conductivity, even on soil types which normally have a low conductivity, such as clayey soils. 

>[!Note]
>The simplified situation of the figure above will not occur in reality, because the precipitation intensity of a rain shower is never constant. Surface runoff due to an infiltration surplus (Hortonian overland flow) does occur though, because during parts of the precipitation duration, the precipitation intensity can be larger than the infiltration capacity. There is also a spatial variation in the precipitation intensity and infiltration capacity. Hence, in paved areas within a catchment (e.g. streets, urban areas, etc.) ponding can occur, but these ponds infiltrate again nearby. 

---
## 1.4 Surface Runoff due to Soil Saturation
### 1.4.1 Dunne's Principle
If the conductivity of the soil is high enough to let all water infiltrate during most rain showers (also severe ones), Horton's principles can no longer explain the formation of ponds and surface runoff. Surface runoff, however, does occur in catchments with very permeable soils and even in climates with low precipitation intensities. How is this possible? Let's look at the following figure:

![[20240227_133859.jpg]]

Assume again that a rain shower with a constant intensity (e.g. of 10 mm/h). This rain shower falls this time on a soil which has an infiltration capacity $f_\infty$ (or $k_{\text{sat}}$). which remains higher than the precipitation intensity. This often occurs in relatively humid areas such as the North-Werst of Europe. At some locations in these areas,. groundwater levels are close to the surface level. These are often the valley areas close to a slope (e.g. in between mountains)  or delta regions. 

Because rainwater will infiltrate, groundwater tables will rise. This effect can even be aggravated due to **return flow** from elevated areas (called groundwater ridging). Higher groundwater tables leas to lower storage capacities in the unsaturated zone. The unsaturated zone will be thinner: less porespace remains which can be filled with water. If this process continues, the soil will eventually be completely saturated. We call this time, $t_{\text{sat}}$, the **saturation time**. When we reach the saturation time, the soil can no longer store any precipitation water (the storage capacity is 0) and all water has to be stored on the surface. When the surface slopes (this slope can be quite small), surface runoff will take place. This process is called the **Dunne's Principle** (leading to [[Saturation Excess Overland Flow|Dunne Overland Flow]], otherwise known as [[Saturation Excess Overland Flow]]), because Dunne, another American hydrologist, was the first describe this phenomenon. 

>[!Important]
>The required conditions for the formation of surface runoff due to a saturation surplus, are:
>- The infiltration capacity at saturation ($f_\infty$) of the soil is larger than the precipitation intensity
>- The duration of the rain shower is longer than the saturation time
>- Groundwater tables are shallow. 

### 1.4.2 Variable Contributing Area
Since groundwater tables are shallow close to a channel, the soil will saturate more quickly closer to a channel than towards the hilltop. The longer the duration of the precipitation event, or when multiple precipitation events occur within a relatively short time span, an increasing part of the catchment will get saturated (often starting around the brook and then expanding). The part of the catchment which will become saturated and thus which contributes to the surface runoff, is called the [[Variable Contributing Area]]

The size of the saturated area determines the amount of rainwater that will reach the channels via surface runoff during a rain shower. If the catchment is wetter (so wet initial conditions), rain water will drain to the channels more quickly, and the discharge peak arrives faster at the catchment outlet. This is also why a precipitation event in summer barely results in a discharge increase, while a similar event could already lead to inundations during winter. This non-linear catchment behaviour (the same amount of precipitation does not always lead to the same amount of discharge) is one of the largest challenges in simulating rainfall-runoff processes. 

---
## 1.5 Baseflow
### 1.5.1 Recession Curve
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

![[20240227_135603.jpg]]

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

Now, we can state that equations 1.3 and 1.4 equal each other: 

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


With $C$ the integration constant. So, the following holds: 

$$
\bar{H}(t)=e^C e^{-\frac{c^*}{\mu A}t} \tag{1.8}
$$


We indicate the groundwater level at the start of the recession with $\bar{H}_0$. At time $t=0$, the following holds: $\bar{H}(0) = \bar{H}_0$, and thus: 

$$
\bar{H}_t =H_0 \, e^{-\frac{c^*}{\mu A}t} \tag{1.9}
$$


If we use this in equation 1.3, and $Q_0 = c^* \cdot \bar{H}_0$, we find 

$$
Q(t) = Q_0 \, \cdot e^{-\frac{c^*}{\mu A}t} \tag{1.10} 
$$


>[!Note]
>Not all catchments have a recession curve which resembles the flow from a linear reservoir. In those cases, we need to use other mathematical equations to describe the recession curve

---
# 2. Hydrological Extremes
## 2.1 Introduction
For many applications, the normal or average discharge is less relevant than the extremes. What is the probability of getting a very high or very low discharge? In this section we will talk more about the so-called "wet" extremes, floods and severe precipitation events, and droughts. Based on discharge time series (the [[Hydrograph]]), we can calculate probabilities of exceedance and return periods. If we want to conduct studies for certain scenarios (land use or climate change), we will need a simulated discharge time series (the output of the models from the previous section).

In this section, we will explain how you can use a time series for flow duration curves (Sec. 2.3) and extreme values analysis (Sec. 2.4). This can be used for e.g. the calculation of rainfall depth-duration-frequency curves (Sec. 2.5), which are in turn used for water system design (Sec. 2.6). Finally, we give some background on drought processes and analyses (Sec. 2.7)

---
## 2.2 Societal Context
When at the start of the rain shower, the storage capacity of the catchment soils is small, e.g. during wet periods, floods can occur. A **high flow** or **flood** is an above-normal river discharge. If the river has a floodplain, part of this discharge will take place over these floodplains. 

Floods are not the only hydrological extreme causing damage to nature and society. Drought can lead to crop damage, (irreversible) damage to aquatic and terrestrial ecosystems, low river water levels which hamper navigation, salt intrusion at the river delta, lack of cooling water for electricity plants, and many other negative situations. 

**Drought** is defined as a situation with less water than normal. Its effect on society, meaning having less water than needed, is called water scarcity. It is possible that these two do not coincide, for example when there is less water than normal in the middle of winter. 

>[!Note]
>In this section we focus on the Hydrology, so on drought, rather than water scarcity

Besides causing floods, extreme precipitation events can also lead to landslides and inundated streets when the sewage system capacity is exceeded. Knowledge about extreme precipitation events is thus very important for warnings of dangerous weather, for advice to citizens, for water damage insurances and of course for our scientific knowledge

>[!Example]
>In order to prevent damage, we have to formulate certain design criteria. Society has to decide what risk is acceptable, for example how often a certain flood is allowed to occur. As a result of that, scientists can estimate the probability of certain precipitation sums and the resulting discharge. We use these amounts to design channels, storage basins and pumping stations

---
## 2.3 Flow Duration Curve
If our discharge time series at a certain location along the river is long enough, we will be able to construct [[Flow Duration Curves]] which describe the relationship between certain discharge amounts and the **exceedance probability** of these discharge amounts. Obviously, a small discharge has a higher probability of exceedance than a large discharge amount. 

To design a flow duration curve, we will have to follow the following steps. 
1. Choose a time interval $\Delta t$ for which you want to design the flow duration curve (e.g. a number of days)
2. Calculate the average discharge for every time step. When you have hourly observations, but want to design the curve for daily discharges, you average over 24 hours
3. Order these discharges from large to small
4. The highest discharge is exceeded during $\frac{1}{N+1}$ of the time steps, the second highest discharge is exceeded during $\frac{2}{N+1}$ of the time steps, and so on. Here, N is the total number of time steps. Hence, the smallest discharge is exceeded during $\frac{N}{N+1}$ of the time steps.
5. Plot these discharges against their time of exceedance. 

![[20240227_140942.jpg]]

The figure above displays the **dimensionless flow duration curve** (sometimes called exceedance plot) of daily discharge amounts for the Rhine, Meuse, Hupsel Brook and Rietholzbach. We can obtain dimensionless flow duration curves by dividing daily discharges by the average discharge ($Q/Q_{ave}$), followed by plotting these values on the Y-axis. With the flow duration curve, we can determine the frequency of occurrence of certain characteristic discharges. 


>[!Important]
>
>We can also determine the average daily discharge from these curves. In dimensionless flow duration curves, we can find this at $Q/Q_{ave}=1$. 

>[!Info]
>For most rivers, the average daily discharge is exceeded about 30% of the time (about 100 days a year). Hence, the average daily discharge is actually a relatively high discharge

>[!Important]
>Another measure for river discharge is the median discharge. This is a discharge which is exceeded 50% of the time. The median discharge is lower than the average discharge, which shows that the distribution is not symmetric: there are many days with relatively low discharge and a few peaks with a large influence on the average.

The shape of the flow duration curve tells us much about the flow characteristics of the river. A relatively flat curve indicates a more evenly distributed discharge. For such a river, the probability of extremely high discharges is quite low. Catchments can have such a gradual flow duration curve when there is for example a high storage capacity on soils, brooks or lakes. Precipitation will have a slower and more evenly distributed transport towards the river, or most water flow takes place via groundwater flow (which is also much slower than surface runoff)

Below we see the hydrographs of the Meuse and Rhine

![[20240227_141145.jpg]]

If we compare the hydrographs and dimensionless flow duration curves of the Meuse and Rhine, we will immediately see that the flow duration curve of the Rhine is much less steep than the curve of the Meuse. The river Meuse is a typical rain-fed river, which responds quickly to intense precipitation events, because much surface runoff and macropore flow is formed in the Belgian Ardennes. On the other hand, during prolonged dry periods, the discharge will decrease quickly, while the Rhine still delivers plenty of water during these periods (partly glacier and snow melt). Besides this, the shape and size of the catchment also influence these processes. A small catchment will react faster to precipitation events. Large catchments will never have rain at the same place at the same time, so discharge shows a more gradual pattern.

---
## 2.4 Extreme Value Statistics
### 2.4.1 Exceedance Probabilities and Return Periods
The **exceedance probability** of a certain discharge is the probability that this discharge will be exceeded during a (random) year at a certain location. Another way to express this, is by determining the **return period** of that discharge. The return period is a way to express how many years we have to wait (on average) before a certain discharge will take place again. The exceedence probability $p$ (per year) during a certain year and the return period $T$ (in years) relate to each other in the following way: 

$$
T=\frac{1}{p} \tag{1.11} 
$$


The determination of the exceedance probabilities and the return periods of certain high flows is crucial for our protection against floods. Dike heights in the Netherlands, for example, are based on the so-called **design discharge** of the river. A design discharge is the discharge that corresponds to a certain return period. The government decides what this return period should be. Subsequently, we determine the design water levels from the design discharge, which eventually determines the dike heights. 

>[!Info]
>The return period used to determine the design discharge for the large rivers in the Netherlands is 2000 years. Hence, here, dikes should have a height which should be sufficient to assume that only once every 2000 years a flood can take place. 

### 2.4.2 Relationship between Return Periods and the Probability of High Waters
We want to calculate the probability that a discharge with a return period of $T$ (e.g. 1250 years) is exceeded one or more times during a period of $n$ years (e.g. 100 years). The probability that a discharge with a return period of $T$ years is not exceeded during 1 year equals 1 minus the probability that this discharge is exceeded in that year; hence, $1-p$, which we can write as $1-\frac{1}{T}$ (according to Eq. 2.11)

Since high discharge peaks in separate years are independent of each other, we can multiply the probabilities with each other in order to calculate the probability that a discharge with a return period of $T$ years will not be exceeded during $n$ years. And, since all these probabilities are the same, this simply gives $(1-\frac{1}{T})^n$. The probability that this discharge is exceeded in $n$ years, is then $1-(1-\frac{1}{T})^n$. This seems unnecessarily complex, but because the discharge can be exceeded more than once, this is not the same as $(\frac{1}{T})^n$. For $T=1250$ years and $n$ = 100 years, this is 7.7%

Besides, the probability that a discharge with a return period of $T$ years gets exceeded during a period of $T$ years for one or more instances, does not equal 1. If we use this precious equation and change $n$ for $T$, we will get a probability of 'only' 63%.

>[!Summary]
>To calculate whether a discharge  **IS NOT** exceeded: 
>
>$$ 
>(1-\frac{1}{T})^n
>$$
>
>To calculate whether a discharge **IS** exceeded:
>
>$$
>1-(1-\frac{1}{T})^n
>$$

### 2.4.3 Annual Maxima
For extreme value statistics, we start with selecting the annual (yearly) maxima of a discharge or precipitation time series. We can plot these annual maxima against the exceedance probabilities in a similar way as done in Section 2.2.4 and Fig. 2.13. If we do this for the Rhine at Lobith and the Meuse at Borgharen, we find the following figure (left)