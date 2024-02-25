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

In addition, at higher temperatures, oxygen is less soluble in water. Due to this combined effect of temperature discharges of for instance cooling water have an indirect effect on the oxygen balance. 

---
### 3.3.3 Reaeration
In water of $16 \degree$C around 10 mg l$^{-1}$ of oxygen dissolves. At higher temperatures that is less and at lower temperatures this is more. This amount is called the equilibrium or **saturation concentration**

A shortage of oxygen in surface waters compared to the saturation concentration for a certain temperature is called the **oxygen deficit**. In this case oxygen will diffuse from the atmosphere into the water. The same occurs the other way around when there is an over-saturation of oxygen due to water plants or algae growth

The rate of oxygen exchange with the atmosphere is proportionate to the oxygen deficit. In addition, oxygen transport is dependent on the **mass transfer coefficient**, which is determined by the flow conditions at the boundary layer between air and water. Important factors are flow velocity, water depth, bank roughness and especially for standing waters the wind speed. 

Mass transfer coefficient $k_L$ has an order of magnitude of 1 to 5 m d$^{-1}$, so it has a dimension of speed.

Per unit of watersurface the oxygenflux $\phi(\ce{O2})$ [g m$^{-2}$ hour$^{-1}$] can be described as:

$$
\phi(\ce{O2})=k_L (C_s - \ce{O2}) \tag{3.8}
$$

With:
- $k_L$ the mass transfer coefficient
- $C_s$ the saturation concentration of $\ce{O2}$ in water [g m$^{-3}$]
- $\ce{O2}$ the actual oxygen concentration in the water column [g m$^{-3}$]

For a water system with a surface area $A$ m$^2$ and a water volume $V$ m$^3$ the change in oxygen concentration is described as:

$$
V \frac{d \ce{O2}}{dt} = k_L (C_s - \ce{O2}) \tag{3.9}
$$

Resulting in a change in oxygen concentration of

$$
\begin{aligned}
\frac{d \ce{O2}}{dt} &= k_L \frac{A}{V}(C_s - \ce{O2}) \\
&= \frac{k_L}{H}(C_s - \ce{O2})
\end{aligned} \tag{3.10}
$$

The ratio between volume $V$ and area $A$ is the average depth $H$

The "constant" $k_L / H$ is also indicated with the **reaeration constant** $K_a$ with the unit [time^{-1}$]. A flux of oxygen over the air-water boundary layer will have a large impact on oxygen concentration in shallow waters compared to deep waters.

---
### 3.3.4 The Oxygen Balance of Rivers
To explain the change in oxygen balance in a river, we will first picture a completely mixed system (reactor or vessel). In this system with volume $V$ m$^3$ an amount $M$ g of BOD is loaded. If we neglect the time of mixing the starting concentration of BOD [g m$^{-3}$] will be:

$$
\text{BOD}_0 = \frac{M}{V} \tag{3.11}
$$

As a result of biological oxidation this BOD concentration will decrease with a velocity $k_r \cdot \text{BOD}_t$  (see equation 3.7). For the oxygen balance this means that oxygen is extracted with a velocity $k_r \cdot \text{BOD}_t$. The use of oxygen for BOD decomposition generates in a deficit $D$, that increases with the same speed as $k_r \cdot \text{BOD}_t$. At the same time reaeration starts and the oxygen concentration increases with the velocity ${k_L}/{H} \cdot (C_s - \ce{O2})$ and the oxygen balance can be written as:

$$
\frac{d \ce{O2}}{dt}=\frac{k_L}{H}(C_s - \ce{O2}) - k_r \cdot \text{BOD}_t \tag{3.12}
$$

The maximum deficit and thus the minimum oxygen concentration occurs when reaeration and oxygen consumption compensate each other or, mathematically, when ${d \ce{O2}}/{dt}=0$. In this minimum oxygen concentration we see (based on equation 3.12)

$$
\frac{k_L}{H}(C_s - \ce{O2})=k_r \cdot \text{BOD}_t \tag{3.13}
$$

The same pattern as described for an ideal reactor occurs in a river with constant BOD loading of $M$ [g s$^{-1}$]. Physically one can see the analogy by thinking that with a discharge $Q$ per second a package of water with volume $Q$ passes the discharge point and receiving $M$ BOD. After mixing, the BOD concentration in the package is thus $M/Q$. This package of water flows downstream with oxygen consumption and reaeration takes place as described above. When we assume no mixing between individual packages the change in deficit will occur exactly in this way. So we can use equation 3.9. Instead of time, we can use the flow distance $x$ as a variable because with constant flow velocity $u$: $u \cdot t = x$. 

---
### 3.3.5 The Effect of the Sediment
In the previous paragraph we considered the oxygen balance only with 2 terms. However, also the sediment uses oxygen and the production of oxygen by plants and algae is also of great importance. In the sediment settling organic matter accumulates: dead plant material and faeces of fish and zooplankton, leaves, etc. The microbiological oxidation processes in the sediment will result in a **Sediment Oxygen Demand**. This oxygen demand is more or less a $0^e$-order process, which means that the oxygen demand is independent of the oxygen concentration in the water. Often only a very thin layer of the sediment is aerobic (a few mm). In the anaerobic layers underneath nitrate reduction takes place while in the aerobic layer oxidation of $\ce{NH4+}$ occurs. This combination of nitrification and denitrification can be an important removal process (sink) of nitrogen because it will be released as $\ce{N2}$ gas into the atmosphere. The nitrogen cycle is discussed further in paragraph [[Reader Water 2-Chapter 3.5-Micropollutants|3.5]]. The oxygen conditions in the sediment also influence the binding between iron and phosphate. 

Complex processes occur in the sediment, leading to an oxygen consumption. A normal value of SOD is 0.5 - 1 [g $\ce{O2}$ m$^{-2}$ time$^{-1}$], however. in very polluted sediments this value can be much higher. Also flow conditions and temperature will affect this rate. 

Like the reaeration processes the sediment oxygen demand is a flux over a boundary layer (sediment-water). To determine the effect of SOD on the oxygen concentration in the water we divide SOD by the height of the water column $H$. With a high water column the effect of the sediment is relatively small, whereas in a low water column the oxygen will be depleted fast. 

---
### 3.3.6 Primary Production
Primary production is the development of organic material from inorganic substances (mainly CO2)