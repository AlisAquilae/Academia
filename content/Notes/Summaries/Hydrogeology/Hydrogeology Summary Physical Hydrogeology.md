---
fileClass: Base, Summaries
title: 
Parents: ["[[Hydrogeology]]"]
Draft: 
Status: In Progress
Related Notes: 
Related Terminology: 
Related Courses: ["[[Hydrogeology]]"]
---
# 1. Porosity
The [[Porosity]] of a soil or rock is that fraction of a given volume of material that is occupied by void space, or interstices. Porosity, indicated by the symbol $n$, is usually expressed as the ratio of the volume of voids, $V_v$, to the total unit volume, $V_t$. of a soil or rock, such that 

$$
n = \frac{V_v}{V_t} \tag{1.1}
$$

>[!Info]
>Porosity can be determined in the laboratory from knowledge of the bulk mass density, $\rho_b$, and particle mass density, $\rho_s$, of the porous material using the relationship
>
>$$
>n = 1 - \frac{\rho_b}{\rho_s} \tag{2.1b}
>$$
>
>More on this in [[Hiscock & Bense (2021)-Chapter 7]]

Porosity is closely associated with the [[Void Ratio]], $e$, the ratio of the volume of voids to the volume of the solid material, $V_s$, such that

$$
e = \frac{V_v}{V_s} \tag{1.2}
$$

The relation between porosity and the void ratio can be expressed as 

$$
n = \frac{e}{(1+e)} \tag{1.3a}
$$

or

$$
e = \frac{n}{(1-n)} \tag{1.3b}
$$

In general, unconsolidated sediments such as gravels, sands, silts and clays, which are composed of angular and rounded particles, have larger porosities than indurated, consolidated sediments such as sandstone and limestone. Crystalline igneous and metamorphic rocks have especially low porosities because the pores are merely within the inter-crystal surfaces. Conversely, formations rich in platy clay minerals with very fine grain size can achieve high porosity values.

![[Pasted image 20240914131213.png]]

As illustrated in Fig. 2.1, porosity is controlled by the shape and arrangement of constituent grains, the degree of sorting, compaction, cementation, fracturing and solutional weathering. Porosity values range from negligibly small (0%) for unfractured to 0.1 (10%) for weathered crystalline rocks to 0.4–0.7 (40%–70%) for unconsolidated clay deposits.

>[!Important]
>There is a distinction between primary porosity, which is the inherent character of a soil or rock matrix that developed during its formation, and secondary porosity. Secondary porosity may develop as a result of secondary physical and chemical weathering along the bedding planes and joints of indurated sediments such as limestones and sandstones, or as a result of structurally controlled regional fracturing and near-surface weathering in hard rocks such as igneous and metamorphic rocks. Where both primary and secondary porosities are present, a dual-porosity system is recognized, for example as a result of fracturing and fissuring in porous sandstone or limestone.

Not all the water contained in the pore space of a soil or rock can be viewed as being available to groundwater flow, particularly in fine grained or fractured aquifers. In an aquifer with a water table, the volume of water released from groundwater storage per unit surface area of aquifer per unit decline in the water table is known as the [[Specific Yield]], $S_y$. The fraction of water that is retained in the soil or rock against the force of gravity is termed the [[Specific Retention]], $S_r$. 

The sum of the specific yield $S_y$ and the specific retention $S_r$, that is, $S_y + S_r$,, is equal to the total porosity, $n$. 

It is useful to distinguish the total porosity from the [[Effective Porosity]], $n_e$, of a porous material. The total porosity relates to the storage capability of the material whereas the effective porosity relates to the transmissive capability of the material. 

>[!Missing]
>Find out the difference between specific storage, specific yield, specific retention and storativity


---
# 2. Hydraulic Conductivity
The [[Permeability|Hydraulic Conductivity]] or, as it is occasionally referred to in older publications, the coefficient of [[Permeability]], $K$, has dimensions of [L T$^{−1}$] and is a measure of the ease of movement of a water through a porous material. 

>[!Info]
>Values of hydraulic conductivity display a wide range in nature, spanning 13 orders of magnitude

In general, coarse-grained and fractured materials have high values of hydraulic conductivity, while fine-grained silts and clays have low values.

>[!Note]
>The properties of the geological material will significantly influence the [[Isotropy]] and homogeneity of the hydraulic conductivity distribution. 

The hydraulic conductivity of geological materials is not only a function of the physical properties of the porous material, but also the properties of the migrating fluid, including specific weight, $\gamma$ ( = $\rho g$, where $\rho$ is the density of the fluid and $g$ is the gravitational acceleration), and viscosity, $\mu$, such that 

$$
K = k_i \frac{\gamma}{\mu} \tag{2.4}
$$

where the constant of proportionality, $k_i$, is termed the [[Intrinsic Permeability]] because it is a physical property intrinsic to the porous material alone. 

>[!Info]
>The density and viscosity of water are functions of temperature and pressure but these effects are not great for the ranges of temperature and pressure encountered in most groundwater situations

The intrinsic permeability is representative of the properties of the porous material alone and is related to the size of the openings through which the fluid moves. The intrinsic permeability is more generally expressed as 

$$
k_i = Cd^2
$$

where
- $d$ is equal to the mean pore diameter, and
- $C$ represents a dimensionless ‘shape factor’ assessing the contribution made by the shape of the pore openings, as influenced by the relationship between the pore and grain sizes and their effect on the tortuosity of fluid flow.

---
# 3. Isotropy and Homogeneity
Aquifer properties, such as hydraulic conductivity, are unlikely to conform to the idealized, uniform porous material whether viewed at the microscopic or regional scales. The terms isotropy, anisotropy, homogeneity and heterogeneity are used to describe the spatial variation and directional trends in aquifer property values.

>[!Important]
>If the hydraulic conductivity, $K$, is independent of position within a geological formation, the formation is **homogeneous**. If the hydraulic conductivity varies from place to place, then the formation is **heterogeneous**. 

The type of heterogeneity will depend on the geological environment that gave rise to the deposit or rock type.
- **Layered heterogeneity** is common in sedimentary rocks, where each bed comprising the formation has its own hydraulic conductivity value. Strong, layered heterogeneity will be present in interbedded deposits of clay and sand. 
- Similarly, large contrasts can arise in cases of **discontinuous heterogeneity** caused by the presence of faults or large-scale stratigraphic features. 
- **Trending heterogeneity** exists in formations such as deltas, alluvial fans and glacial outwash plains where there is sorting and grading of the material deposits. 

>[!Important]
>An **isotropic** geological formation is one where the hydraulic conductivity is independent of the direction of measurement at a point in the formation. If the hydraulic conductivity varies with the direction of measurement at a point, the formation is **anisotropic** at that point. 

>[!Info]
>The principal directions of anisotropy correspond to the maximum and minimum values of hydraulic conductivity and are usually at right angles to each other. 

>[!Note]
>The primary cause of anisotropy on a small scale is the orientation of clay minerals in sedimentary rocks and unconsolidated sediments. In consolidated rocks, the direction of jointing or fracturing can impart strong anisotropy at various scales, from the local to regional. 

Combining the previous definitions, and as shown in the figure below, it is possible to recognise four possible combinations of heterogeneity and anisotropy when describing the nature of the hydraulic conductivity of a formation.

![[Pasted image 20240914134846.png]]

---
# 4. Aquifers, Aquitards and Aquicludes
Natural variations in the permeability and ease of transmission of groundwater in different geological materials lead to the recognition of aquifers, aquitards and aquicludes. An [[Aquifer]] is a layer or layered sequence of rock or sediment comprising one or more geological formations that contains water and is able to transmit significant quantities of water under an ordinary hydraulic gradient. Aquifers therefore have sufficient permeability to transmit groundwater that can be exploited economically from wells or springs. Good aquifers are usually developed in sands, gravels, solutionally-weathered limestones and fractured sandstones. 

>[!Important]
>For a soil layer to be considered an aquifer, three conditions are required
>1. The soil is porous
>2. It can store water
>3. It can transmit wate

The term [[Aquitard]] is used to describe a formation of lower permeability that may transmit quantities of water that are significant in terms of regional groundwater flow, but from which negligible supplies of groundwater can be obtained. Examples of aquitards include fluvial and glacio-fluvial silts and sandy clays, sedimentary rocks with few fractures and fractured crystalline rock.

An [[Aquiclude]] is a saturated geological unit of such low permeability that is incapable of transmitting significant quantities of water under ordinary hydraulic gradients and can act as a barrier to regional groundwater flow. Aquiclude rocks include clays, shales and metamorphic rocks.

---
# 5. Darcy's Law
Water contained within the interconnected voids of soils and rocks is capable of moving, and the ability of a rock to store and transmit water constitutes its hydraulic properties. At the centre of the laws that govern the behaviour of groundwater flow in saturated material is that formulated empirically by the French municipal engineer for Dijon, Henry Darcy, in 1856. 

Darcy studied the flow of water through porous material contained in a column and found that the total flow, $Q$, is proportional to both the difference in water level, $h_1 - h_2$, measured in manometer tubes at either end of the column and the cross-sectional area of flow, $A$, and inversely proportional to the column length, $L$. When combined with the constant of proportionality, $K$, Darcy obtained:

$$
Q = KA \frac{h_1 - h_1}{L}
$$

In general terms, [[Darcy's Law]] can be written as 

$$
Q = -KA \frac{\mathrm dh}{\mathrm dl}
$$

where $dh/dl$ represents the hydraulic gradient.

>[!Important]
>The negative sign indicates flow in the direction of high to low hydraulic head. 

$K$ is the hydraulic conductivity of the porous material. Adopting the shorthand of $dh/dl = i$, the equation above can be written as

$$
Q = -AiK
$$

Now, combining equations these equations gives a full expression of the flow through a porous material as

$$
\frac{Q}{A} = q = -K \frac{\mathrm dh}{\mathrm dl} = \frac{Cd^2 \rho g}{\mu} \frac{\mathrm dh}{\mathrm dl}
$$

The quotient $Q/A$, or $q$, indicates the discharge per unit cross-sectional area of saturated porous material. The term $q$, referred to as the [[Flux Density|Specific Discharge]], has the dimension of velocity [L T$^{-1}$] and is also known as the Darcy velocity or Darcy flux. 

>[!Note]
>It is important to remember that the darcy velocity is not the true, microscopic velocity of the water moving along winding flowpaths within the soil or rock. Instead, by dividing the specific discharge by the fraction of open space (in other words, [[Effective Porosity]], $n_e$) through which groundwater flows across a given sectional area, this provides an average measure of groundwater velocity such that 
>
>$$
>\frac{Q}{An_e} = \frac{q}{n_e} = \bar{v}
>$$
>
>where $\bar{v}$ is the average linear velocity


---
# 6. Transmissivity and Storativity of Confined Aquifers

For a confined aquifer of thickness $b$, [[Conductance|Transmissivity]] (also called **Conductance**), $T$, is defined as 

$$
T = Kb
$$

and represents the rate at which water of a given density and viscosity is transmitted through a unit with of aquifer or aquitard under a unit hydraulic gradient. Transmissivity has the units of $L^2 \, T^{-1}$ 

>[!Missing]
>Find out how storativity relates to specific storage, specific discharge, etc.

The [[Storativity]], or storage coefficient, $S$, of a confined aquifer is defined as 

$$
S = S_s b
$$

where $S_s$ is the [[Specific Storage]] term, and represents the volume of water that an aquifer releases from storage per unit surface area of aquifer per unit decline in the component of hydraulic head normal to that surface. 

>[!Info]
>Storativity values are dimensionless and range in value from 0.005 to 0.00005 such that large head changes over extensive areas are required to produce significant yields from confined aquifers.

