---
fileClass: Base, Summaries
title: 
Parents: ["[[Water 2]]"]
Draft: 
Status: In Progress
Related Notes: ["[[Reader Water 2-Chapter 2.1-Formulas for Stationary Groundwater Flow]]", "[[Reader Water 2-Chapter 2.2-Chemical Aspects of Groundwater]]"]
Related Terminology: 
Related Courses: ["[[Water 2]]"]
---
# 4. Formulas for Stationary Groundwater Flow
## 4.1 Introduction
In hydrology there are many formulas for the behaviour of groundwater systems. These formulas can be used to answer questions such as "how far apart should ditches be to prevent a field from becoming too wet?", "how wide should a buffer zone around a nature reserve be to prevent it from drying out?" Furthermore, these formulas serve a scientific purpose as they give insight into groundwater systems.

In this section we only present those formulas for stationary groundwater flow which describe the [[Hydraulic Head]] as a function of distance, thus $H=f(x)$.

When deriving formulas, generally, the following steps can be distinguished
1. Limiting the open flow system by defining boundary conditions
2. Simplifying the actual water flow
3. Formulating a differential equation with $H$ as a function of $x$ by combining
   -  The continuity principle
   -  [[Darcy's Law]]
4. Solving the differential equation
5. Applying the boundary conditions

This procedure will be explained in the following sections with some examples

---
## 4.2 Centerfield Head Difference Between Parallel Ditches using Flow Layer Thickness
During winter time the water table in a field surrounded by ditches has a convex shape (it bulges upward) due to the precipitation surplus. Because a water table that is too high can lead to crop damage, it is relevant for agriculture to be able to describe the shape of the water table. 

The following figure shows the cross-section of an agricultural field:

![[20240228_140227.jpg]]

The derivation of the shape of the water table is done in the five steps specified earlier

***Step 1: Limiting the Flow System***
To describe the **flow pattern** we first need to determine what to include in the flow system and what not. This is done by defining boundary conditions. These boundary conditions are defined in those places where there is a water divide. 

>[!Important]
>In case water flows to 2 parallel ditches there are two water divides: one exactly in the middle of the field and one in the ditches. 

Furthermore, there is an impermeable layer below the field. In this case the flow pattern is limited to one half of the field. 

***Step 2. Simplifying the Flow Patterns***
1. The subsoil consists of a homogeneous and horizontally [[Isotropy|isotropic]] Aquifer on top of an "impermeable layer"
2. We assume the water flow is stationary: all groundwater excess flows in its entirety to the ditches, hence there is no change of storage of groundwater
3. The ditches run completely parallel to each other at a distance $L$, so that we can continue our calculations with the [[Two-Dimensional Discharge]] $q$
4. The water table ends at the water level in the ditch 
   >[!Info]
   >in reality the water level always ends somewhat above the water level in the ditch and a seepage zone exists between this point and the ditch water level; in this seepage zone water flows in a "film" across the surface of the ditch wall
5. The wall of the ditch is completely vertical
6. In comparison to the thickness of water flow layer the [[Centerfield Head Difference]] (CFHD) of the water table is so small that it is safe to assume an average flow layer thickness $D$ in further calculations
7. $D$ is so small in comparison to $L$ that the [[Dupuit Assumptions]] can be applied
8. The ditches are dug to the depth of the impermeable layer, which means the effect of radial flow towards the ditches can be neglected. This simplification is justified when at least one of the following assumptions is met:
   - $L \gg D$
   - The distance between the bottom of the "impermeable" layer is small compared to $D$
   - The width of the ditch is larger than or equal to $D$

The following figure shows the simplified flow pattern:

![[20240228_142212.jpg]]

***Step 3. Formulating the Differential Equation***
For $q$ at distance $x$ from the water divide in the middle of the field it is found that: 

$$
q=Rx \tag{4.1} 
$$


Additionally, using the [[Dupuit Assumptions]], the [[Two-Dimensional Discharge]] can be calculated with: 

$$
q=Dv \tag{4.2}
$$


Substituting [[Darcy's Law]]: 

$$
v=-k \frac{\text{d}H}{\text{d}x} \tag{4.3} 
$$


results in: 

$$
q=-kD\frac{\text{d}H}{\text{d}x} \tag{4.4} 
$$


However, for describing the water table a formula for $H$ is needed, and not for $q$. This can be achieved by equating the equations 4.1 and 4.4: 

$$
Rx = -kD\frac{\text{d}H}{\text{d}x} \tag{4.5}
$$



***Step 4. Solving the Differential Equation***
To formulate $H$ as a function of $x$, the differential equation needs to be integrated. In order to do this we make sure that $H$ and $x$ are both on different sides of the equals sign by rewriting equation 4.5: 

$$
Rx\text{d}x = -kD\text{d}H \tag{4.6} 
$$


Solving this is achieved by integrating both sides of the equation, which results in: 

$$
\frac12 Rx^2 = -kDH + C \tag{4.7} 
$$


in which $C$ is a constant of integration, which we will solve in step 5 of the procedure


***Step 5. Defining and Substituting the Boundary Conditions***
The hydraulic head can be defined relative to any reference point consistently chosen within the same case study. Here, we define $H$ relative to the water level in the ditch, which means the boundary condition is: 

$$
\langle x=\frac12L, \, H=0 \rangle \tag{4.8} 
$$


Another boundary condition is $\langle x=-\frac12L, \, H=0 \rangle$ 

Equation 4.8 is a boundary condition defining the flow system. Substitution of these data in 4.7 results in a state at the boundary: 

$$
C=\frac18 RL^2 \tag{4.9} 
$$


This solution we substitute in 4.7, after which we write $H$ explicitly. The result is: 

$$
H=\frac{R(L^2 - 4x^2)}{8kD} \tag{4.10} 
$$


This equation described the height of the water table $H$ relative to the water level in the ditch as a function of the distance $x$ to the middle of the field and two parameters which are independent of location: the [[Conductance|Transmissivity]] $kD$ and a stationary groundwater recharge rate $R$.

Farmers are particularly concerned with keeping the maximum [[Centerfield Head Difference]] ($m_0$), in the middle between the ditches, sufficiently small. In order to do that the ditches need to be separated by a certain distance $L$. Substituting $\langle x=0, \, H=m_0 \rangle$ in 4.10 gives: 

$$
L^2 = \frac{8kDm_0}{R} \tag{4.11} 
$$


This formula, together with more complex ones (see the next section), have had a great influence on shaping large parts of the Netherlands. Equation 4.11 can be used to calculate what the distance between 2 ditches should be at a certain water level in order to keep the centerfield water table low enough to prevent saturation of the plant root zone. 

>[!Note]
>When applying 4.11 the question arises which value $R$ should have. To that end, when determining the optimal distance between ditches so-called drainage standards are used. These standards are reported in the Cultuurtechnisch Vademecum, a manual for water managers. 

In [[Water 1]] we stated that there is a relation between the spatial and the temporal scale. It should be clear that the water table between stream separated from each other by a distance of several kilometers reacts less quickly to the pattern of precipitation and evaporation compared to the water table under a small field. To describe the maximum [[Centerfield Head Difference]] between streams we thus need to apply another, lower, value for $R$ than for a field. The water table in very large groundwater systems reflects the precipitation surplus of a period of many years. 

Stationary formulas are often used to describe the average water table levels. In certain conditions this is valid, i.e. when the groundwater system is "linear", meaning that the output is proportional to the input. For example, 4.11 is linear: when $R$ doubles, $M_0$ is twice as large as well. A very practical feature of linear systems is that the outcomes of several formulas can be added.

---
## 4.3 Centerfield Head Differences Between Parallel Ditches Without Using the Flow Layer Thickness

We examine the same flow problem as in the previous section, only now the [[Centerfield Head Difference|CFHD]] with respect to the depth of the impermeable layer below the drain level is so large that it is no longer justified to use the flow layer thickness $D$ in our calculations. Also in this case we can derive the shape of the water table.

***Step 1. Limiting the Flow System***
Same as in the previous section

***Step 2. Simplifying the Flow Pattern***
Same as in the previous section, only simplification 6 no longer applies. 

***Step 3. Formulating the Differential Equation***
Equation 4.1 still holds for $q$. Additionally, $q$ can also be calculated as the product of the [[Flux Density]] (also called Specific Discharge or sometimes Apparent Velocity), and the flow layer thickness. However, in this case the flow layer thickness is not a constant value like in the previous section, because it significantly decreases in the direction of $x$. Hence, we define $H$ here with respect to the impermeable layer (instead of the water level in the ditch), in order for $H$ to represent the depth of the impermeable layer below drain level.

![[20240228_142927.jpg]]

This way we arrive at: 

$$
q=-kH\frac{\text{d}H}{\text{d}x} \tag{4.12} 
$$


Equating 4.1 and 4.12 yields: 

$$
Rx =-kH\frac{\text{d}H}{\text{d}x} \tag{4.13} 
$$



***Step 4. Solving the differential equation***
From 4.13 follows: 

$$
Rx\text{d}x = -kH\text{d}H \tag{4.14} 
$$


Integrating once gives: 

$$
\frac12 Rx^2 =- \frac12 kH^2 + C \tag{4.15} 
$$



***Step 5. Defining and Substituting the Boundary Conditions***
When the depth (anmd thus the [[Hydraulic Head]]) of the ditch is unknown, but we still want to calculate the constant of integration, we use a symbol instead of a number. Let us call the hydraulic head at the water level of the ditch $H_0$. One of the boundary conditions is then: 

$$
\langle x=\frac12 L, \, H=H_0 \rangle \tag{4.16}
$$


Substituting these data in 4.15 results in: 

$$
C=\frac18 RL^2 + \frac12 kH_0^2 \tag{4.17} 
$$


Again substituting 4.17 in 4.15 and writing $H$ explicitly gives: 

$$
H= \sqrt{H_0^2 + \frac RK \Bigl(\frac14 L^2 - x^2 \Bigr) } \tag{4.18} 
$$


In the middle between the ditches $\langle x=0, \, H=H_0 + m_0 \rangle$ applies as a boundary condition. Substituting in 4.18 leads to: 

$$
L^2=\frac{8kH_0m_0 + 4m_0^2}{R} \tag{4.19} 
$$


This formula is known as the [[Hooghoudt Formula]] and is widely used when determining the desired distance between ditches. 

>[!Note]
>Equation 4.11 is a simplification of 4.19, i.e. in many instances $8kH_0m_0 \gg 4km_0^2$ (which means the latter term can be neglected) and $H_0 \approx D$ which means 4.19 becomes 4.11

---
## 4.4 The Shape of a Dome-Shaped Raised Bog
Raised bogs are bogs that fully rely on precipitation for their water supply. Therefore they only occur in a climate with a certain precipitation surplus. Just as fens, raised bogs need to be permanently wet in order to prevent the peat from oxidising. 

>[!Info]
>A long time ago, a large part of the Netherlands consisted of bogs. Since then a large part has been washed away by the sea or has been covered with clay. The remainder has largely been reclaimed for agriculture and has been mined as a fuel, which is why today only about 8000 ha of raised bog remains in the Netherlands, most of which is degenerated

Raised bogs are large dome-shaped bodies of peat which in the middle are raised many meters above their surroundings. 

>[!Info]
>Engelsmann (1967) compared historical data on 64 raised bogs in north-western Germany and found an average diameter of 6 km and a [[Centerfield Head Difference|CFHD]] of 5 m. 

>[!Info]
>In a high profile article in Nature, Ingram (1982) provided the first hydrological explanation for the shape of a "living" raised bog. According to Ingram the shape id dictated by the amount of water that has to be discharged. This amount increases towards the edge of the raised bog and thus, following [[Darcy's Law]], the [[Hydraulic Head]] gradient needs to increase towards the edge as well. The shape of the land surface us explained by the fact that it is similar to that of the water table. 

Most of the precipitation surplus that feeds living raised bog is discharged close to the land surface through the top soil layer. This layer consists of peat mosses and dwarf shrubs (like heather), often in a pattern of hummocks and hollows. A small part of the water percolates to an aquifer below the bog. [[Percolation]] at the lower boundary is limited by the high resistance of a waxy layer of illuviated humus on the border between the bog and the sandy subsurface. What remains of the water flows horizontally through the peat body from the centre towards the edges. This horizontal component is assigned the symbol $u$ and defined as the amount of water per unit area that flows through the bog per unit of time (unit: m d$^{-1}$). 

>[!Example]
>For example: $u=0.0002$ m d$^{-1}$ if 20% of the precipitation surplus of 1 mm d$^{-1}$ flows through the bog

Now, we will hydrologically derive the shape of the raised bog and subsequently calculate how large $u$ should be in order to explain that shape. 

![[20240228_143332.jpg]]

***Step 1. Limiting the Flow System***
There is a water divide in the middle of the bog where $r = 0$ and at the edge of the bog at $r_{\text{max}}$ 

***Step 2. Simplifying the Flow Pattern***
1. The layer of peat is homogeneous and horizontally [[Isotropy|isotropic]]
2. Flow is [[Stationary Flow|stationary]]
3. $u$ is spatially constant (no variation with distance towards the centre)
4. The raised bog is perfectly circular
5. The water table ends exactly at the edge of the raised bog
6. The [[Dupuit Assumptions]] can be applied

***Step 3. Formulating the Differential Equation***
A volume flow rate $Q$ flows from the centre through a circular raised bog with radius $r$, which is equal to the product of the area of that circle and $u$: 

$$
Q= \pi r^2 u \tag{4.20} 
$$


When $H$ is defined with respect to the bottom of the bog, we can place an imaginary cylinder in the bog at distance $r$ with an area size of $2 \pi r H$. Multiplying this area with the apparent velocity in [[Darcy's Law]] gives a second expression for the volume flow rate: 

$$
Q=2 \pi rHk \frac{\text{d}H}{\text{d}r} \tag{4.21} $$


Setting both equations equal yields after some rewriting: 

$$
ur\text{d}r = -2kH\text{d}H \tag{4.22} 
$$


***Step 4. Solving the Differential Equation***
Integrating once results in: 

$$
\frac12 ur^2 = -kH^2 + C \tag{4.23} 
$$


***Step 5. Defining and Substituting the Boundary Conditions***
On the edge of the raised bog the following applies: 

$$
\langle r = r_{\text{max}}, \, H=0 \rangle \tag{4.24} 
$$


Substituting these conditions in 4.23 and solving for $C$: 

$$
C= \frac12 ur_{\text{max}}^2  \tag{4.25}
$$


Substituting $C$ in 4.23 and writing $H$ explicitly leads to: 

$$
H=\sqrt{\frac{u}{2k}(r_{\text{max}}^2 - r^2)} \tag{4.26} 
$$


Ingram could describe the shape of raised bogs with equation 4.26 fairly well. He derived the amount of water flowing through the bog ($u$), necessary to know the shape of the bog, from 4.26, the average values from Engelmann's research ($r_{\text{max}}=3$ km, $m_0 = 5$ m), and an assumed hydraulic (saturated) [[Permeability|Conductivity]] of $0,5$ m d$^{-1}$. 

In the centre of the raised bog, we find $\langle r = 0, \, H=m_0 \rangle$. Substituting in 4.26, writing $u$ explicitly and substituting the values mentioned previously results in: 

$$
\begin{aligned}
u &=\frac{2km_0^2}{r_{\text{max}}} \\ &= \frac{2 \times 0.5 \times 5^2}{3000^2} \\ &= 0.0000028 \, \text{m d}^{-1} \\ &\approx 1 \, \text{mm y}^{-1} 
\end{aligned} 
$$

This result shows that only 1 mm of recharge per year would be needed to explain a bog with a height of 5 m and a dismater of 6000 m! A remarkable result. However, do not forget that there is still a large amount of water flowing through the edges of a bog of such dimensions)

>[!Note]
>There is much criticism on this theory of Ingram concerning the shape of a raised bog, especially on some of his assumptions (Step 2). Nowadays, other hydrological theories exist that explain the shape of a raised bog. Nonetheless, the essence of Ingram's theory remains: the shape of a raised bog reflects the discharge of water

---
## 4.5 Conclusion
An hydrologist conceptualised reality in order to describe it with formulas. We should always test  a formula against reality using measurement data. A hydrologist should also be able to judge whether a specific flow problem fits the concepts used to derive the formula - do the assumptions hold?

In step 2 of the procedure to derive equations for groundwater flow the [[Continuity Principle]] was combined with [[Darcy's Law]]. So the principle to derive stationary solutions is: multiplication of the [[Flux Density|Apparent Velocity]] according to Darcy ($v=-k\text{d}H/Dx$) with an area (e.g. $D$, $H$ or $A$ in sections 4.2 and 4.3 respectively); calculation of the amount of water flowing through that area by looking at the water balance ([[Continuity Principle]]); equation of both expressions for the volume flow rate, and solving the resulting differential equation

The differential equations that we have presented could be solved. However, in more complex cases a hydrologist conceptualised the situation, discusses the possibility of a solution and when this is not possible, switches to modelling

---
# 5. Chemical Aspects of Groundwater
## 5.1 Introduction
Water is essential for the transport of substances, both dissolved and suspended. Needless to say, there is a close connection between quantitative hydrology on one hand and disciplines such as environmental science, biochemistry, agronomy and ecology on the other hand. In this chapter we will introduce the interaction between groundwater flow and the chemical aspects of groundwater

## 5.2 Composition and Chemical Genesis of Groundwater

>[!Info]
>
|  | Cations |  |  | Anions |  |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Name | Symbol | Molecular weight | Name | Symbol | Molecular weight |
| Calcium | $\ce{CA^2+}$ | 40 | Bicarbonate | $\ce{HCO3-}$ | 61 |
| Magnesium | $\ce{Mg^{2+}}$ | 24.5 | Sulphate | $\ce{SO4^{2-}}$ | 96 |
| Sodium | $\ce{Na+}$ | 23 | Chloride | $\ce{Cl^-}$ | 35.5 |
| Potassium | $\ce{K^+}$ | 39 |  |  |  |

The cations and anions given in the table above naturally occur in groundwater. The ratios of these so-called macro-ions changes during the flow process due to oxidation, reduction, weathering, dissolution, precipitation and cation exchange

The [[Electric Conductivity]] (EC) is an easy to measure indicator for the total ion concentration in non-industrial regions. Rainwater is low in ions and in natural composition mainly contains sulphate and sodium ions, Because of air pollution in the Netherlands the concentration of ammonium and sulphate in particular have increased. Ion concentrations in the upper groundwater layer are already higher than in rainwater because of "concentration" as a result of evaporation, since water vapour does not transport ions. 

>[!Important]
>Because the chloride ion ($\ce{Cl^-}$) does not react with other substances and is not adsorbed to soil particles, the ratio between the chloride concentration in rainwater and in the upper groundwater can be used to estimate the actual evaporation. 

At equilibrium the amount of chloride entering the system through precipitation should be discharged through groundwater replenishment. Thus: 

$$
P \times [\ce{Cl^-}]_{\text{precipitation}} = (P-E) \times [\ce{Cl^-}]_{\text{groundwater}} \tag{5.1}
$$


This can be rewritten as: 

$$
E = p \times \Biggl(1-\frac{[\ce{Cl^-}]_{\text{precipitation}}}{[\ce{Cl^-}]_{\text{groundwater}}} \Biggr) \tag{5.2} 
$$


>[!Example]
>For example, if rainwater contains 3 mg $\ce{Cl^-}$ per litre and the upper groundwater 9 mg, then the rainwater has been concentrated with a factor of 3; with an annual precipitation of 750 mm the actual evaporation probably was 500 mm. 

A flowing freshwater system is enriched in calcium and bicarbonate ions, primarily because of the dissolution of calcareous (high in calcium) substances present in the sediment. 

>[!!Info]
>In this process the following reactions occur: 
>
> $$
\ce{H2O + CO2 <=>> H2CO3 <=>> H^+ + HCO3-} \tag{5.3} 
> $$
> 
>$$
\ce{CaCO3 + H^+ <=>> Ca^{2+} + HCO3-} \tag{5.4} 
> $$

It is likely that the weathering of limestone (Eq. 5.4) occurs mainly under the influence of protons ($\ce{H^+}$) formed in the root zone. This is where, through the respiration of roots and micro-organisms, carbon dioxide ($\ce{CO2}$) is produced, which shifts the balance in Eq. 5.3 to the right. During the flow process in deeper soil layers increasing amounts of lime are dissolved, increasing the concentrations of calcium and bicarbonate irons while the concentration of $\ce{H^+}$ decreases (i.e. the pH rises). 

This explains the concentrations in "matured" seepage water. The speed of maturing depends on the amount of substances in the sediment that are easily weathered. 

During the flow process many more changes occur in the composition of groundwater. For example, groundwater is often low in oxygen because oxygen has been used in the topsoil during the decomposition of organic material. Because of this relative absence of oxygen $\ce{Fe^{3+}}$ can be reduced to $\ce{Fe^{2+}}$. Mature groundwater is often rich in $\ce{Fe^{2+}}$. When this water comes into contact with air in seepage areas the iron oxidises, which can be observed as rust-brown particles floating in the water and attached to plants. Based on these rust phenomena seepage areas can be identified. 

---
## 5.3 Chemical Profile of Groundwater
There are several ways in which the results of the analyses of macro-ions in groundwater can be presented in such a way that it immediately becomes clear what type of groundwater we are dealing with. Well-known are the methods suggested by Piper, Maucha, Stuifzand and **Stiff**. By means of an example we will illustrate the latter.

The concentration of macro-ions in the water sample is converted to meq l$^{-1}$. Subsequently the concentration of each ion is converted to its relative contribution to the total concentrations of either cations or anions. These percentages are plotted in a diagram with the cations on the left and the anions on the right.

![[20240228_145438.jpg]]

Below are some of the Stiff diagrams for common types of groundwater

![[20240228_145520.jpg]]

Below the diagram a bar can be drawn, the length of which is a measure for the total concentration of anions and cations. Normally, the sum of the macro-cations is about the same as that of the macro-anions. Based on the shape of the diagram and the length of the bar the water can be classified as being of a certain type. 

For ecological purposed groundwater can also be classified using the [[Electric Conductivity]] and the ion ratio (IR) according to Van Wirdum: 

$$
IR = \frac{\ce{[Ca^{2+}]}}{\ce{[Ca^{2+}]}+\ce{[Cl^-]}} \tag{5.5} 
$$

The IR indicates the share of calcium ions in the total amount of cations. 

>[!Note]
>The concentrations of IR are in meq l$^{-1}$. For singly charged ions 1 mmol is equal to 1 meq, and for doubly charged ions 1 mmol equals 2 meq

Different samples can be plotted on the diagram, with on the x-axis the EC logarithmically and on the y-axis the IR

![[20240228_145736.jpg]]

In an EC/IR diagram there are always 3 reference points, from three extreme compartments of the hydrological cycle:
1. At = [[Atmocline Water]] (rainwater)
2. Li = [[Lithocline Water]] (matured groundwater, rich in calcium and bicarbonate)
3. Th = [[Thalassocline Water]] (seawater)

>[!Important]
>The idea behind the EC/IR diagram is that the chemical composition of water changes during different stages of the hydrological cycle. 

---
## 5.4 Ecohydrology
In ecohydrology we study the interaction between ecosystems and the availability of water. In these interactions the quality of the available water also plays a role. The interactions can occur in bodies of water such as rivers and lakes, or on the land such as in forests or deserts. Here we mainly look at the influence of water quality on Dutch landscapes

The Netherlands is a delta and is characterised by groundwater which is usually close to the surface: on 90% of the land the water table is within 1 m of the surface in winter and 2.5 m in summer. The vegetation has adapted given these wet conditions. 

>[!Note]
>A small part of the Netherlands has deeper water tables, for example the Veluwe and the Peel. 

In addition to the amount of water, each species depends on a specific water quality. Hence, within the landscape we can find different species compositions, which can be explained by differences in hydrological regimes. 

A first classification that explains such differences in species composition is that between infiltration and seepage areas. 

In infiltration areas atmocline rainwater infiltrates with little dissolved substances. Additionally, because of infiltration there is a constant transport of dissolved substances towards the groundwater. This is why infiltration areas are often poor in nutrients and minerals, which shows as the vegetation is adapted to nutrient-poor and acidic conditions. Because of its deep water table infiltration areas are dominated by vegetation adapted to dry conditions, such as winter or spring heather. However, infiltration areas can also have a high water table because of underlying layers which offer resistance, such as in typical gley-podzols (with wet heater) or in raised bogs (with heather and peat moss). 

In seepage areas there is a constant enrichment of dissolved matter. Furthermore,. seepage areas have a high water table which varies little. Hence, the vegetation is characteristic for weakly acid to basic conditions. The nutrient richness varies from poor to extremely rich. In general the nutrient richness increases when:
- the fluctuation in the water table increases (because better aeration leads to higher [[Mineralisation]]), 
- there is an increasing influence of inundation on surface waster, for example from streams
- the soil is increasingly made up of river and sea clay, instead of gravel and sand.

>[!Info]
>Characteristic for nutrient-poor conditions is for example a subtype of Molinia meadows, and for moderately rich soils marsh-marigold lands. Finally, reed and brushwood are characteristic of extremely rich and wet soils, for example in downstream parts of a stream valley. 

>[!Note]
>There are many possible variations on this classification, since the abiotic variation of a landscape depends on geological, geomorphological, soil and hydrological processes  in the location; for example, the vegetation type depends on the quality of seepage water, the influence of parent material, the supply of surface water and the presence of brackish water. Furthermore, the influence of humans on the quality of rain, ground and surface water has an effect on the presence of plant species. 

Despite the wide variety of geological, geomorphological, soil and hydrological processes we can distinguish the Netherlands in several characteristic types:
1. High sandy plains
2. Raised bogs
3. Stream valleys
4. Fens
5. River lands
6. Hilly landscapes
7. Polders
8. Sea clays
9. Coastal areas
10. Urban areas

For some of these landscapes the interaction between water quality and vegetation will be described below.

High sandy plains, i.e. a landscape type with infertile, sandy soils with deep groundwater, can be found for example on the Veluwe. They have a deep water table. are nutrient poort and acidic. A characteristic of vegetation type for this land is dry heather. Previously there were vast fields of heather, but with the introduction of artificial fertilisers around 1900 the surface area strongly declined as a result of land reclamation. What heather is left is overgrown by grass and trees because of the loss of the traditional management practices. Nowadays, efforts are being made to maintain heather by means of grazing with sheep herds, turfing and periodical burning

Raised bogs are under more or less the same conditions as high sandy plains, the difference being that with raised bogs a cover layer of sand has been present. Because of this raised bogs are characterised by extremely wet conditions (up to 90% of a raised bog consists of water). In the past raised bogs were very useful as fuel, which is why very little of this landscape remains in the Netherlands. 

>[!Note]
>More examples are given in the book, which I will not go into too much detail on

---
## 5.5 Consequences of Over-Fertilisation
Since the fifties of the twentieth century, farmlands in the Netherlands are intensively fertilised, mainly with nitrogen (N), Phosphorus (P), Potassium (K) and sulphate (S) through the application of artificial fertilisers and animal manure. In general, more nutrients were added to the lands than were taken off via crops or livestock. Depending on the weather conditions, manner of application, soil type and hydrological regime a certain amount of the surplus disappears to the groundwater. Hence, high concentrations of nutrients can occur in the upper groundwater under agricultural plots. Especially the high nitrate concentration is a threat to groundwater as a source of drinking water. The amount of nutrients that is leached to the groundwater strongly depends on the height of the water table and the corresponding oxygen-richness. 

In conditions rich in oxygen ammonium is converted into nitrate during the breakdown of organic fertilisers in soils. 

$$
\ce{NH4^+ + 2O2 -> NO3^- + 2H^+ + H2O} \tag{5.6} 
$$

This process, in which protons are released and thus acidification occurs, is called [[Nitrification]]. Because Dutch farmland is usually well-drained, nitrogen is almost exclusively present as nitrate. However, when there is a shallow water table acidic conditions prevail because the diffusion rate of oxygen is particularly low in water. Under such conditions nitrate is being converted to the harmless nitrogen gas, which disappears into the atmosphere (the atmosphere consists for about 80% of nitrogen gas). This nitrogen decomposition process is called [[Denitrification]]: 

$$
\ce{4NO3- + 5CH2O -> 2N2 ^ + H2CO3^- + 2H2O} \tag{5.7} 
$$


In this equation organic matter is presented in simplified form as $\ce{CH2O}$. Denitrification appears for example after inundation with river water or in wet nature reserves. As a by-product of denitrification, $\ce{N2O}$ (laughing gas) is formed. This is harmful gas because it also contributes to the greenhouse effect. Denitrification has a positive effect on the quality of groundwater, but this process does contribute to another environmental problem. 

To remove nitrate from the groundwater a high water table is desirable. However, the risk of a high water table in periods of high precipitation is that manure is transported into the ditches. Furthermore, a high water table can lead to increased leaching of P towards groundwater under weakly acid to neutral conditions, because iron-phosphate complexes become unstable. 

Drinking water companies are especially worried about excessive nitrate concentrations. The nature of sediment through which the water flows strongly influences whether nitrate is broken down or not. 

In the groundwater nitrate can be reduced by pyrite ($\ce{FeS2}$) or organic matter (Equation 5.7). Marine deposits contain more pyrite than fluvial or glacial deposits. This is correlated with the high sulphate concentration of seawater, which serves as the source of sulphur in the formation of pyrite. In aeolian depositions which are not "buried", such as cover sand, no pyrite is found. In the reduction process of pyrite by nitrate, nitrogen gas is formed again: 

$$
\ce{2FeS2 + 6NO3^- + 4H2O -> 2Fe(OH)3 + 3N2 ^ +4SO4^{2-} + 2H^+} \tag{3.41} 
$$


This chemical equation (chemical denitrification) is one explanation as to why low nitrate concentrations are often found in the groundwater under fertilised soils containing pyrite, although in combination with high sulphate concentrations and a low pH. In case lime is present, the produced acid can be neutralised (equation 3.37). 

>[!Important]
>Hence, groundwater rich in calcium and sulphate can indicate over-fertilisation. 

The rate of many (bio-)chemical formation and decomposition processes is proportional to the concentrations in the solution. We call this a "linear" reaction, or a "first-order reaction". The rate of chemical denitrification (eq. 3.14) is proportional to the nitrate concentration ($\text{d}C / \text{d}t) \sim C$) and can thus be described as a first-order decomposition process: 

$$
C = C_0e^{- \alpha \, t} \tag{3.42} 
$$


With:
- $C$ being the nitrate concentration at time $t$ (e.g. mg / l)
- $C_0$ being the nitrate concentration at time $t=0$ (e.g. mg / l)
- $\alpha$ being the decomposition constant (e.g. in yr$^{-1}$)
- $t$ being the time (e.g. in yr)

>[!Note]
>The decomposition constant $\alpha$ depends amongst others on the amount of pyrite in the substrate, especially in deeper layers, and the time for it to be exhausted in the chemical denitrification. Moreover, there is fear for the release of trace elements in the decomposition of pyrite, such as nickel and arsenic. In such a case these trace elements could constitute a threat to water extraction, instead of nitrate. 

Not only drinking water companies are worried about pollution of groundwater with nutrients, nature conservationists have been aware of this problem since the sixties. Nutrients that are applied to agricultural plots can flow to nearby nature reserves through the groundwater. High nutrient concentrations lead highly productive plant species to dominate vegetation. They out-compete species that grow slowly, which are often rare and characteristic species from which nature reserves derive their value. 

Furthermore, there is attention for the questionable role of sulphate in the decline of nature reserves. This sulphate can come directly from fertiliser applications, but also from the decomposition of pyrite under the influence of nitrate (equation 3.41). The reduction of sulphate in wet natural areas, in which oxygen-poor conditions dominate the soil, does not lead to a decrease of its influence such as with nitrate, but on the contrary produces a problem. This is because sulphide (with the characteristic rotten egg odour) is formed, which is already toxic for plant roots at low concentrations: 

$$
\ce{SO4^{2-} + 2CH2O <=>> HS^- + HCO3- + CO2 + H2O} \tag{3.43} 
$$


A second characteristic of sulphate is that it can be bound strongly to iron, in which case iron sulphides such as $\ce{FeS}$ and $\ce{FeS2}$ (pyrite) are formed. However, iron is the most important factor for the binding of phosphate in most of the wetland soils. Sulphide seriously disrupts the binding of phosphate in all kinds of iron-phosphate complexes and largely consumes newly freed iron. The consequence is "internal" Eutrophication with phosphate: the already present phosphate is freed increasingly fast and "new" phosphate is to a lesser degree bound to iron. 

>[!Important]
>In conclusion: the supply of sulphate-rich water nearly always leads to eutrophication, even when phosphate is completely absent
