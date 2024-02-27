---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Water 2]]"]
Draft: 
Status: Done
Authors: 
Year of Publication: 2024
Related Notes: 
Related Terminology: 
Related Courses: ["[[Water 2]]"]
---
### 1.2.1 Introduction
For many applications, the normal or average discharge is less relevant than the extremes. What is the probability of getting a very high or very low discharge? In this section we will talk more about the so-called "wet" extremes, floods and severe precipitation events, and droughts. Based on discharge time series (the [[Hydrograph]]), we can calculate probabilities of exceedance and return periods. If we want to conduct studies for certain scenarios (land use or climate change), we will need a simulated discharge time series (the output of the models from the previous section).

In this section, we will explain how you can use a time series for flow duration curves (Sec. 2.2.3) and extreme values analysis (Sec. 2.2.4). This can be used for e.g. the calculation of rainfall depth-duration-frequency curves (Sec. 2.2.5), which are in turn used for water system design (Sec. 2.2.6). Finally, we give some background on drought processes and analyses (Sec. 2.2.7)

---
### 1.2.2 Societal Context
#### 1.2.2.1 High Flow
When water falls down on earth, an enormous amount of water is actually distributed over the land surface. A rain shower of 25 mm over the entire Netherlands equals 875 million m$^3$ of water. This is certainly not an exceptional rain shower, but normally this would not result in floods. Hence, only a fraction of the total precipitation amount will be discharged via surface runoff to the rivers. When at the start of the rain shower, the storage capacity of the catchment soils is small, e.g. during wet periods, floods can occur

A high flow or flood is an above-normal river discharge. If the river has a floodplain, part of this discharge will take place over these floodplains. 

Extreme high flows and extreme floods, which cause inundations, have occurred throughout history. There are long periods of river water level observations during floods for various rivers, e.g. the Nile. The corresponding river discharge, however, was often not measured. The systematic registration of discharges during large floods started in most countries during the second half of the 19th century. Hence, our statistical analysis of high flows is based on a relatively short measurement time series.

#### 1.2.2.2 Low Flow
Floods are not the only hydrological extreme causing damage to nature and society. Drought can lead to crop damage, (irreversible) damage to aquatic and terrestrial ecosystems, low river water levels which hamper navigation, salt intrusion at the river delta, lack of cooling water for electricity plants, and many other negative situations. 

Drought is defined as a situation with less water than normal. Its effect on society, meaning having less water than needed, is called water scarcity. It is possible that these two do not coincide, for example when there is less water than normal in the middle of winter. 

>[!Note]
>In this section we focus on the Hydrology, so on drought, rather than water scarcity

#### 1.2.2.3 Extreme Precipitation
Besides causing floods, extreme precipitation events can also lead to landslides and inundated streets when the sewage system capacity is exceeded. Knowledge about extreme precipitation events is thus very important for warnings of dangerous weather, for advice to citizens, for water damage insurances and of course for our scientific knowledge

>[!Example]
>In order to prevent damage, we have to formulate certain design criteria. Society has to decide what risk is acceptable, for example how often a certain flood is allowed to occur. As a result of that, scientists can estimate the probability of certain precipitation sums and the resulting discharge. We use these amounts to design channels, storage basins and pumping stations

---
### 1.2.3 Flow Duration Curve
If our discharge time series at a certain location along the river is long enough, we will be able to construct [[Flow Duration Curves]] which describe the relationship between certain discharge amounts and the **exceedance probability** of these discharge amounts. Obviously, a small discharge has a higher probability of exceedance than a large discharge amount. 

To design a flow duration curve, we will have to follow the following steps. 
1. Choose a time interval $\Delta t$ for which you want to design the flow duration curve (e.g. a number of days)
2. Calculate the average discharge for every time step. When you have hourly observations, but want to design the curve for daily discharges, you average over 24 hours
3. Order these discharges from large to small
4. The highest discharge is exceeded during $\frac{1}{N+1}$ of the time steps, the second highest discharge is exceeded during $\frac{2}{N+1}$ of the time steps, and so on. Here, N is the total number of time steps. Hence, the smallest discharge is exceeded during $\frac{N}{N+1}$ of the time steps.
5. Plot these discharges against their time of exceedance. 

>[!Missing]
>Insert Fig. 2.13

The figure above displays the **dimensionless flow duration curve** (sometimes called exceedence plot) of daily discharge amounts for the Rhine, Meuse, Hupsel Brook and Rietholzbach. We can obtain dimensionless flow duration curves by dividing daily discharges by the average discharge ($Q/Q_{ave}$), followed by plotting these values on the Y-axis. With the flow duration curve, we can determine the frequency of occurrence of certain characteristic discharges. 

>[!Important]
>
>We can also determine the average daily discharge from these curves. In dimensionless flow duration curves, we can find this at $Q/Q_{ave}=1$. 

>[!Info]
>For most rivers, the average daily discharge is exceeded about 30% of the time (about 100 days a year). Hence, the average daily discharge is actually a relatively high discharge

Another measure for river discharge is the median discharge. This is a discharge which is exceeded 50% of the time. The median discharge is lower than the average discharge, which shows that the distribution is not symmetric: there are many days with relatively low discharge and a few peaks with a large influence on the average.

The shape of the flow duration curve tells us much about the flow characteristics of the river. A relatively flat curve indicates a more evenly distributed discharge. For such a river, the probability of extremely high discharges is quite low. Catchments can have such a gradual flow duration curve when there is for example a high storage capacity on soils, brooks or lakes. Precipitation will have a slower and more evenly distributed transport towards the river, or most water flow takes place via groundwater flow (which is also much slower than surface runoff)

Below we see the hydrographs of the Meuse and Rhine

>[!Missing]
>Insert Fig. 2.1

If we compare the hydrographs and dimensionless flow duration curves of the Meuse and Rhine, we will immediately see that the flow duration curve of the Rhine is much less steep than the curve of the Meuse. The river Meuse is a typical rain-fed river, which responds quickly to intense precipitation events, because much surface runoff and macropore flow is formed in the Belgian Ardennes. On the other hand, during prolonged dry periods, the discharge will decrease quickly, while the Rhine still delivers plenty of water during these periods (partly glacier and snow melt). Besides this, the shape and size of the catchment also influence these processes. A small catchment will react faster to precipitation events. Large catchments will never have rain at the same place at the same time, so discharge shows a more gradual pattern.

---
### 1.2.4 Extreme Value Statistics
#### 1.2.4.1 Exceedance Probabilities and Return Periods
The **exceedance probability** of a certain discharge is the probability that this discharge will be exceeded during a (random) year at a certain location. Another way to express this, is by determining the **return period** of that discharge. The return period is a way to express how many years we have to wait (on average) before a certain discharge will take place again. The exceedence probability $p$ (per year) during a certain year and the return period $T$ (in years) relate to each other in the following way: 

$$
T=\frac{1}{p} \tag{1.11} 
$$


The determination of the exceedance probabilities and the return periods of certain high flows is crucial for our protection against floods. Dike heights in the Netherlands, for example, are based on the so-called **design discharge** of the river. A design discharge is the discharge that corresponds to a certain return period. The government decides what this return period should be. Subsequently, we determine the design water levels from the design discharge, which eventually determines the dike heights. 

>[!Info]
>The return period used to determine the design discharge for the large rivers in the Netherlands is 2000 years. Hence, here, dikes should have a height which should be sufficient to assume that only once every 2000 years a flood can take place. 

#### 1.2.4.2 Relationship between Return Periods and the Probability of High Waters
We want to calculate the probability that a discharge with a return period of $T$ (e.g. 1250 years) is exceeded one or more times during a period of $n$ years (e.g. 100 years). The probability that a discharge with a return period of $T$ years is not exceeded during 1 year equals 1 minus the probability that this discharge is exceeded in that year; hence, $1-p$, which we can write as $1-\frac{1}{T}$ (according to Eq. 2.11)

Since high discharge peaks in separate years are independent of each other, we can multiply the probabilities with each other in order to calculate the probability that a discharge with a return period of $T$ years will not be exceeded during $n$ years. And, since all these probabilities are the same, this simply gives $(1-\frac{1}{T})^n$. The probability that this discharge is exceeded in $n$ years, is then $1-(1-\frac{1}{T})^n$. This seems unnecessarily complex, but because the discharge can be exceeded more than once, this is not the same as $(\frac{1}{T})^n$. For $T=1250$ years and $n$ = 100 years, this is 7.7%

Besides, the probability that a discharge with a return period of $T$ years gets exceeded during a period of $T$ years for one or more instances, does not equal 1. If we use this precious equation and change $n$ for $T$, we will get a probability of 'only' 63%.

#### 1.2.4.3 Annual Maxima
For extreme value statistics, we start with selecting the annual (yearly) maxima of a discharge or precipitation time series. We can plot these annual maxima against the exceedance probabilities in a similar way as done in Section 2.2.4 and Fig. 2.13. If we do this for the Rhine at Lobith and the Meuse at Borgharen, we find the following figure (left)

>[!Missing]
>Insert Fig. 2.14

We call this a [[Cumulative Probability Distribution]]. By interpolating the results, we can easily find the corresponding annual maximum discharge for a certain probability exceedance (e.g. 10%). For 10%, we find $9.4 \times 10^3$ m$^3$ s$^{-1}$ for the Rhine. The corresponding return period is then (see Eq. 2.11) $T=10$ years. So on average, once every 10 years a discharge of $9.4 \times 10^3$  m$^3$ s$^{-1}$ or more occurs in the Rhine river. 

The largest return period which we can read from the figure above is $N=1=108$ years. This means that, if we want to determine a design discharge for a larger return period, we will have to extrapolate this graph to the left. That is extremely difficult. Actually, with this method, it is not even possible to determine the design of discharge of the Rhine at Lobith for a return period of 1250 years. Nevertheless, for water safety, we want to be able to estimate a design discharge for a return period longer than the available time series. This means that we are going to determine the probability of a certain event that has never been experienced. To make such an extrapolation possible, we use extreme value statistics.

#### 1.2.4.4 Gumbel Distribution
We can fit a probability distribution through annual maxima (or maxima above a certain value), which allows us to estimate the precipitation sums that correspond to certain return periods. An often used probability distribution for this purpose is the [[Gumbel Distribution]]: 

$$
x(p)=\mu - \alpha \ln(1 - \ln (1-p)) \tag{1.12} 
$$

Where:
- $x$ is the discharge or precipitation for a certain exceedance probability $p$ (a year)
- $\mu$ is the location parameter
- $\alpha$ the scale parameter

Both $\mu$ and $\alpha$ are empirical parameters with the same unit as $x$

Usually, we transform $p$ before plotting it. The transformed value of $p$ is called the [[Gumbel Reduced Variate]] ($y$): 

$$
y(p)=-\ln (-\ln (1-p)) \tag{1.13} 
$$


And with that, Eq. 2.12 turns into 

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


From equation 2.12 we are now able to calculate the discharge that corresponds to a certain return period. Here, we assume measurements follow the Gumbel distribution, even for extreme values which we have never measured. Besides, we also assume that this distribution holds for future values. The parameters  $\mu$ and $\alpha$ can, however, change due to for example changes in the upstream part of the river. A change in land use or climate cal also result in different values for the parameters of this distribution. Therefore, our current estimations of the discharges for return periods of 1250 years or more has quite some uncertainty. 

#### 1.2.4.5 GEV Distribution
The Gumbel distribution is often used for extreme precipitation sums, but this distribution is actually not suited for this purpose, because it underestimates the precipitation sum for large return periods. The [[GEV Distribution]] or [[GEV Distribution|Generalised Extreme Value Distribution]] is a better way to estimate this upper tail of the probability distribution. Beside the location parameter $\mu$ in mm and scale parameter $\alpha$ in mm, the GEV distribution also has a shape parameter $k$ (no unit)

>[!Missing]
>Insert Fig. 2.15

The GEV distribution combines three asymptotic extreme values distribution with the value for $k$: the Gumbel distribution when $k=0$, the [[Fréchet Distribution]] when $k \lt 0$ and the [[Weibull Distribution]] when $k \gt 0$. The Fréchet distribution has a longer tail than the Gumbel distribution, while the Weibull distribution has a shorter tail.

The [[Quantile Function]], with which we can calculate the precipitation sum for a certain exceedance probability, equals for a GEV distribution with $k\not= 0$: 

$$
x(p)= \mu + \frac{\alpha \{1- [- \ln (1-p)]^k \}}{k} \tag{1.16}
$$

We often simplify this equation to: 

$$
x(y)=\mu + \alpha \frac{1-\exp(=ky)}{k} \tag{1.17} 
$$

With $y$ again being the Gumbel reduced variate (Eq. 2.13)

In order to obtain $\alpha$, $\mu$ and $k$ for a certain location, we have to fit the GEV distribution for annual maxima. For this, we need a dataset with many years of data (> 100 years), which is often not available. 

### 1.2.5 Rainfall Depth-Duration-Frequency Curves
Often, we present extreme precipitation statistics as [[Rainfall Depth-Frequency Curves]], also called [[Rainfall Depth-Frequency Curves|DDF Curves]]. These curves give for different return periods or exceedence probabilities, the precipitation sum as a function of the event duration. Especially for short durations, the precipitation intensity is often used instead of the precipitation sum ([[Rainfall Intensity-Duration-Frequency Curves]]; [[Rainfall Intensity-Duration-Frequency Curves|IDF Curves]]). The method to determine both types is comparable. In the next section, we will explain how we can derive rainfall DDF curves

#### 1.2.5.1 Extreme Value Statistics of Spatial Precipitation
For hydrological purposes, one is often not interested in point measurements of precipitation sums, but rather in the precipitation sum of an entire catchment. We can use radar to determine the rainfall depth-duration-frequency curves of larger surface areas. For extreme values, the average precipitation sum significantly decreased with increasing surface area (for the same $D$ and $T$). We can describe this decrease by making use of the smallest available surface area, which gives us **Areal Reduction Factors**. Areal reduction factors are small for small durations, for which the extreme sums are caused by severe and local (convective) showers, which can only affect a small area for a short duration.

---
### 1.2.6 Using Rainfall Depth-Duration-Frequency Curves for Design
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
- The (cumulative) storage change ($\Delta S$) is a horizontal line corresponding to the storage capacity, bnecause the storage capacity can only be filled once and does not increase over time

>[!Missing]
>Insert Fig. 2.20

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
### 1.2.7 Drought
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

