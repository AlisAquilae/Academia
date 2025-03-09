---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Catchment and Climate Hydrology]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Catchment and Climate Hydrology]]"]
---
# Abstract
The purpose of this paper is to describe hydrology to a scientifically-literate audience of non-hydrologists and to highlight its evolution over the last 30 years from a field focused on engineering problems at the scale of the small watershed to one dealing with global-scale issues which demand a geophysical perspective. The Ralph M. Parsons Laboratory at MIT has been one of the leaders of this evolution, and the illustrations presented of things that (some) hydrologists do are drawn primarily from recent work done there. These include: introduction of the concept of _hydrologic scale_ along with its definition, significance and estimation; the sub-grid scale parametrization of precipitation and vegetation in atmospheric GCMs; precipitation recycling; and completion of the land surface-atmosphere feedback loop for moisture at climatic time scales.

---
# 1. Definition and historical perspective
Formally, hydrology deals with the occurrence, distribution, circulation, and properties of water. The field grew up out of concern for water as both a necessity of life and a possible hazard; its central application is forecasting water availability and hazardousness. 

As we perceive it today, hydrology is a geoscience whose scientific basis lies in the physics, chemistry, and biology of what we call the ‘hydrologic cycle’. The hydrologic cycle, illustrated in Fig. 3, is a global geophysical process that circulates a fairly constant stock of water among the various components of the earth system. It is an endless sequence of evaporation (from both land and ocean) vapor transport in the atmosphere, condensation, precipitation, and liquid flow on and within the earth’s crust which serves, because of phase changes along the way, to redistribute heat as well as water mass on human time scales both locally and globally. Figure 4 shows the cycle in the more clinical form that is useful in discussing fundamental principles.

![[Pasted image 20250309143201.png]]
![[Pasted image 20250309143214.png]]

Imagine the cartoon of Fig. 4 as a vertical column of atmosphere and soil; it is a one-dimensional representation of the continental hydrologic system. Water enters and leaves the column horizontally, as atmospheric moisture flux (with net inflow, $Q$) and as land surface and groundwater runoff, $R_s$ and $R_g$. respectively (with the net outflow $R$). Water is exchanged vertically between the atmosphere and land surface by the fluxes: precipitation, $P$, and [[Evapotranspiration]], $E$, the latter consisting of evaporation from bare soil or other solid and water surfaces, plus transpiration from the stomata of vegetation. The moisture contents of the atmosphere and of the soil are indicated by the respective state variables, $W$ and $S$. Dividing by the column along the horizontal dashed lines, we can isolate the land surface and for it write a statement of conservation of water mass that simply requires the difference between inflow and outflow in a given time interval, $\Delta t$, to produce an equal change in internal moisture storage. That is, 
$$
\text{precipitation} - \text{evapotranspiration} - \text{runoff} = \text{storage change}
$$

or mathematically,

$$
P-E-R = \Delta S \tag{1}
$$

Equation 1 is called the [[Water Balance]] equation. It is one of the two fundamental equations of hydrology, the other being the similarly derived energy balance equation, and is the only equation (albeit in various guises) that is used in this paper. These two governing equations are coupled strongly through the appearance in each of the evapotranspiration or its [[Latent Heat Flux|Latent heat]] equivalent. 

Until the mid-l 900s hydrology was largely an empirical adjunct of hydraulic and agricultural engineering and was dominated by the practical need to forecast the local response of the land surface (i.e. flood, drought, crop productivity) to the local atmospheric forcing (i.e. precipitation and net radiation). In these activities the land surface was decoupled from the atmosphere along the horizontal dashed lines of Fig. 4, implying $P$ independent of $E$. This was done intuitively because interest lay in small geographic scales, although no other way was known; the terrestrial part of the system was seen as a simple cascade with cause ($P$) leading directly to effect ($R$).

Two things happened in the mid-to-late 1960s which changed this simple cause-and-effect model for hydrologists. The first was recognition of the need for international cooperation for fair and effective use of transnational water resources and acquisition of large-scale hydrologic data; the United Nations sponsored the International Hydrological Decade (IHD) from 1965 to 1974. It was a worldwide program of cooperation in scientific hydrology proposing a new research agenda containing the themes of the hydrologic evolution being described here:
- **World water balance**: quantifying the elements of the hydrologic cycle at large space and time scales;
- **Influence of man on the hydrologic cycle**: understanding the feedback from land surface to atmosphere

These themes raised our consciousness about regional and global scale problems. 

The second thing to happen was the reception of dramatic color photographs of Earth in space, and the realization that the color variations therein were in large measure due to the presence or absence of water. This crystallized active interest by all of us in the interconnectedness of nature and in the changes being wrought by humans.

---
# 2. Some challenges and opportunities
## 2.1 Scale (==Skipped==)
Relates to El Niño being an important global hydrological concept of study

## 2.2 Human-induced global change
There are two primary human effects upon the hydrologic cycle: (1) introduction of radiatively-active gasses into the atmosphere, and (2) physical alterations of the landsurface. Both of these, through their effects upon evapotranspiration, change both the water balance and the energy balance. 

To approach these issues of large lateral scale and of global change, we have had to modify our view of the land-surface-to-atmosphere feedbacks. 

---
# 3. A sampling of recent research results
## 3.1 Definitions
First it is helpful to sketch the flow paths of water in our column of atmosphere as we have done in Fig. 10. 

![[Pasted image 20250309145310.png]]

The column has a lateral dimension defined by the geographical scale, perhaps a riverbasin, a region or a continent. There is an advective influx of atmospheric moisture, $Q_{\text{in}}$, across the upwind face of the column and an efflux, $Q_{\text{out}}$, across the downwind face. Moisture is added to the atmosphere by evapotr