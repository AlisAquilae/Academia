---
fileClass: Base, Summaries
title: 
Parents: ["[[Water 2]]"]
Draft: 
Status: Done
Related Notes: 
Related Terminology: 
Related Courses: ["[[Water 2]]"]
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
For extreme value statistics, we start with selecting the annual (yearly) maxima of a discharge or precipitation time series. We can plot these annual maxima against the exceedance probabilities in a similar way as done in Section 2.4 and Fig. 2.13. If we do this for the Rhine at Lobith and the Meuse at Borgharen, we find the following figure (left):

![[20240227_141734.jpg]]

We call this a **Cumulative Probability Distribution**. By interpolating the results, we can easily find the corresponding annual maximum discharge for a certain probability exceedance (e.g. 10%). For 10%, we find $9.4 \times 10^3$ m$^3$ s$^{-1}$ for the Rhine. The corresponding return period is then (see Eq. 1.11) $T=10$ years. So on average, once every 10 years a discharge of $9.4 \times 10^3$  m$^3$ s$^{-1}$ or more occurs in the Rhine river. 

The largest return period which we can read from the figure above is $N=1=108$ years. This means that, if we want to determine a design discharge for a larger return period, we will have to extrapolate this graph to the left. That is extremely difficult. Actually, with this method, it is not even possible to determine the design of discharge of the Rhine at Lobith for a return period of 1250 years. Nevertheless, for water safety, we want to be able to estimate a design discharge for a return period longer than the available time series. This means that we are going to determine the probability of a certain event that has never been experienced. To make such an extrapolation possible, we use extreme value statistics.

### 2.4.4 Gumbel Distribution
We can fit a probability distribution through annual maxima (or maxima above a certain value), which allows us to estimate the precipitation sums that correspond to certain return periods. An often used probability distribution for this purpose is the [[Gumbel Distribution]]: 

$$
x(p)=\mu - \alpha \ln(1 - \ln (1-p)) \tag{1.12} 
$$

Where:
- $x$ is the discharge or precipitation for a certain exceedance probability $p$ (a year)
- $\mu$ is the location parameter
- $\alpha$ the scale parameter

Both $\mu$ and $\alpha$ are empirical parameters with the same unit as $x$

Usually, we transform $p$ before plotting it. The transformed value of $p$ is called the **Gumbel Reduced Variate** ($y$): 

$$
y(p)=-\ln (-\ln (1-p)) \tag{1.13} 
$$


And with that, Eq. 1.12 turns into 

$$
x(y)=\mu + \alpha y 
$$


>[!Note]
>It is a bit confusing that $y$ is plotted on the x-axis and $x$ is plotted on the y-axis, but since these symbols are internationally used in this way, we will do the same as well here

Subsequently, $- \ln (- \ln (1-p))$ is placed on the x-axis and $Q$ on the y-axis (see the previous picture, right). When the Gumbel distribution is a good estimator of the probability distribution of the annual maxima, all points will lie on one line with slope $\alpha$ and intercept $\mu$. We can easily extrapolate this line.

We can determine the parameters $\mu$ and $\alpha$ graphically (i.e. with a graph), or from measurements. We only need to know the average values $Q_{ave}$ and standard deviation $s$ of $N$ extreme discharges. Subsequently, we will find  $\mu$ and $\alpha$ with: 

$$
\alpha = \frac{\sqrt{6}}{\pi}s \tag{1.14}
$$

And 

$$
\mu = Q_{ave}-0.5772 \alpha \tag{1.15} 
$$


From equation 1.12 we are now able to calculate the discharge that corresponds to a certain return period. Here, we assume measurements follow the Gumbel distribution, even for extreme values which we have never measured. Besides, we also assume that this distribution holds for future values. The parameters  $\mu$ and $\alpha$ can, however, change due to for example changes in the upstream part of the river. A change in land use or climate cal also result in different values for the parameters of this distribution. Therefore, our current estimations of the discharges for return periods of 1250 years or more has quite some uncertainty. 

### 2.4.5 GEV Distribution

The Gumbel distribution is often used for extreme precipitation sums, but this distribution is actually not suited for this purpose, because it underestimates the precipitation sum for large return periods. The [[GEV Distribution]] or [[GEV Distribution|Generalised Extreme Value Distribution]] is a better way to estimate this upper tail of the probability distribution. Beside the location parameter $\mu$ in mm and scale parameter $\alpha$ in mm, the GEV distribution also has a shape parameter $k$ (no unit)

![[20240227_144215.jpg]]

The GEV distribution combines three asymptotic extreme values distribution with the value for $k$: the Gumbel distribution when $k=0$, the [[Fréchet Distribution]] when $k \lt 0$ and the [[Weibull Distribution]] when $k \gt 0$. The Fréchet distribution has a longer tail than the Gumbel distribution, while the Weibull distribution has a shorter tail.

The quantile function, with which we can calculate the precipitation sum for a certain exceedance probability, equals for a GEV distribution with $k\not= 0$: 

$$
x(p)= \mu + \frac{\alpha \{1- [- \ln (1-p)]^k \}}{k} \tag{1.16}
$$

We often simplify this equation to: 

$$
x(y)=\mu + \alpha \frac{1-\exp(=ky)}{k} \tag{1.17} 
$$

With $y$ again being the Gumbel reduced variate (Eq. 1.13)

In order to obtain $\alpha$, $\mu$ and $k$ for a certain location, we have to fit the GEV distribution for annual maxima. For this, we need a dataset with many years of data (> 100 years), which is often not available. 

---
## 2.5 Rainfall Depth-Duration-Frequency Curves
Often, we present extreme precipitation statistics as Rainfall [[Depth-Duration-Frequency Curves]], also called [[Depth-Duration-Frequency Curves|DDF Curves]]. These curves give for different return periods or exceedance probabilities, the precipitation sum as a function of the event duration. Especially for short durations, the precipitation intensity is often used instead of the precipitation sum (Rainfall [[Intensity-Duration-Frequency Curves]]; [[Intensity-Duration-Frequency Curves|IDF Curves]]). The method to determine both types is comparable. In the next section, we will explain how we can derive rainfall DDF curves

>[!Warning]
>I did not summarise / memo this part because I did not quite understand it

### 2.5.1 Extreme Value Statistics of Spatial Precipitation
For hydrological purposes, one is often not interested in point measurements of precipitation sums, but rather in the precipitation sum of an entire catchment. We can use radar to determine the rainfall depth-duration-frequency curves of larger surface areas. For extreme values, the average precipitation sum significantly decreased with increasing surface area (for the same $D$ and $T$). We can describe this decrease by making use of the smallest available surface area, which gives us **Areal Reduction Factors**. Areal reduction factors are small for small durations, for which the extreme sums are caused by severe and local (convective) showers, which can only affect a small area for a short duration.

---
## 2.6 Using Rainfall Depth-Duration-Frequency Curves for Design
Rainfall DDF curves can be used to estimate the necessary discharge capacity for quickly draining areas, such as the capacity of sewage systems in urban areas or the capacity of pumping stations in polders with shallow groundwater tables. In this section, this so-called DDF-method is described.

The first step is to determine the acceptable inundation risk. This depends on land use, because flooding causes more (economic) damage in urban areas than on grassland. The next step is to loop up the DDF-curve for that return period.

During intensive rainfall events, water should be either stored or discharged, as the other water balance terms (evapotranspiration, and possibly surface water supply, groundwater flor or additional sources or sinks) are negligible. The water balance simplifies to: 

$$
\sum P= \sum Q + \Delta S \tag{1.21}
$$


To compute the necessary discharge capacity for the sewage system or pumping station, one needs to know the rainfall sum belonging to an event with a certain return period and the storage capacity. The storage capacity is the amount of water which can still be stored in the soil, surface water network or water retention areas before inundation occurs

>[!note]
>The storage capacity should not be confused with storage itself, which is the amount of water that is already stored

The other way around, if the discharge capacity is known, you can compute how much water needs to be stored during the event. The third option is that you compute the return period (or inundation probability) given a certain discharge capacity and storage capacity

This problem can be solved numerically or graphically. Here, we focus on the graphical approach. First, plot the cumulative sums of each of the water balance terms (so with time on the x-axis and the depth on the y-axis): 
- The cumulative rainfall ($\sum P$) is the DDF curve belonging to a certain return period
- The cumulative discharge ($\sum Q$ ) is a line for which the slope corresponds to the discharge capacity. For example, if the discharge capacity is 20 mm/d, then after 1 day 20 mm has been discharged, after 2 days 40 mm, etc.
- The (cumulative) storage change ($\Delta S$) is a horizontal line corresponding to the storage capacity, because the storage capacity can only be filled once and does not increase over time

![[20240227_145925.jpg]]

To determine if an area inundates, the lines of cumulative discharge and storage change should be added and compared to the cumulative rainfall. When $\sum Q + \Delta S \lt \sum P$, inundation occurs at that moment. 

To design the necessary discharge capacity when the return period and storage capacity are known, draw (or pick) the DDF curve belonging to that return period and draw the horizontal line for the storage capacity. Then, draw a sloping line which crosses the y-axis at the storage capacity (the intercept) and touches the DDF curve (so inundation does not occur). The slope of the line gives the discharge capacity (in mm/d). This often needs to be converted to m$^3$/s (using the surface of the draining area) since the capacity of pumps or channels is of course measured in this way.

To design the necessary storage capacity when the return period and discharge capacity are known, draw (or pick) the DDF curve belonging to that return period and draw the cumulative dischargte as a line starting at the origin and with a slope equal to the discharge capacity. The find the largest vertical distance between this line and the DDF curve. This is the storage capacity. Alternatively, you can draw lines parallel to the line for the cumulative discharge and pick the line which touches the DDF curve. The intercept of this line gives the storage capacity.

To determine the return period belonging to a certain storage and discharge capacity, draw a line with the storage capacity as intercept and the discharge capacity as slope. Pick the DDF curve which just touches upon this line and read its return period.

As with every model the DDF method is a simplification of reality. Important simplifications are:
- Precipitation is assumed to be discharged directly. With snow, a low rainfall intensity or an unsaturated soil with high infiltration capacity, this is not the case. That is why this method is mostly used for urban areas and polders with high groundwater tables and clay or peat soils
- The DDF method is an event-based method, in which you evaluate if an area is able to discharge the rain from one event. Initial wetness factors are not taken into account, which means that if the groundwater and surface water levels before the event are high because the the water from an earlier storm has not been discharged yet, a rainfall event with a lower return period can cause floods, because the storage capacity is smaller. 
- In reality, the distribution of rainfall over time will never follow the shape of the DDF curve. For example, it is possible that in the first hour the event has a return period of one month, in the second 20 years, etc., which together leads to a 24 hour rainfall sum with a return period of one year
- For large areas, the areal reduction factors for DDF curves should be applied to avoid overestimation of the necessary discharge or storage capacity.

Even given these drawbacks, the DDF method is much used in practice, because it is an easy way to obtain a first estimate of the necessary discharge or storage capacity without having to set up and run a more complex hydrological model. 

---
## 2.7 Drought
There are several methods to determine if a water system is in drought and to quantify the severity of the drought. In this section, we explain the most common ones.

Just like flood analysis, drought analysis starts with the flow duration curve, from which the discharges for high exceedance probabilities are determines. For perennial rivers (rivers which can carry water year-round, in contrast to ephemeral rivers which run dry) often the Q95 or Q90, the discharges which are exceeded 95 or 90% of the time, are used. The Q95 (or any other exceedance probability) can be determined for the whole year or per month

When the discharge drops below the Q95 (the threshold), the river is considered to be in drought. When the Q95 is computed over and applied to a whole year, this is called a fixed threshold. For a **variable threshold**, the Q95 is computed for each month and a moving average is computed to obtain a smooth line. By definition, the river is in drought 5% of the time. 

A drought event can be characterised by:
- Duration: time when the discharge is below the threshold
- Deficit: volume of water below the threshold, so the cumulative difference between the threshold and the discharge
- Return period: the inverse of the exceedance probability of the minimum discharge, duration or deficit.

Drought does not only occur in the river itself. Therefore, we distinguish 4 types of drought
1. **Precipitation Drought**. This type of drought usually has little direct societal impact because rainfall is by nature variable. However, a drought in precipitation may propagate through the hydrological cycle. 
2. A precipitation drought can lead to a lack of water in the unsaturated zone: a **soil moisture drought**. Soil moisture drought is the most relevant type for agriculture and terrestrial ecosystems, because it determines the water availability in the root zone
3. When there is less water in the top soil, less water will percolate to the groundwater and a **groundwater drought** may develop. Groundwater droughts only occur when the soil moisture drought lasts long enough, since groundwater responds slowly to changes in the topsoil (when there is shallow groundwater, the response to rainfall is faster). On the other hand, groundwater droughts can last long. Groundwater drought is especially important for drinking water extraction and sustaining baseflow
4. The fourth type, **streamflow drought**, considers low river discharges, so this is the type of drought mentioned before. Because rain water takes both fast and slow routes towards the surface water network, the dynamics (attenuation and delay) of discharge droughts are between precipitation drought and groundwater drought. Streamflow drought is the most important type for aquatic ecosystems, navigation and hydro-power dams. 

>[!Note]
>Besides lack of precipitation, a change in temperature can also lead to drought. When evapotranspiration is higher than normal, a soil moisture drought may occur while there is no precipitation drought. 

---
# 3. River Morphology
## 3.1 Introduction
Discharge dynamics with their high and low flow periods determine, together with the geology and topography, the shape of channels. Sediment is mainly transported during high water levels, which results in a transformation of the river shape.

In this section, we will go deeper into natural river shapes and river systems, and in what way these shapes and systems depend on the discharge. This knowledge is even important for man-made channels. Nowadays, we often 'design' channels, but we still have to be aware of the natural processes of erosion and sedimentation when doing this. 

We already introduced the calculation of the required [[Discharge]] capacity in the course [[Water 1]] ([[Chézy Equation]]). In this section, we will expand this knowledge with the explanation of river shapes: **river morphology**. 

---
## 3.2 Horton's Geomorphological Laws
In the course Water 1 we introduced the order numbers according to Strahler ([[Strahler Order Numbering]]). When a river system is ordered according to Strahler's ordering, we can ask ourselves whether dendritic networks have certain universal characteristics. For example, we can calculate the number of links/streams in every order: $N_i$ is the number of links/streams of order $i$; $N_{i+1}$ the number of links of order $i+1$, etc. 

If we apply this analysis to a natural catchment, we will discover a notable structure in the data: 

$$
R_B=\frac{N_i}{N_{i+1}} \tag{1.22}
$$

With $R_B$ a constant value. 

We call $R_B$ the **Bifurcation Number** (*bifurcation* means splitting). If we repeat this analysis for many catchments in the same geomorphological unit (e.g. the Belgian Ardennes), we will get almost the same bifurcation number for every channel. Even between those geomorphological units, the bifurcation number is relatively constant, with an average value of 3.5. 

>[!Info]
>Globally, the bifurcation number roughly varies between 3 and 5, which is a very small spread for what seems to be a randomly established drainage pattern. 

>[!Note]
>More elongated catchments have larger bifurcation numbers

Also, other transportation networks have similar bifurcation numbers: trees have an average of 3.2, lightning splits with an average ratio of 3.5 and our blood vessels have an $R_B$ of 3.4. Hence, nature gives us a clear ordering in seemingly chaotic transporting systems

Equation 1.22 is called [[Horton's Law of Stream Numbers]], also called the **Bifurcation Law of Drainage Patterns**. 

Since we have an order for every interior and exterior link of the river system, we can extend our analysis with the average length of channels with a certain order, or even the average slope of channels and the average drainage area of a certain order.

We can calculate the average length of the channel of order $i$ with the arithmetic mean: 

$$
\bar{L}_i=\frac{1}{N} \sum_{j=1}^N L_{ij} \tag{1.23}
$$


The ratio of the average lengths for increasing orders in a catchment also gives constant values: 

$$
R_L=\frac{\bar{L}_i}{\bar{L}_{i-1}} \tag{1.24} 
$$

with $R_L$ the so-called **length ratio number**. The value for $R_L$ is between 1.5 and 3.5 for natural watercourses. The average length ratio number is 2 for catchments

We call this [[Horton's Law of Stream Length]]. The average length of a channel doubles (approximately) per increasing order. With an increasing Strahler order, the number of channels in this order will decrease until we reach a point where we can no longer accurately determine the average length of the channel in that order. Therefore, this ratio is often no longer constant for higher Strahler orders. 

Even for the average slope of channels in a certain order, we can find a geometrical constant ratio: 

$$
R_S=\frac{\bar{S}_i}{\bar{S}_{i+1}} \tag{1.25}
$$

with $R_S$ the slope ratio number. The average slope of channels with Strahler order $i$ can be calculated with: 

$$
\bar{S}_i=\frac1N \sum_{j=1}^N S_{ij} \tag{1.26} 
$$

If we define the average drainage area for a given Strahler order as: 

$$
\bar{A}_i=\frac1N \sum_{j=1}^N A_{ij} \tag{1.27} 
$$


then we will be able to formulate the surface ratio number $R_A$ as: 

$$
R_A=\frac{\bar{A}_ i}{\bar{A}_{i-1}} \tag{1.28}
$$

>[!Note]
>Note that the denominator in Eqs. 1.22 and 1.25 use $i+1$ and the ones in Eqs. 1.24 and 1.28 use $i-1$, because $N$ and $S$ decrease in the downstream direction, while $L$ and $A$ increase, leading to positive numbers for the ratios

The fact that bifurcation (splitting), the average length and slope, and even the average drainage area of river systems is not a random development, but rather a system which obeys geomorphological laws, indicates a strong ordering system of natural drainage patterns. The resulting river network determines the way in which water and sediments are transported in the catchment. If we want to understand or simulate these transport systems, we have to take these structures into account. 

In the course Water 1, we introduced you to the relationship between the shape of the river network and the way water is discharged. In this course and with the introduced geomorphological laws, we will expand your knowledge with the physical background of these processes. 

---
## 3.3 River Mechanics
Horton's geomorphological laws, as described in the previous sections, give a geometrical description of the river network. Within a catchment, we can use these statistical laws to understand river networks and the spatial variation in hydrological regimes. The predictive skills of these laks is, however, limited. For this reason, we often use deterministic models for changes in channels, such as the construction of a secondary channel in the flood plains of the Rhine river

Deterministic models as used in hydrology and hydraulics (river mechanics) use methods from classical mechanics, which we can subdivide into statics and dynamics. Projects related to statics are for example the succumbing of river banks or the pillar of a bridge, but for example also the buoyancy of a water plant. Dynamics describe the movement of both solids (e.g. sediments) and liquids, for example the effects of a narrower part in the river. 

Classical mechanics are based on [[Newton's Second Law of Motion]]: 

$$
\overrightarrow{F}=m\overrightarrow{a} \tag{1.29}
$$


In this equation, $\overrightarrow{F}$  is the force in Newton [N], $m$ is the mass [kg] and $\overrightarrow{a}$ is the acceleration $[m \, s^{-2}]$. 

>[!Note]
>The arrows indicate a vector, which has a quantity and a direction (in contrast to a [[Scalars|Scalar]], such as temperature, which does not have a direction). 

Equation 1.29 forms the basic principle for both statics and dynamics. We will explain both processes with examples of sand particles and water flow in a river.

### 3.3.1 Statics
When the water flow in the river is not strong enough to move a sand particle on the river bottom, the condition of the sand particle is characterised by a **static equilibrium**. If we use a Cartesian axis-system with coordinates (x, y, z), this means that the sum of forces in all three directions equals 0 (equilibrium of all forces): 

$$
\begin{align}
& \sum F_x=0 \\
& \sum F_y=0 \\
& \sum F_z=0 \\
\end{align} \tag{1.30}
$$


Or, in vector notation: 

$$
\sum \overrightarrow{F} = (0,0,0) \tag{1.31} 
$$


When the sand particle resists the dragging force (the so-called **shear stress**) of the water flow on the river bottom, this means that the surrounding sand particles exercise a force in the opposite direction and equal the force of the water flow, such that an equilibrium of forces is formed. The water flow normally has to overcome a certain threshold in order to break through the static equilibrium resulting in a motion of the sand particle. If this happens, the sand particle will experience a **translation**. A translation is a shift or movement without a rotation. 

A static equilibrium is not only characterised by an equilibrium in forces, but also by an equilibrium of torque: 

$$
\begin{align}
& \sum M_x=0 \\
& \sum M_y=0 \\
& \sum M_z=0 \\
\end{align} \tag{1.32}
$$


Or, in vector notation: 

$$
\sum \overrightarrow{M} = (0,0,0) \tag{1.33} 
$$


**Torque** is the product of a force times the arm (distance) of that force, or in vector notation: 

$$
\overrightarrow{M} = \overrightarrow{r} \times \overrightarrow{F} \tag{1.34} 
$$


Here $r$ is the 'arm', which we can display as a vector, because it is a unit with both a quantity and a direction. When the torque is not in equilibrium in one of the three directions, the sand particle will experience a rotation. Hence, the absence of an equilibrium opf $M_x$, $M_y$ or $M_z$ results in a rotation around respectively the x-axis, y-axis or z-axis. 

We can thus explain the static behaviour of a sand particle on the river bottom as a simultaneous occurrence of six equilibria: an equilibrium of forces in three directions and a torque equilibrium on three axes. Statics, as described above, are the basics to describe whether for example the banks of a river, a pillar of a bridge or a dike will succumb due to the forces and torque of water that act on it. 

When the water movement exceeds the threshold for movement of the sand particle, the particles will roll, slide and jump over the river bottom, or the particles will move with the water in **suspension** (i.e. 'floating' in the water). Most rivers in the world travel enormous amounts of sand or other sediments

### 3.3.2 Dynamics
Also in dynamics, where we try to quantify water movement and the transport of sediments, the second law of Newton is important. We will have to rewrite Eq. 2.29 in order to use this equation for a liquid: 

$$
\overrightarrow{F} = m\overrightarrow{a} = \frac{\delta}{\delta t}(m\overrightarrow{v} \,) \tag{1.35}
$$


The product of mass and velocity in this equation $(m\overrightarrow{v} \,)$ is called the **impulse** (vector), which has the same direction as the velocity. Hence, a force is the change of an impulse in time. The application of this law to river water, with or without suspended sediments, starts with setting up a control volume. A control volume of a river has imaginary boundaries and is both in static and dynamic equilibrium. This means that we can set up a balance of mass and impulse for this control volume. 

![[20240227_153102.jpg]]

We can set up a mass balance when we define the control volume with two boundaries transversal to the water flow. The distance between those two boundaries is $\Delta x$. When more water flows through the upper boundary than through the lower boundary, the water level will increase in the control volume. Vice versa, when more water leaves the control volumes than that water enters, the water level of the control volume will drop. Here, we assume that there is no water exchange with the groundwater (so no infiltration or drainage) and that the flux on the upper boundary (the water level), e.g. precipitation, is negligible. 

For sediment transport, we can make a similar balance with a control volume. When more sediment enters than leaves the control volume, there will be a sediment increase in the control volume. If this happens, there will be 2 options: the concentration of sediment in suspension will increase (the water will get more turbid) or sedimentation will take place. Sedimentation within the control volume can raise the river bottom or form river banks. With such a simplified mass balance, we can solve many problems in river functioning, but for some complex problems when the water velocity is of importance, we have to solve the impulse balance next to the water balance. 

>[!Info]
>To solve three dimensional water flow in detail, we have to make a mass and impulse balance for an infinitesimally small control volume. This means extremely small, but not infinitely small, because the volume should be larger than the scale of molecules. Both balances will become a coupled system of differential equations, which is very difficult to solve analytically. With the growth in computer power, solving this system is getting closer, but it will take many years before we are really there. Hence, our current models are not yet able to simulate sediment transport of every individual particle on the scale of a river by solving these equations.

The transport of sediments depends heavily on the drag force of the river flow at the bottom of the river, together with the mixing forces by turbulent fluctuations in the flow, which results in suspended sediments. Streamflow details determine the river's capacity to transport sediments. As described above with the help of the mass balance, streamflow gradients can result in changes in the river morphology. The river morphology, in its turn, determines the boundary conditions of the water flow. Characteristic for coupled rivers systems is that changes in water movement, both in space and time, take place much faster than change in the river morphology. 

---
## 3.4 Meandering
Not all rivers look the same from above. Generally, we have the following subdivision in river patterns
- **Straight**: the river has a clear channel and it has barely any bends
- **Meandering**: the river shows a large sequence of bends
- **Braided**: this pattern is characterised by a river which has many different channels that intersect or cross each other, and then converge or diverge again, like the strands of a braid. We often see this pattern in sandy river banks with a strongly changing discharge and/or steep hill slopes. Hence, this river pattern often occurs in mountainous areas
- **Anastomosing**: we find this pattern in rivers with clayey banks and low streamflow velocities, such as delta regions. 

It is not always easy to distinguish the different patterns, but from laboratory experiments, we know that the patterns are mainly determined by the slope. 

>[!Info]
>The straight pattern is the least occurring pattern; at least for natural rivers. Most rivers on Earth have a meandering pattern, while only a small part shows a braided pattern

Why does a river meander? This has to do with the strive of the river for an energetic condition that is as low as possible. A too high streamflow velocity and shear stress (the force which pushes on the sediment particles) will result in a movement of the sediment from the river bottom. This movement lasts until the river bed and banks have reached a new shape, in which sediment transport is minimal. A river will always 'strive' for such an energetically favourable shape,. as long as that is possible within the current boundary of conditions as determined by external processes, such as sea level rise or plate tectonics. These external processes determine the height difference the river has to bridge between the source and the debouchment. 

We can quantify to which extent the river meanders with the so-called [[Sinuosity]]. Sinuosity is the ratio between the actual distance of the river (measured alongside the river channel) and the shortest possible distance when the river would have been straight. A straight line / river thus has a sinuosity of 1. 

>[!Info]
>Most natural meandering river systems have a sinuosity of about 1.5. In areas with sufficient slopes in their valleys, the sinuosity can reach 4.

Meandering bends, however, have a negative effect on navigation, because of the larger distance boats have to travel. For this reason (but also for fast discharge), many natural meandering rivers were straightened

As you have seen in the course Water 1, there is a relationship between the streamflow velocity of the river, the roughness of the river bottom and the gradient, as described with the [[Chézy Equation]]. In the case the gradient of the river changes due to aforementioned external processes, the river will try to return to its old equilibrium state. The river can change its length (and with that the gradient and sinuosity), by having more or fewer meanders. 

A river starts meandering due to a heterogeneous distribution of the sediment particles in the river bed, meaning that at some locations in the bed, there are more large particles and in other more small particles. Because of this, particles are not uniformly distributed, but they gather in banks, resulting in erosion at this side (the outer bend). Meandering is an active process and therefore, meandering rivers are in a dynamic equilibrium.

In a meander, erosion takes place  in the outer bend, while deposition takes place in the inner bend. The result is that the meander bend will slowly move in the downstream direction. The shape of the meander is quite stable during this process, but it is possible that 2 meander bends cross and cut each other off. The old meanders will remain in the landscape as local lows.

>[!Info]
>The [[Thalweg]], the line that connects the deepest points along the river, is not in the middle of the river in meandering bends due to the asymmetry of these meandering bends

Just like many other geomorphological characteristics of rivers, meander shapes show a remarkable uniformity. Because of this, it is difficult to distinguish 2 rivers with different sizes, with are not drawn on a scale, based on their meander shapes. Several characteristic meander sizes are couples. 

>[!Info]
>Geomorphological research has shown that there is an almost linear relationship between the width of the river and the length of its meanders (here, the meander length is defined as the length of one meander cycle)

Also between the meander length and the average radius of the curvature (the width of the meander), there is an almost linear relationship present. Longer meanders have a larger radius of curvature. This holds for almost every possible length scale and other things than rivers. 

#### 3.4.1 A Model for the Shapes of Meanders
If we want to mathematically describe the shape of regular meanders, we have to use an equation which strives for a distribution of changes that is as evenly distributed as possible. Leopold et al. (1995) argued that the best mathematical model for this is a so-called sinusoidal curve: 

$$
\Theta = \Theta_\text{max} \Bigl( 2 \pi \frac sM \Bigr) \tag{1.36} 
$$

With
- $\Theta$ the angle (in $\degree$ ) measured between the local streamflow direction $s$ and the average downstream direction of the system $x$. 
- $\Theta_{\text{max}}$ is the maximum value of $\Theta$
- $s$ is the distance alongside the [[Thalweg]] of the river
- $M$ is the total distance alongside the [[Thalweg]] of one meander cycle

>[!Note]
>The variation in the deviation of the angle with direction $x$ alongside the curve, is lower for a sinusoidal curve than for a normal sinus curve or a curve mande from circular parts. This shows that a river tries to minimise and equally distribute the energy use for the transport of water and sediment. Hence, the meander shape is a compromise between on the one hand the strive for an equal distribution of the change in shear stress alongside the river bed and on the other hand, an optimisation of the energy use necessary for transport of water and sediments. That is why meanders all look similar. 

---
## 3.5 The Influence of Extremes
In [[Reader Water 2-Chapter 1.2-Hydrological Extremes|Chapter 1.2]] we introduced hydrological extremes and the return period of these extremes. Within the subject of river morphology, it is interesting to explore the effect of these extremes on the morphology

If we look at a certain point alongside the river, the cross-section has a shape and size which allows the river to discharge the most occurring discharges within its banks. With the most occurring discharges we mean low discharges or discharges around the average discharge. High discharge amounts, so the less frequent discharge amounts, result in higher water levels than what fits within the river banks. In such a case, part of the discharge will take place over the floodplains next to the river. The flood plains of a river are the flat lands next to the river, which are created in the landscape under the occurring climatology by regular floods of the river. 

The processes which determine the current cross-section of the channel, are erosion and deposition. Why does the cross-section of the river reach certain dimensions? Low discharges often occur, but these amounts only have a limited eroding power. The extreme discharges, however, have a much higher eroding power, but they rarely occur. Hence, the dimensions of a river are determined by the discharge which occurs frequent enough, but which also has sufficient eroding power. This discharge amount is called the [[Bankfull Discharge]]

The bankfull discharge has a return period of approximately 1.5 years: so, on average two times per three year, the bankfull discharge is reached or exceeded. This amount is sufficient to determine the shape and dimensions of the river. On the average, the annual maximum discharge has a return period of approximately 2.5 years. Hence, it is very normal (and unavoidable) that a river floods occasionally. People often seem to ignore the natural behaviour of rivers, which results in high damages and costs after an inundation of the river. Fortunately, this is changing.

>[!Note]
>Extreme discharges sometimes lead to sudden and large changes, for example in the course of a meandering river. 

---
## 3.6 Hydraulic Geometry
As described in the previous sections, the dimensions (hydraulic geometry: width, depth and slope) of the cross-section of the river are as such that the most occurring discharges are transported within the banks of the river. Only twice per three years (on average), the river will be completely filled. So, how does the hydraulic geometry of a given cross-section vary with the discharge?

![[20240227_160534.jpg]]

The figure above displays 2 cross-sections (one close to the source and one close to the [[Debouchment]]) in the river for 2 different discharges (small and large discharges). When the discharge increases from a small to a large discharge (from B to D), the width $b$ and depth $h$ of course increase with discharge $Q$. 

If we follow the river from source to outlet (so from C top D in the figure above), then we see that the sizes of the cross-sections will gradually increase. This is because the discharge (and also the bankfull discharge) increases with an increasing draining surface area of the river. Based on a long dataset of discharge measurements, Leopold et al. (1995) concluded that there is an almost linear relationship between the average annual discharge and the drainage area: 

$$
Q_{\text{ave}} \cong A^{1.03} \tag{1.37} 
$$


The bankfull discharge $Q_{\text{eff}}$ increases non-linearly with the drainage area: 

$$
Q_{\text{eff}} \cong A^{0.8} \tag{1.38}  
$$


>[!Note]
>The bankfull discharge only occurs after severe rain showers and such severe rain showers are never large enough to cover the entire area of large catchments. Therefore, the bankfull discharge increases less than the average yearly discharge with increasing drainage area. 

