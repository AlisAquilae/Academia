---
fileClass: Base, Literature Notes
title: 
Parents: 
Draft: 
Status: 
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# 8.1 Introduction
Sediment can be defined as fragmented material formed by physical and chemical weathering of rocks. Once that sediment enters a river by runoff it cam remain immobile or be transported, which is caused by drag forces between sediment particles and the surrounding turbulent waters. The drag forces exerted by the river flow compete with gravity and with the resistance to particle entrainment resulting from neighbouring particles. In the present chapter first the relation between river flow, sediment transport and morphological behaviour is describes. Subsequently, the basic characteristics of river sediment will be introduced, whereafter the thresholds for sediment motion are analysed. 

---
# 8.2 Sediment transport, bed morphology and plan-form shape
Natural rivers are dynamic elements of a landscape that constantly evolve in time, even in case of a constant discharge. Depending on the hydrological regime and geophysical setting, the planform shape of a river channel can be either meandering, braiding or straight. 
- Meandering rivers scour their bends which leads to an evolutionary pattern characterised by the alternation of gradual elongation and sudden shortening by cutoff events
- Braiding river reaches are composed of sand bars, bifurcations where streams diverge and confluences where streams converge. Whereas the morphological behaviour of meandering rivers are fairly well-understood and to some degree predictable, braiding rivers develop chaotically and do rarely allow for deterministic predication. 
- Natural straight river channels are often a sign of persistent flow conditions

Within a river channel the river bed can feature bedforms of several types. Starting from a flat bed, increasing flow velocity typically results successively in ripples ($\text{Fr} \ll 1$), dunes ($\text{Fr} \lt 1$), flat bed ($\text{Fr} \le 1$), standing waves ($\text{Fr} = 1$) and antidunes ($\text{Fr} \gt 1$). At extremely high flow velocities that sometimes occur in mountainous streams, chutes and step-pools may form, where the steps often consist of bed rock material. Bedforms have a great influence on flow resistance. The shear stress at the bed is composed not only of a contribution of the grains but also of an additional contribution caused by drag of the bedforms. In the Netherlands dunes develop in the Rhine during relatively high discharges, which at times leads to undesirably high water levels.

The morphological behaviour of rivers briefly introduced above is an isolated component of the interaction between water motion, sediment transport and geomorphology. Figure 8.5 presents a flow chart of what can be termed the morphological feedback system. Water flow over an alluvial bed (meaning that the bed non-fixed as it consists of alluvium, i.e. eroded sediment) can cause entrainment, transport and settling of bed sediment. The systematic displacement of sediment by river flow causes planform changes and bedform dynamics. In turn, changes in the river planform and bedform developments alter flow patterns and the associated sediment transport processes. Understanding morphological developments in rivers thus requires to consider processes of flow and sediment transport. 


![[Pasted image 20250330101101.png]]

---
# 8.3 Bulk properties of sediment
The dynamic interaction between water and sediment is for a major part dependent on the bulk properties of sediment, i.e. the properties of groups of sediment particles. Various sediment particles suspended in a river flow may have different sizes, shapes, specific gravities and fall velocities. The characteristic properties of the sediment are determined by taking a number of samples and making a statistical analysis of the samples to determine the mean, distribution and standard deviation of the sample. 

The first property to classify is sediment size. Several slightly differing definitions apply to the sediment diameter:
- Sieve diameter: diameter of the smallest circle that encompasses one dimension of the grain
- Sedimentation or standard fall diameter: diameter of the quartz sphere that would settle at the same speed as the sediment grain in still, distilled water at 24 degree Celsius. It arises from settling type measurements of grain size. 
- Nominal diameter: represents the diameter of the sphere that would take up the same volume as the sediment grain

Sieve diameter and standard fall diameter are readily measurable quantities. The nominal diameter is particularly convenient when sediment volume transport is to be calculated.

Grain sizes are often reported in millimeters (mm) or microns ($\mu$m). The classification of sediment is given in Table 8.1. 

![[Pasted image 20250330101735.png]]

As one can see the absolute difference between the diameter of e.g. a clay particle and a silt particle is much smaller than between a sand particle and a gravel particle. To be able to show both differences in one diagram, "phi" units ($\phi$) are introduced. The phi scale is logarithmically spaced, and grain diameter increases as phi size decreases. The conversion between the phi scale and diameter is:

$$
\begin{aligned}
D &= 2^{-\phi} \\
\phi &= - \frac{\ln(D)}{\ln(2)}
\end{aligned}
$$

Alluvial sediment can be uniform, meaning that differences in sediment size within a sample are negligible, or be a mixture of the basic sediment classes given in Table 8.1. The population of sediment sizes found at a particulate time and place is described by the grain size distribution, which in turb can be parameterised. The median grain size $d_{50}$ is defined as the size for which 50% by weight of the material is finer. In general, $d_x$ is defined as the size for which $X$% by weight of the material is finer.

The geometric mean is the weighted average of phi size, as opposed to the arithmetic average being the weighted mean of the grain size. The geometric standard deviation $\sigma_g$ of grain size distribution indicates how well-sorted the grain distribution is. Assuming a log-normal distribution, an estimate of $\sigma_g$ can be obtained from

$$
\sigma_g = \sqrt{ \frac{d_{84}}{d_{16}}}
$$

The closer $\sigma_g$ approaches to unity, the better the sediment is sorted. In this chapter, the focus is on non-cohesive sediments, and in particular on sands. Cohesive sediment (clay or silt) forms aggregates (also called flocs), which form and breakup under the influence of physical and chemical processes. The latter processes are beyond the scope of the present lecture. 


---
# 8.4 Particle fall velocity
Sediment particles are subject to gravity, and will therefore settle when they are suspended in water at rest. The terminal fall velocity is the particle velocity at equilibrium, i.e. the sum of gravity force, buoyancy force and fluid drag being equal to zero. The net gravitational force acting on a suspended particle $F_g$ is defined as the difference between weight ($F_G = \rho_s \, V \, g$) and buoyancy ($F_b = \rho \, V , g$), where $\rho_s$ and $\rho$ are sediment and fluid densities respectively, $V$ is the sediment particle volume and $g$ is the gravitational acceleration

$$
\begin{aligned}
F_g &= F_G - F_b \\
&= (\rho_s - \rho) \, V \, g
\end{aligned}
$$

In case of an equilibrium (steady fall of the particle) the net gravitational force is balanced by the drag force $F_D$, which reads

$$
F_D = C_D \, A \, \frac{1}{2}\rho \, w_f^2
$$

Herein
- $C_D$ is the drag coefficient
- $A$ is the particle's cross-sectional area perpendicular to the trajectory of its motion
- $w_f$ is the particle fall velocity.

Equating the previous two equations and rearranging yields a general law for settling:

$$
w_f = \sqrt{\frac{\rho_s - \rho}{\rho} \frac{g}{C_D / 2} \frac{V}{A}}
$$

The particle [[Reynolds Number]] is defined as $\text{Re}_p = u \, D / \nu$, wherein $u$ is the velocity of the particle relative to the fluid, $D$ is the particle diameter, and $\nu$ is the [[Kinematic Viscosity]]

