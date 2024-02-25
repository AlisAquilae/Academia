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
### 3.3.1 Introduction
The oxygen balance is essential for water quality. Not only direct, like for living organisms, but also indirect because many processes and quality features are regulated via the oxygen level. For instance decomposition processes under either aerobic or anaerobic conditions.

The oxygen concentration is a result of different biotic and abiotic processes; the most important are shown in figure 4.10. In the next paragraph the different terms are discusses. 

---
### 3.3.2 Oxygen Binding Substances, BOD Decomposition
In surface water organic substances are present that can be decomposed by micro-organisms. Mostly this is an aerobic oxidation for which oxygen is extracted. 

The amount of degradable organic matter in water is usually expressed as **Biological Oxygen Demand (BOD)**. This is the total amount of oxygen needed to fully decompose the organic matter, regardless of the type of material.

To measure BOD a water sample is placed for a certain time in the dark in a closed bottle with a constant temperature. Mostly the temperature is $20 \degree C$ and the incubation period is 5 days, so this is called $\text{BOD}^{20}_5$. 

When the concentration of BOD is not too high, the influx of oxygen from the atmosphere and consumption of oxygen will be in balance. Problems occur when due to external influences the amount of decomposable substances is too high. This can be caused by: 
- Discharge of treated waste water (which often still contains 1-5% of the original amount of BOD)
- Sewage overflows (in case of extreme rainfall the capacity of the sewer system is exceeded and waste water is discharged without treatment)
- Accidental spills
- Dying algae and water plants, after extensive growth

Important for the oxygen balance of the surface waters is the amount of organic matter that is discharged and the amount of oxygen the micro-organisms need to decompose the organic matter. For a singular substance like glucose it is straightforward top use the equation of the oxidation-reaction: 

$$
\ce{C6H12O6 + 6CO2 -> 6CO2 + 6H2O} \tag{3.5}
$$

The decomposition as presented in this equation is complete. Sewage discharge, composed of a mixture of many different substances, is often not totally decomposed. Many substances are only partly oxidised; also oxidation has different velocities. 

Decomposition of a BOD is often described as a 1st-order process:

$$
\frac{d\text{BOD}}{dt}=-k_r \, \text{BOD} \tag{3.6}
$$

Where:
- BOD is the remaining BOD concentration [mg l$^{-1}$]
- $k_r$ is the decay rate for BOD [time$^{-1}$] 

Integration of this equation results in:

$$
\text{BOD}_t = \text{BOD}_0 \cdot e^{-k_r \, t} \tag{3.7}
$$

Where:
- BOD$_0$ is the BOD-concentration at time 0
- BOD$_t$ is the BOD-concentration at time $t$

The rate of oxygen depletion in surface water does not necessarily have to be equal to BOD decay rate $k_r$. Part of the BOD can disappear due to other processes like sedimentation or adsorption. In that case the oxygen consumption is lower than the decrease of the BOD

BOD-decomposition is a biological process and therefore temperature dependent. Decomposition processes are generally faster with higher temperatures. Therefore, in tropical areas and in summer the oxygen concentration will be lower with a similar amount of organic substances

In addition, at higher temperatures, oxygen is less soluble in water. Due to this combined effect of temperature disdc