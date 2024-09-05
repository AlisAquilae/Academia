---
fileClass: Base, Lecture Notes
title: 
Parents: ["[[Hydrogeology]]"]
Draft: 
Status: To Revisit
Related Notes: 
Related Terminology: 
Related Courses: ["[[Hydrogeology]]"]
---

# Porisity
Groundwater is found in voids in soils, such as pores, cracks and dissolution conduits. This is called porosity

Porosity determines how much water a certain rock / soil can hold

An important first indication of whether a certain rock unit might form an aquifer or not

We measure porosity by measuring the amount of water needed to fully saturate it. 

Porosity is the ratio of the volume of voids Vv and total volume Vt

There are 2 types of porosity
- Primary porosity is developed at the time when the rock was formed. This is usually large in unconsolidated (non-cemented) rocks (e.g. sediments, sand, clay). Very small in consolidated (cemented) rocks (like granite, basalt, shale, quartzite). If the consolidation increases even more, the porosity decreases. Only to a few percent. This occurs because of burial (new sediment over old, increasing pressure) and lithification (incerased pressure and temperature and time)
- Secondary porosity is void spaces such as fractures which develop due to movement of the earth crust. These fractures can be widened even further by the dissolving processes (called karstic conduits). The volume of fractures and cavities is called secondary porosity. Crystalline rock such as igneous and metamorphic rocks have hardly any primary porosity

Sometimes the primary porosity is called matrix porosity and secondary porosity is sometimes called fracture porosity

In unconsolidated rocks, the primary porosity is defined by
- The size of the grains or rock fragments: same packing but smaller grain size does not affect total porosity
- Sorting of the grains or rock fragments. Well sorted material is high and low grain sizes separated, having higher porosity than when high and low grain size are mixed (which is called poorly sorted material)
- Arrangement / piling / packing (spatial): More efficient packing leads to a lower porosity for the same grain size
- Shape

In consolidated material rocks the primary porosity is determined by
- The 4 factors above
- The compaction
- The cementation

In a rock layer, in principle, there is a possibility of both primary and secondary porosity being present. This is called dual porosity. Usually, in unconsolidated rocks, the total porosity is only due to primary porosity; secondary porosity is almost never present. In consolidated rocks primary as well as secondary porosity can occur.

The secondary porosity is generally low compared to primary porosity, but the influence on the water flow is large. 

Effective porosity implies that not all pore spaces in a rock layer to actually contribute to groundwater flow. Some pores are not connected to other pores. The effective porosity $n_e$ is equal to the volume of connected voids $V_{cv}$ to the total volume $V_t$. 

In unconsolidated sedimentary rocks, the smaller the grain size, the higher the total porosity, but the lower the effective porosity. This is because of the chemical bonding between clay and water

Specific yield, or drainage porosity, is the ratio or percentage of the total volume which can be drained by gravity. This is a property of the unconfined aquifer. For confined aquifer, the equivalent is called specific storage. We will first discuss specific yield

Sepcific yield is the volume of water drained by gravity divided by the total volume.

The part of water that remains in the soil after draining all water with gravity, is called the specific retention. If effective porosity is equal to total porosity, the same sum of specific yield and specific retention also gives the effective porosity. 

# Groundwater Flow
The hydraulic gradient is the slope of the water table. This is the change in head over a distance. This can be measured in a piezometer with respect to a certain datum. 

gradient i = delta h / delta l

Permeability is the ability of rocks or sediments to transmit the fluid. High permeability means much water is transmitted. 

If gradient increases, discharge increases linearly. 

Discharge = k x hydraulic gradient

k = proportionality constant = permeability

Discharge is a flow rate. This is a volume of water. It has L^3 / T, e.g. m^3 / day

Hydraulic flux is discharge divided by cross-sectional area (m^2). q = Q/A. 

This hydraulic flux is also known as Darcy flux and specific discharge

Groundwater velocity. If pipe is filled with only water, the hydraulic flux would be he same as the velocity of water flowing along the pipe. However, it is mostly filled with soil. Thus, we do groundwater velocity as hydraulic flux q divided by effective porosity n_e. This is known as average linear velocity. Max velocity is 2 x average linear velocity

The hydraulic flux similarly has a linear relation with hydraulic gradient. The slope of this line is known as K, namely the hydraulic conductivity

Hydraulic flux = -K + hydraulic gradient

= -K + i

Q/A = -K i

Q = -K i A
Q = -K A \delta h / \delta L

Darcy's law is valid for laminar fluid flow only. It does not apply to turbulent flow. We can consider slow flow more easily as laminar flow

Hydraulic conductivity depends on the size of the sediment. Fine sediment (e.g. clay) is low conductivity. high permeability is high hydraulic conductivity

Darcy's experiment is 1-dimensional. We can also show it in 3 dimensions. For every direction, darcy's law in that direction. 

Hydraulic conductivity vs intrinsic permeability
- Dependent on fluid properties (such as density or viscosity) versus independent of fluid properties
- Dependent on medium properties vs only dependent on medium properties
- L/T versus L^2 

For both: connectivity of pores is important, as well as the tortuosity of the pore network (i.e. whether pores are connected linearly)

When fluid properties are taken into account do flow velocity calculations, we use hydraulic conductivity, which can be derived from permeability, fluid viscosity and density

The real subsurface is complex, in other words, heterogeneous. Heterogeneous material means conductivity varies spatially. We also have homogeneous material, in which conductivity is equal for all locations. 

We also have anisotropy. This implies that the value of conductivity at a location depends on the direction. If it does not, i.e. the value is the same for all directions, we call this isotropic. 

3 types of heterogeneity
- Leyered heterogeneity: each layer has homogeneous and isotropic K, but differences between layers. Common in sedimentary types of rocks


The equivalent horizontal hydraulic conductivity can be computed using a thickness-weightesd arithmetic average. : Sum k_i b_i / b

The equivalend vertical hydraulic conductivity can be computed using a thickness-weoghed harmonic average. Check slides

- Discontinuous heterogeneity: caused by presence of faults or large stratigraphic features (i.e. cracks in the earth's crust. This causes heterogeneity because layers shift
- Trending heterogeneity: ecists in formations like deltas and glacial outwas plains where there is a sorting and grading of the material deposits. This implies a trend in the geological fromation

# Transmissivity
When describing the transmission capacity of a small representative volume of porous media the hydraulic conductivity is used. However, the capacity of an unconfined or confined aquifer to transmit water is described as transmissivity. This is simply the hydraulic conductivity times the saturated thickness of the aquifer (i.e. the thickness of the saturated zone). Transmissivity is T 