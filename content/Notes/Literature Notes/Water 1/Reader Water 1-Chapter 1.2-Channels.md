---
fileClass: Base, Literature Notes
Parents: ["[[Water 1]]"]
title: 
Draft: 
Status: In Progress
Creation Date: 2024-02-17
Related Courses: ["[[Water 1]]"]
Authors: 
Year of Publication: 2024
Related Terminology: 
Related Notes: 
---
### 1. Introduction
The surface of a [[Catchment]] can be divided into land (hillslopes and flat land) and water (channels and lakes). Similar to the catchment characteristics discussed in [[Reader Water 1-Chapter 1.1-Catchment Characteristics|Chapter 1.1]], the channel network is both the result of landscape formation in the past, and the preferred route for water flow in the present.

The **Topology** (channel networks) and [[Geomorphology]] (origin of the landscape and channels) reveal much about the past and current climate, geology and land use.

This chapter contains 2 methods to classify channel networks: drainage density and pattern analysis. [[Reader Water 1-Chapter 1.7-Hydrograph|Chapter 1.7]] continues with the consequences of river discharge

---
### 2. Drainage Density
The [[Drainage Density]] $D_d$ (km $\cdot$ km$^{-2}$ or km$^{-1}$) quantifies the abundance of channels: $$D_d = \frac{L_{\text{tot}}}{A}\tag{1.1}$$
Where
- $L_{\text{tot}}$ (m) = the total length of all channels in a certain area $A$
- $A$ (m$^2$) = The chosen area (typically a catchment)

>[!Important]
>A high drainage density indicates that a certain area contains many channels (per km$^2$). Consequently, the average distance from a location on land to the nearest channel is small. Water only has to travel a small distance over and through the ground to the surface of water networks

>[!Note]
>Climate, geology, soil, land cover and human activities affect the drainage density

>[!Info]
>In temperate climates, $D_d$ is about 1.5 km$^{-1}$ for natural areas, meaning that 1.5 km of channel is necessary to drain a catchment with an area of 1 km$^2$. In wet climates, more water has to be drained, leading to the formation of more channels and a high drainage density. 

Drainage densities are also high in areas with low soil [[Permeability|Conductivity]]. If it is difficult for water to flow through the ground, water has to flow over the ground and if that happens often, a channel is shaped. Agricultural areas also have a high (man-made) drainage density, especially in lowland areas where shallow groundwater needs to be discharged quickly.

---
### 3. Channel Networks
Natural channel networks are organised efficiently because nature strives for minimal energy use and an equal energy distribution over the entire system. Although different shapes of river networks occur, the most common one is the **dendritic** pattern (tree shaped). This shape is often present in natural forms, such as veins on leaves, lightning, blood veins and lungs, showing that this pattern is the most efficient for transport of a variety of substances

---
### 4. Drainage Patterns
Natural channel networks can have various patterns, which often relate to the geology. Examples include:
- The **dendritic pattern**, which is present in landscapes with homogeneous geological formations (either soil or rock), and contains many tributaries (branches)
- The **radial pattern**, where streams start from one central point and flow in all directions. This pattern is often seen on volcanoes and other mountains. 
- The **trellis pattern**, which is often found in areas with folds in the earth crust. The river pattern is characterised by a relatively large number of channels that have the same direction on each side of the river
- The **parallel pattern** occurs on step slopes, where the water flows downhill fast.

>[!Error]
>Insert Picture

---
### 5. Network Ordering
Channels that are located in the [[Headwater]] (upstream part) of a catchment behave differently from channels further downstream:
- They run dry more often
- The chemistry of the stream water is only determined by local conditions (and not influenced by water coming from upstream)

To distinguish these types of channels, [[Network Ordering]] can be applied. 

The channel network can be divided into:
- ==links== (channel segments) 
- ==junctions== (locations where channels merge). 
- A ==source== is a location upstream where a channel starts. 
- Links between a source and the first junction are called ==exterior links==
- Links between two junctions are called ==interior links==
- The ==outlet== is the end-point downstream

A common network ordering method is [[Strahler Order Numbering]]. Its rules are:
1. All exterior links get the order 1
2. When links of the same order merge, add one for the link downstream of the junction (e.g. two order 2's merge into an order 3)
3. When links with a different order merge, the link downstream of the junction will have the same order as the highest order of the merging links (e.g. when an order 1 and an order 3 stream merge, the downstream link is a 3rd order stream)
4. The highest order is always found at the outlet and represents the ==Strahler Order== of the catchment

>[!Error]
>Insert Picture. Edit [[Strahler Order Numbering]]
