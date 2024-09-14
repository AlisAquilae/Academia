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

The hydraulic conductivity of geological materials is not only a function of the physical properties of the porous material, but also the properties of the migrating fluid, including specific weight, $\gamma$ ( = $\rho g$, where $\rho$ is he density of the fluid and $g$ is the gravitational acceleration), and viscosity, $\mu$, such that 

$$
K = k_i \frac{\gamma}{\mu} \tag{2.4}
$$

where the constant of proportionality, $k_i$, is termed the intrinsic permeability because it is a physical property intrinsic to the porous material alone. 

>[!Info]
>The density and viscosity of water are functions of temperature and pressure but these effects are not great for the ranges of temperature and pressure encountered in most groundwater situations

The intrinsic permeability is representative of the properties of the porous material alone and is related to the size of the openings through which the fluid moves. The intrinsic permeability is more generally expressed as 

$$
k_i = Cd^2
$$

where
- $d$ is equal to the mean pore diameter, and
- $C$ represents a dimensionless ‘shape factor’ assessing the contribution made by the shape of the pore openings, as influenced by the relationship between the pore and grain sizes and their effect on the tortuosity of fluid flow.