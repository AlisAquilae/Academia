---
fileClass: Base, Summaries
title: 
Parents: ["[[Catchment and Climate Hydrology]]"]
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Catchment and Climate Hydrology]]"]
---
# Module 1: Climate and the Water Cycle
## Eagleson (1994)

>[!Question] Question 1.1
>The so-called systems approach is central to much of the work described in the paper by Eagleson. What is meant by systems approach, and can you give 2 examples from the discussed research that use this approach?
>
>>[!Check]- Answer
>>In hydrology, a systems approach means the study of a catchment or hillslope (or any other element) as a system with inputs, system states, and outputs. The examples of flow paths in the atmosphere (Fig. 10) and the model of vegetation water use (Fig 17) are good examples of the systems approach.

>[!Question] Question 1.2
>Which key challenges were identified by Eagleson in 1994, and what can you say about their relevance today?
>
>>[!Check]- Answer
>>Scale and human-induced global change are identified as key challenges. 
>>
>>Scale refers to the interconnectedness of Earth system processes (e.g. El Niño). To understand these properly, one needs to include the entire hydrological system as well as its interaction with other systems, like the land surface, the atmosphere and the oceans
>>
>>Human-induced global change refers to the effect humans have on our planet. This, therefore, requires decoupling the physical Earth system from the social one, as these affect and interact with each other

>[!Question] Question 1.3
>What is meant by the hydrologic scale, and how is it different from the catchment scale?
>
>>[!Check]- Answer
>>The hydrologic scale is the effective lateral shift of the water molecules constituting P, as they leave the surface in E and return in P. Because evapotranspiration is so sensitive to land surface conditions and change, the hydrologic scale is the effective radius of influence of this change (including feedbacks with the atmosphere) and is therefore of considerable practical interest. It differs from the catchment scale which is relevant because it marks the domain of influence without feedbacks (only topographic convergence).

## Schaefli & Gupta (2007)

>[!Question] Question 1.4
>Study Eqs 1 and 2 in Schaefli & Gupta and describe their difference
>
>$$
>NSE = 1 - \frac{\sum\limits_{t=1}^N [q_{obs} (t) - q_{sim} (t)]^2}{\sum\limits_{t=1}^N [q_{obs}(t) - \overline{q}_{obs}]^2} \tag{1}
>$$
>
>$$
>BE = 1 - \frac{\sum\limits_{t=1}^N [q_{obs} (t) - q_{sim} (t)]^2}{\sum\limits_{t=1}^N [q_{obs}(t) - q_b (t)]^2} \tag{2}
>$$
>
>>[!Check]- Answer
>>In Eq. 2, the mean observed discharge has been replaced by a baseline discharge which is (or can be) a function of time of year. This baseline discharge can be the climatology, or the result from any (simplified) model run.


>[!Question] Question 1.5
>Consider Table 1 in Schaefli & Gupta. Explain how the NSEB is calculated and what the difference is with BE
>
>>[!Check]- Answer
>>The NSBE is the NSE for the benchmark model. In this case, this is simply the interannual mean value for every calendar day. Because of the strong seasonal signal, this model already achieves a high NSE. The BE is the benchmark efficiency (Eq. 2), which can be seen as a correction of the NSE for NSBE


>[!Question] Question 1.6
>From the paper by Schaefli & Gupta, it is clear that different evaluation criteria and ways to apply these criteria exist, and that these can impact not only inferred model parameters but also whether a simulation is judged good or not. What can you identify as a central element in model evaluation?
>
>>[!Check]- Answer
>>The metric has to be selected or interpreted based on the research question and characteristics of the timeseries. NSE values are generally higher for catchments with high than with low flow variability and that logarithmic transformation puts more emphasis on low flow conditions. In Schaefli and Gupta, it is argued that in catchments with a strong seasonality, the baseline should not be the mean but the mean seasonal cycle


## Albertson & Kiely (2001)
>[!Question] Question 1.7
>Albertson & Kiely use limited data from just 2 sites in their study. What do you think was the main novelty and contribution at the time of publication?
>>[!Check]- Answer
>>At the time of publication, few long-term high-accuracy observations of soil moisture dynamics were available. This in combination with a new conceptual modelling framework was the main contribution.


>[!Question] Question 1.8
>Describe in your own words why Albertson & Kiely refer to drainage/leakage as a fast process, and evapotranspiration as a slow process
>>[!Check]- Answer
>>Drainage fluxes are a much more strong function of soil moisture in wet conditions than evapotranspiration under dry conditions. As a result, the timescale corresponding to these processes differ


>[!Question] Question 1.9
>Fig. 4 in Albertson & Kiely shows the correspondence between the observed and simulated soil moisture content. Provide multiple arguments why you think the model fits are good/poor
>
>![[Pasted image 20250424110229.png]]
>
>>[!Check]- Answer
>>Dynamics are generally well simulated, but increases after rainfall are not consistent. This can be due to errors in rainfall observations are processes such as preferential flow not represented in the model


>[!Question] Question 1.10
>In both the Albertson & Kiely and the Laio et al. models, the loss function is a central element controlling the soil moisture dynamics and distribution. How is the loss function defined in Albertson & Kiely, and what are the similarities and difference in the shape and parameterisation of the loss function?
>
>>[!Check]- Answer
>>The main difference between the models is that Laio et al. assume there is no drainage flux below field capacity, whereas the field capacity is not well defined in the other model


>[!Question] Question 1.11


## Hoek van Dijke et al. (2022)

>[!Question] Question 1.12
>The study by Hoek van Dijke calculates changes in ET and Q based on six different Budyko models and/or parameters sets. What is the main advantage of doing so? And what is the main difference between the models?
>>[!Check]- Answer
>>Using an ensemble of models will generally lead to a more robust estimate. In this particular case, the different models are fitted to several independent datasets from different parts of the world, making it more likely that the simulated values are realistic across different climate zones



>[!Question] Question 1.13
>Consider the gridded maps of water availability (streamflow) in Fig. 1e and 1f in Hoek van Dijke et al. Explain, using Extended Data Fig. 1, why 1e has only positive changes, and 1d both positive and negative.
>
>![[Pasted image 20250424110658.png]]
>
>![[Pasted image 20250424110720.png]]
>
>>[!Check]- Answer
>>Fig 1.e shows the streamflow changes without recycling. The Budyko models only predict negative streamflow changes following afforestation across all climates (negative changes in Extended Data Fig. 1). Fig 1f generally shows the same pattern, but especially in tropical areas shows large areas with more uniform slightly positive changes due to enhanced rainfall due to recycling 


>[!Question] Question 1.14
>While most simulated discharge values for the different basins in Hoek van Dijke et al. lie close to the 1:1 line, there are some outliers. Which basins are they, and could you think of reasons why the discharge is off there?
>>[!Check]- Answer
>>In particular the Murray-Darling and Colorado show a poorer fit. Both basins flow through (semi-)arid regions with extensive irrigation and abstractions that are not included in the model, making it a logical result that the simulated values are higher. 


>[!Question] Question 1.15
>Consider Fig. 2. What is the main reason that in some basins (Amazon, Yangtze) the precipitation recycling in Hoek van Dijke et al. nearly counteracts the impact of forest cover changes, while in other basins such as the Rhine this effect is much smaller?
>
>![[Pasted image 20250424112214.png]]
>
>>[!Check]- Answer
>>As moisture from evapotranspiration is being transported downwind to form new precipitation, deforestation in upwind parts of the Amazon will have a larger impact on the stability of the Amazon as a whole. It can influence precipitation all over the region, whereas deforestation in the downwind areas will have a more localised effect on climate and precipitation




---
# Module 2: Runoff and Drought

## Kirchner (2009)

>[!Question] Question 2.1
>Equation 2 in Kirchner (2009) represents the key assumption behind the method. Explain why it is not necessary to distinguish between unsaturated and saturated storage, and how realistic you think this assumption is
>
>$$
>Q = f(S) \tag{2}
>$$
>
>>[!Check]- Answer
>>Kirchner assumes that the discharge reflects the total catchment storage, so saturated and unsaturated combined. This assumption might be realistic in catchments with shallow groundwater tables in which groundwater levels exert a strong control on unsaturated zone processes, or where runoff processes are strongly storage-driven. 


>[!Question] Question 2.2
>Consider Figure 7d in Kirchner (2009). Which catchment is likely to generate extreme discharge?
>
>![[Pasted image 20250424112534.png]]
>
>>[!Check]- Answer
>>The Wye river catchment generates higher runoff rates for the same storage and/or storage increase, making it likely that this catchment will also have higher runoff rates


>[!Question] Question 2.3
>Figure 13 in Kirchner (2009) shows an extreme sensitivity of modelled flood peaks to antecedent moisture conditions. How are the antecedent moisture conditions accounted for in the application of the model?
>
>![[Pasted image 20250424112737.png]]
>
>>[!Check]- Answer
>>When the simple dynamical systems approach is used to model discharge, it needs initial values of discharge rather than storage. These discharge values reflect the storage conditions


>[!Question] Question 2.4
>Section 13 in Kirchner (2009) represents an application of the model to do "hydrology backwards". What is meant by this? And why is it so useful?
>
>>[!Check]- Answer
>>The model can be used to estimate $P$ from $Q$ rather than estimating $Q$ from $P$. This can be useful for filling-in missing $P$ observations or to estimate precipitation in areas without rain gauges


>[!Question] Question 2.5
>Figure 21 proposes a conceptual model to explain the results from the Plynlimon catchments in Kirchner (2003). Explain how this model is consistent with the results in Figure 7 (See above)
>
>![[Pasted image 20250424113142.png]]
>
>>[!Check]- Answer
>>Under wetter conditions, groundwater tables are higher, leading to more easy transport of water due to higher porosity and conductivity. Also, the slope of the groundwater table might be higher under wetter (higher storage) conditions


## Gevaert et al. (2014)

>[!Question] Question 2.6
>The paper by Gevaert et al. describes an experiment in Biosphere II. What makes the experimental hillslope unique, and what is the benefit of this facility in comparison to making similar observations in a natural hillslope?
>
>>[!Check]- Answer
>>Under laboratory conditions, flow processes at the hillslope scale can be studied in absence of natural variability in for instance soil properties and soil depth, allowing for more general conclusions. Such experiments also make it possible to integrate instruments and sensors throughout the hillslope, which would not be possible in natural systems


>[!Question] Question 2.7
>Figure 7 in Gevaert et al. shows the distribution of the saturation phases. Can you explain the patterns at the different timesteps?
>
>![[Pasted image 20250424113750.png]]
>
>>[!Check]- Answer
>>Figure 7 shows how first an infiltration front propagated from the surface downwards. Upon reaching the bottom, saturation occurred and groundwater tables moved upwards. A local rise in the groundwater table can be seen nar the channel in the cross-section, indicating the effect of the 3-dimensional flow field in the convergent zone. 


>[!Question] Question 2.8
>Describe what is understood by groundwater ridging. How does the topographic convergence in the hillslope contribute to this phenomenon?
>
>>[!Check]- Answer
>>Groundwater ridging is the formation of a local peak in groundwater tables near the stream in areas with shallow groundwater tables. Given the shallow groundwater tables, groundwater ridging might have played a role in the formation of the cross-sectional groundwater profile


## Kirchner (2006)

>[!Question] Question 2.9
>Study the empirical evidence provided in Figures 1 and 2 in the paper by Kirchner. How does this evidence lead to the formulation of the two paradoxes, and are the results indeed paradoxal?
>
>![[Pasted image 20250424114247.png]]
>
>![[Pasted image 20250424114300.png]]
>
>>[!Check]- Answer
>>Figure 1 in Kirchner shows the direct response of streamflow to rainfall, but the lack of response in streamflow chemistry. This shows the paradox that streams responds fast, but that streamwater itself is generally old. Figure 2 shows that the different (reactive) chemical tracers either increase or decrease with streamflow, showing that not all old water is the same. Since concentrations might change with flow routes (and thus storage/discharge), this observation is less paradoxal


## Ault (2020)

>[!Question] Question 2.10
>Ault (2020) discusses the use of land surface models (LSMs) to simulate soil moisture and drought. What is identified as a main problem in this respect?
>
>>[!Check]- Answer
>>The quality of LSM output is only as good as its model forcing. Since reliable forcing at the global scale is available only for the past decades, the simulated time period is short with respect to interannual variability and especially decadal variability


>[!Question] Question 2.11
>The standardisation process in drought quantification provides an image that drought is a random, stochastic process that has a quantifiable return period. How does Figure 1 in Ault change your perspective on drought as a stochastic process?
>
>![[Pasted image 20250424115010.png]]
>
>>[!Check]- Answer
>>Figure 1 shows that drought in many regions is associates with ENSO. This means that in these regions, depending on the sign of the correlation, drought will be more or less likely in El Niño years, i.e. the decadal variability partly overwrites the stochastic nature of precipitation variability. 

>[!Question] Question 2.12
>What cause does Ault mention for drought in western and southern Europe?
>
>>[!Check]- Answer
>>Seasonal modes of variability such as the North Atlantic Oscillation (NAO) can modify storm tracks crossing the Atlantic. During the positive phase of the NAO, winter storms crossing the Atlantic follow a more northerly path, resulting in reduced rainfall in western and southern Europe. 

>[!Question] Question 2.13
>What is a main unresolved discrepancy in drought research as identified by Ault? And what are its possible explanations?
>
>>[!Check]- Answer
>>Ault identifies the impact of the widening of the Hayley cells on the Walker circulation as a main unresolved issue. Models predict that the east-west Walker circulation should slow in conjunction with the Hayley cells, but this is not seen in observations. It could be that the Walker circulation is responding differently to greenhouse gas forcings in reality than it does in models, or that substantial internal decadal variability in the equatorial Pacific Ocean may be overshadowing the forced response of the Walker circulation


---
# Module 3: Floods and Lowlands

## Tarasova et al. (2019)

>[!Question] Question 3.1
>What are the three main perspectives flood classification can be differentiated in and what are the main data sources for these approaches according to Tarasova et al. (2019)?
>
>>[!Check]- Answer
>>The three perspectives are: hydroclimatic, hydrological and hydrograph. Hydroclimatic classification approaches focus on the processes in the atmosphere and neglect the catchment. They usually use weather and pressure maps or atmospheric circulation patterns. The hydrological perspective combined hydrometeorological variables (e.g. rainfall, temperature) observed within catchments, the catchment state (e.g. snow depth, soil moisture), and hydrological processes (e.g. infiltration or saturation excess) leading to floods. The hydrograph-based classification focuses on the resulting flood event in the river, i.e., the discharge itself is classified. 


>[!Question] Question 3.2
>Why is the distinction into seasons in Tarasova et al. (2019) not sufficient for flood classification?
>
>>[!Check]- Answer
>>For flood classification, it is assumed that the flood events (or peaks) within one class are identically distributed, i.e. have the same origin. This is not given within a season, as difference processes (e.g. thunderstorms with heavy rainfall and long-duration rainfall in summer) can lead to floods within one season


>[!Question] Question 3.3
>What is the main drawback of classifications in Tarasova et al. (2019) based on the hydrological perspective?
>
>>[!Check]- Answer
>>These classifications require many data series in rather high temporal and spatial resolution. To be able to fully characterise the hydrological processes in a catchment, information on the temporal and spatial distribution of rainfall, soil moisture, snowmelt, etc., have to be available, which is difficult especially in data scarce regions. 

## Brauer et al. (2014)

>[!Question] Question 3.4
>How are lowland catchments in Brauer et al. (2014) different from mountainous ones? What are the consequences for rainfall-runoff processes and land-atmosphere interactions?
>
>>[!Check]- Answer
>>Compared to mountainous catchments, lowland catchments have shallower groundwater (sooner saturation excess, less evaporation reduction), milder slopes (ponding instead of overland flow), are often more densely populated (more urban environments, with pavements causing more overland flow) and intensively managed (surface water management by means of supply and weirs, leading to less water shortage in summer)


>[!Question] Question 3.5
>Study Figure 5 in Brauer et al. (2014). Explain what happens to each variable (in reality and in WALRUS) when a wetness-dependent flow route division is applied
>
>![[Pasted image 20250430131032.png]]
>
>>[!Check]- Answer
>>The first rainfall events increase soil moisture (decrease storage deficit) and groundwater level (decrease groundwater depth), leading to a slight increase in groundwater drainage and hence discharge. During later rainfall events, when the soil is wetter, more water will follow fast flow routes, causing a stronger increase in discharge


>[!Question] Question 3.6
>Derive equation 5 in Brauer et al. (2014) from equations 3 and 4
>
>>[!Check]- Answer
>>See Brightspace 


>[!Question] Question 3.7
>Figure 7 in Brauer et al. (2014) is based on data from two sites with shallow groundwater. Speculate what the figure would look like for a location with deep groundwater
>
>>[!Check]- Answer
>>There would be much more scatter, because the top soil and groundwater depth are uncoupled. It is possible to have a wet top soil while groundwater is deep and to have a dry top soil when the groundwater  is shallower (but still deep). Of course, both x- and y-axes would also extend further


>[!Question] Question 3.8
>How does surface water management (controlling weir levels and surface water supply) affect groundwater levels and flow routes in reality and in WALRUS?
>
>>[!Check]- Answer
>>Surface water supply and elevating weir levels both increase surface water levels. The difference between groundwater level and surface water level then decreases. Since this level difference is the driving force behind groundwater drainage, elevating surface water levels will decrease groundwater drainage. It is also possible that the surface water level becomes higher than the groundwater level, causing surface water infiltration. 


>[!Question] Question 3.9
>What is the difference between initial conditions and model parameters? Which do you need to change if you apply WALRUS (or any other model) to the same catchment, but for a different modelling period?
>
>>[!Check]- Answer
>>Model parameters are used to tailor a model to a certain catchment. They represent the effect of differences in the catchment's soil, drainage density or slope. The initial conditions give the states at the start of the simulation. If you apply the model to the same catchment, but for a different modelling period, you can keep the parameters the same, but should change the initial conditions. 


>[!Question] Question 3.10
>Explain why the groundwater depth is not included in the water balance computation (Eq. 12 in Brauer et al., 2014).
>
>>[!Check]- Answer
>>The amount of water in the soil reservoir is represented by the (reverse of the) storage deficit. If you would use the groundwater depth in the water balance computation, you would count the water in the saturated zone twice. The groundwater level is only used to compute flow between the soil reservoir and the surface water reservoir


---
# Module 4. Variability and Cryopshere

## Beven et al. (2021)

>[!Question] Question 4.1 
>The original TOPMODEL is based on three main assumptions. What are they?
>
>>[!Check]- Answer
>>The assumptions are
>>1. The dynamics of the saturated zone can be expressed by a series of successive steady-state representations of the saturated zone on an area draining to a point of the hillslope
>>2. The hydraulic gradient of the saturated zone can be approximated by the local surface topographic slope measured with respect to plain distance
>>3. Hydraulic conductivity decreases exponentially with depth in the soil profile


>[!Question] Question 4.2
>Which main runoff processes does TOPMODEL represent?
>
>>[!Check]- Answer
>>TOPMODEL represents subsurface runoff (groundwater component) and surface runoff (direct runoff from saturated areas)


>[!Question] Question 4.3
>According to the TOPMODEL concept, any point with the same topographic index in a catchment will behave the same (i.e. will have the same dynamics and processes). What is the main benefit of this for modelling?
>
>>[!Check]- Answer
>>The benefit of TOPMODEL is that the hydrological behaviour of any point in the lanscape can be predicted on the topographic properties (i.e. DEM analysis)


## Milly & Dunne (2020)

>[!Question] Question 4.4
>Explain what is meant by the delta method used in Milly and Dunne (2020)
>
>>[!Check]- Answer
>>In the delta method, sensitivity to climate change is investigated by changing the observed atmospheric forcing (the model input) by a certain amount (for instance +1K in case of temperature) or percentage (in case of precipitation)


>[!Question] Question 4.5
>What is the main novelty in Milly and Dunne (2020), that sets it apart from previous studies?
>
>>[!Check]- Answer
>>The paper takes into account the feedback between the albedo of fractional snow cover, the subsequent increase in net radiation, and its effect on increasing ET



>[!Question] Question 4.6
>What explanation do Milly and Dunne (2020) provide for the discrepancy between change estimates using the delta method and empirical regression analysis?
>
>>[!Check]- Answer
>>The authors use the interannual variability in storage to explain the discrepancy. By redistributing observed yearly anomalies according to the normal seasonal cycle, they can show that one can account for much of the storage effect


>[!Question] Question 4.7
>What approach do Milly and Dunne (2020) take to validate their model? Why can't they use a more straightforward validation?
>
>>[!Check]- Answer
>>The authors combine several metrics, including NSE but also how well the model simulates the observed trends and climatology. This is important because the trend is likely sensitive to other parameters than the short term variability that is captured by NSE


>[!Question] Question 4.8
>Milly and Dunne (2020) report significant changes in streamflow resulting from relatively minor changes in available energy. Explain this apparent contradiction
>
>>[!Check]- Answer
>>In semi-arid and arid climates, a very small fraction of P ends up as runoff. This means that a relatively small change in ET can have a much larger relative impact on Q



---
# Module 5: (Un)certainty
## Holländer et al. (2009)

>[!Question] Question 5.1
>Why did the simulations of the ten models included in the study of Holländer et al. lie so far apart?
>
>>[!Check]- Answer
>>There were no calibration data, and the modellers could decide for themselves which processes they considered relevant. It demonstrates the large role of calibration, and the importance of choosing your perceptual model carefully


>[!Question] Question 5.2
>Which process was overlooked in all models used by Holländer et al., and which general conclusion can you draw from this?
>
>>[!Check]- Answer
>>The formation of erosion gullies. Despite the fact that most models don't account for changing landscape properties (such as the formation of erosion gullies), it also demonstrates that relevant processes can easily be overlooked. We often simulate catchments which we haven't seen, making it hard to estimate if we account for all relevant processes. Furthermore, we have the tendency to consider our own models, the models we have most experience with, as adequate. In this particular example, that is clearly not the case


## Oreskes et al. (1994)

>[!Question] Question 5.3
>What is, according to Oreskes et al., the difference between verification and validation?
>
>>[!Check]- Answer
>>Verification is an 'establishment of truth', if a model is verified, it implies that the model mimics the truth correctly (which, according to Oreskes, is impossible). Validation implies an establishment of legitimacy. In scientific literature, however, this term is often mixed with 'verification'


>[!Question] Question 5.4
>Why do Oreskes et al. argue that hydrologic models (or Earth science models in general) cannot be verified?
>
>>[!Check]- Answer
>>Because natural systems are never closed systems. For example, there is always exchange of energy and/or mass at the boundaries of the investigated system, making it hard to do controlled experiments. Furthermore, parameter values are effective values, because we cannot observe and model every single grain and drop in a catchment. Finally, there is the problem of non-uniqueness; different combinations of hypotheses or parameters can lead to the same results oir cancel each other our, and it is impossible to decide which one of the models (with the same results) is actually 'correct'.


>[!Question] Question 5.5
>Do you agree with Oreskes et al.?


## Addor & Melsen (2019)

>[!Question] Question 5.6
>How did Addor & Melsen demonstrate that adequacy could not explain model selection?
>
>>[!Check]- Answer
>>They performed a bibliometric analysis, in which they scanned scientific publications on specific key-words that could drive model selection, such as landscape characteristics, time and space scale, and the goal of the study. When looking at the distribution of these keywords across the use of seven different models, it appeared that all models were used across almost all applications. They key-words could not explain model selection. On the other hand, the institute of the first author shored very strong correlation with the use of a specific model, supporting the hypothesis that legacy drives model selection


>[!Question] Question 5.7
>Which mechanisms in Addor & Melsen stimulate the use of conventional and well-established model in science?


>[!Question] Question 5.8
>What possible way forward do Addor & Melsen suggest, why, and what do you think of this suggestion?